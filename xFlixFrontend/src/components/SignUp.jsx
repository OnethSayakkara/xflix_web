import React from 'react';

const SignUp = () => {
    return (
        <div className="flex h-screen justify-center">
 <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('path/to/your/photo.jpg')" }}>
            </div>
            <div className="flex w-full items-center justify-center lg:w-1/2">
                <form className="mx-4 w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="username">Username</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="username" name="username" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" name="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="password">Password</label>
                        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" id="password" name="password" required />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;