import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { UserContext } from '../data/UserContext';

const LoginComponent = () => {

    const [error, setError] = useState(null);
    const {LoggedInUser, setLoggedInUser} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignin = async () => {
        try{
            const signInResponse = await axios.get("https://6788e5d02c874e66b7d6c38f.mockapi.io/One");
            // console.log("Sign In Response", signInResponse );
            let user = signInResponse.data.find((u)=>{
                return u.username === username && u.password === password;
                
            });
            console.log(user);
            if(user){
                setLoggedInUser(username);
                navigate("/");
            }
        }catch(error){
            setError("Faild to Sign In");
        }
    }

    const handleSignup = async () => {
        try{
            const signUpResponse = await axios.post("https://6788e5d02c874e66b7d6c38f.mockapi.io/One",{username, password});
            console.log("User sign Up Response", signUpResponse);
            if(signUpResponse.status === 201){
                setLoggedInUser(username);
                navigate("/");
            }
        }catch(error){
            setError("Faild to sign up");
        }     
    }   
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-left">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='mb-4'>
                <label className="block text-sm/6 font-medium text-gray-900">Username</label>
                <div className="mt-2">
                <input type="text" name="username" id="username" value={username} onChange={(e)=>{
                   setUsername(e.target.value);
                }}  required className="block w-full rounded-md bg-white py-3 px-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6" />
                </div>
            </div>

            <div className='mb-4'>
                <div className="flex items-center justify-between">
                    <label  className="block text-sm/6 font-medium text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value);
                }} required className="block w-full rounded-md bg-white py-3 px-5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6" />
                </div>
            </div>

            <div className="flex justify-center my-5" >
                <button className="cursor-pointer flex justify-center rounded-md bg-amber-600 py-3 px-5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignin}>Sign in</button>

                <button className="cursor-pointer ml-3 flex justify-center rounded-md bg-amber-600 py-3 px-5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignup}>Sign Up</button>

            </div>
          
        </div>
    </div>
  )
}

export default LoginComponent
