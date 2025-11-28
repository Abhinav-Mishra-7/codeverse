import { Routes, Route, Navigate, BrowserRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from "./authSlice";
import { useEffect, lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ===== CRITICAL: DO NOT LAZY LOAD =====
// These are entry points - load them immediately
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CodeVerseLanding from "./pages/LandingPage" ;
import OTPVerification from "./pages/OTPVerification";

// ===== LAZY LOAD: All authenticated pages =====
const Homepage = lazy(() => import("./pages/Homepage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const PlansPage = lazy(() => import("./pages/PlansPage"));
const WishListPage = lazy(() => import("./pages/WishlistPage"));
const EditProfilePage = lazy(() => import("./pages/profile/EditProfilePage"));

// Admin pages - only admins access these
const Admin = lazy(() => import("./pages/Admin"));
const AdminPanel = lazy(() => import("./components/admin/AdminProblem"));
const AdminDelete = lazy(() => import("./components/admin/AdminDelete"));
const AdminVideo = lazy(() => import("./components/admin/AdminVideo"));
const AdminUpload = lazy(() => import("./components/admin/AdminUpload"));
const AdminUpdate = lazy(() => import("./components/admin/AdminUpdate"));

// Contest pages
const ContestCreationPage = lazy(() => import("./components/ContestCreationPage"));
const ContestDetailPage = lazy(() => import("./pages/ContestDetailPage"));
const ContestsListPage = lazy(() => import("./pages/ContestListPage"));
const LeaderboardPage = lazy(() => import("./pages/LeaderBoardPage"));

// Payment pages
const PaymentCanceled = lazy(() => import("./components/payment/PaymentCanceled"));
const PaymentSuccess = lazy(() => import("./components/payment/PaymentSuccess"));
const PremiumDetails = lazy(() => import("./components/payment/PremiumDetails"));

// ===== LOADING FALLBACK COMPONENT =====
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center space-y-4">
      <svg 
        className="animate-spin h-12 w-12 mx-auto text-primary-from" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

// ===== PROTECTED ROUTE WRAPPER =====
const ProtectedRoute = ({ children, requireAuth = true, requireAdmin = false }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

// ===== MAIN APP COMPONENT =====
function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  // Check initial authentication
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // // Show loading state during auth check
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ===== PUBLIC ROUTES (Not Lazy Loaded) ===== */}

            <Route path="/" element={<CodeVerseLanding />} />

            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} 
            />

            <Route 
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signup />} 
            />
            <Route 
              path="/OTPVerification/:emailId/:firstName" 
              element={<OTPVerification />} 
            />

            {/* ===== PROTECTED USER ROUTES (Lazy Loaded) ===== */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
              }
            />

            
            <Route 
              path="/profilePage" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/profile/edit" 
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/wishlist" 
              element={
                <ProtectedRoute>
                  <WishListPage />
                </ProtectedRoute>
              } 
            />

            {/* ===== PROBLEM ROUTES ===== */}
            <Route 
              path="/problem/:problemId" 
              element={
                <ProtectedRoute>
                  <ProblemPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/contest/:contestId/problem/:problemId" 
              element={
                <ProtectedRoute>
                  <ProblemPage />
                </ProtectedRoute>
              } 
            />

            {/* ===== CONTEST ROUTES ===== */}
            <Route 
              path="/contest/:id" 
              element={
                <ProtectedRoute>
                  <ContestDetailPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/contest/ContestListPage" 
              element={
                <ProtectedRoute>
                  <ContestsListPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/contest/:id/leaderboard" 
              element={
                <ProtectedRoute>
                  <LeaderboardPage />
                </ProtectedRoute>
              } 
            />

            {/* ===== ADMIN ROUTES (Lazy Loaded) ===== */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requireAdmin>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/create" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/delete" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDelete />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/update" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminUpdate />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/update-problem/:problemId" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/video" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminVideo />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/upload/:problemId" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminUpload />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/contest" 
              element={
                <ProtectedRoute requireAdmin>
                  <ContestCreationPage />
                </ProtectedRoute>
              } 
            />

            {/* ===== PAYMENT ROUTES ===== */}
            <Route 
              path="/plansPage" 
              element={
                <ProtectedRoute>
                  <PlansPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/payment-success" 
              element={
                <ProtectedRoute>
                  <PaymentSuccess />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/payment-canceled" 
              element={
                <ProtectedRoute>
                  <PaymentCanceled />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/my-premium" 
              element={
                <ProtectedRoute>
                  <PremiumDetails />
                </ProtectedRoute>
              } 
            />

            {/* ===== 404 FALLBACK ===== */}
            <Route 
              path="*" 
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">404</h1>
                    <p className="text-muted-foreground">Page not found</p>
                    <Navigate to="/" replace />
                  </div>
                </div>
              } 
            />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;