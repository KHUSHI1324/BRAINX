import {auth} from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignInGoogle(){
    const history = useNavigate();
    function googleLogin(){
        const provider = new GoogleAuthProvider();
        console.log(provider);
        // alert('hi')
        signInWithPopup(auth,provider).then(async(result)=>{
          console.log(result);
          if(result.user){
            toast.success('User Logged in  Successfully',{
              position:'top-center',})
             history('/')
          }
        });
    }
    return(
        <span className='ml-2' onClick={googleLogin}>SignInGoogle</span>
    )
   
}
export default SignInGoogle;