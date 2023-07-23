/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div>
            <form className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-800 text-gray-100">
              <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form novalidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-400">Your Name</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="photo" className="block text-gray-400">Email</label>
                        <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="photo" className="block text-gray-400">Photo Url</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                <a className="underline text-gray-100"><Link to='/login'>Sign In</Link></a>
                </p>
            </form>
        </div>
        </div>
    );
};

export default SignUp;