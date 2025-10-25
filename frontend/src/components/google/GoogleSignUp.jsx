import axiosClient from "../../utils/axiosClient";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

const GoogleSignUp = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const { data, status } = await axiosClient.post(
      '/user/google',
      { token: credentialResponse.credential },
      { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
    );

    if (status === 200 && data?.user) {
      if (data.user.verified) {
        dispatch({ type: 'auth/loginSuccess', payload: data.user });
        navigate('/');
      } else {
        navigate(`/OTPVerification/${data.user.emailId}/${data.user.firstName}`);
      }
    } else {
      throw new Error('Google authentication failed');
    }
  } catch (err) {
    toast.error(err?.response?.data?.message || err.message || 'Google authentication failed');
  }
};


  return (
    <div>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-card text-muted-foreground">OR CONTINUE WITH</span>
        </div>
      </div>
              
      <div className="flex justify-center">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={() => { toast.error('Google Sign-In failed'); }}
            useOneTap
            theme="filled_blue"
            size="large"
            shape="rectangular"
            text={text}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default GoogleSignUp;