import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function LogInPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState();
    const loginUser = async (formValues) => {
        try {
            let response = await fetch('http://localhost:4000/user', { method: 'GET' })
            if (!response.ok) {
                // If the response is not OK, throw an error with the status code
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let users = await response.json();
            const userInfo = users.find(user => user.email === formValues.email && user.password === formValues.password);

            if (userInfo) {
                navigate('/');
            } else {
                setErrMsg('in correct user name or password');
            }
        } catch {
            console.error('Error occurred during login:', errors);
            setErrMsg('An error occurred. Please try again later.');
        }
        
    };
    return (
        <div className="max-w-md mx-auto p-8 bg-white border border-gray-300 rounded-lg shadow-lg animate-fadeIn  mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Log In</h2>
            <h1 className="mb-6 text-gray-600 text-center">Enter Your Registered Email & Password</h1>

            <form onSubmit={handleSubmit(loginUser)}>
                {/* Email */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                        id="email"
                        {...register('email', {
                            required: { value: true, message: "Email is required" },
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email" }
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email?.type && <p className="text-red-500">{errors.email?.message}</p>}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                        type="password"
                        id="password"
                        {...register('password', { required: { value: true, message: "Password required" } })}
                        placeholder="Enter your password"
                    />
                    {errors.password?.type && <p className="text-red-500">{errors.password?.message}</p>}
                </div>

                {/* Error Message */}
                <div className="text-red-500 text-center mb-4">
                    {errMsg}
                </div>

                {/* Log In Button */}
                <div className="mb-6">
                    <button
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>


    )

}