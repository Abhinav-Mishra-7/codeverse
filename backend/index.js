const express = require("express") ;
const app = express() ;
require("dotenv").config() ;

// production setup
app.set('env', 'production');
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = 'production';
}

const main = require("./src/config/db") ;
const redisClient = require("./src/config/redis");
const compression = require("compression");

const cookieParser = require("cookie-parser") ;
const authRouter = require("./src/routes/userAuth") ;
const problemRouter = require("./src/routes/problemCreator");
const submitRouter = require("./src/routes/submit");
const cors = require("cors") ;
const aiRouter = require("./src/routes/aiChatting") ;
const emailRouter = require("./src/routes/emailVerify") ;
const videoRouter = require("./src/routes/videoCreator") ;
const contestRouter = require("./src/routes/contestRoute") ;
const paymentRouter = require("./src/routes/paymentRoutes") ;
const commentRoutes = require("./src/routes/commentRoutes") ;
const imageRouter = require("./src/routes/userImage") ;
const http = require('http');
const {initSocket} = require("./src/config/socketManager") ;

// Checking for expiry of premium
const { checkPremiumExpiry } = require('./src/utils/cronJobs');
checkPremiumExpiry();

const corsOptions = {
  origin: "https://codeverse-3-jx5t.onrender.com",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// compression middleware
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

app.use((req, res, next) => {
  // Allow popups for OAuth flows (Google, GitHub, etc.)
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  
  // Embedder policy for iframes
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  
  // Prevent clickjacking
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  
  // Enable XSS protection
  res.setHeader("X-XSS-Protection", "1; mode=block");
  
  // Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");
  
  next();
});

app.use(cors(corsOptions));

app.use(express.json()) ;
app.use(cookieParser()) ;

const server = http.createServer(app);
const io = initSocket(server);

app.set('socketio' , io) ;

// Dealing with Routes
// Register , login , logout , adminRegister , deleteProfile
app.use("/user" , authRouter) ;
// create , update , delete , getProblem , getAllProblem 
app.use("/problem" , problemRouter) ; 
// runCode , submitCode
app.use("/submission" , submitRouter) ;
// AI chat bot
app.use('/ai' , aiRouter) ;
// email verification
app.use('/api' , emailRouter) ;
// Video creator
app.use('/video' , videoRouter) ;
// Comment
app.use("/comment" , commentRoutes) ;
// contest router
app.use("/contest" , contestRouter) ;
// payment route
app.use("/payments" , paymentRouter) ;
// profile image
app.use("/image" , imageRouter) ;




// parallely calling two function to connent DB and redis both at the same time
const initializeConnection = async ()=>{

    try{
        await Promise.all([main() , redisClient.connect()]) ;
        console.log("DB Connected") ;
        const PORT = process.env.PORT;
        server.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    }
    catch(err)
    {
        console.log("Error : " + err) ;
    }
}


initializeConnection() ;
