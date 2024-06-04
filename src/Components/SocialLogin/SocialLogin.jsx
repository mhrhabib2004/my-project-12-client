import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";




const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const { googleSignIn } = useAuth();
   
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
      
            
            <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <button onClick={handleGoogleSignIn} className="flex items-center gap-2">
                    <FaGoogle ></FaGoogle>
                    Continue with Google
                </button>
            </div>
        
    );
};

export default SocialLogin;