import modelsignup from '../assets/images/model2.jpg';
import signupSvgOne from '../assets/images/S1.svg';
import signupSvgTwo from '../assets/images/S2.svg';
import signupSvgThree from '../assets/images/S3.svg';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SignUp = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex h-screen justify-center bg-black bg-gray_black bg-opacity-80 z-50">
            <div className="flex w-full max-w-4xl items-center justify-center">
                {/* Form Section */}
                <form className="flex w-full max-w-4xl bg-zinc-900 rounded-lg shadow-md h-auto">
                    {/* Image Section */}
                    <div className="flex-1">
                        <img 
                            src={modelsignup} 
                            alt="Sign Up Model" 
                            className="w-full h-full object-cover rounded-l-lg" 
                        />
                    </div>

                    {/* Input Section */}
                    <div className="flex-1 p-4 mt-20">
                        <div className='text-4xl text-gray-500 hover:text-gray-300 -mt-20 ml-96 mb-10' onClick={onClose}>
                            <IoClose />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-center text-white">Sign Up for Free</h2>
                        <h2 className="mb-4 text-xl text-center -mt-2 text-gray-300">and enhance your experience</h2>

                        <div className='flex justify-center items-center text-center gap-4 mt-14 text-gray-300 font-semibold mb-5'>
                            <div>
                                <img 
                                    src={signupSvgOne} 
                                    alt="Sign Up Model" 
                                    className="w-12 h-12 object-cover rounded-l-lg ml-7" 
                                />
                                <p className='pt-2'>Create your own <br/>playlists.</p>
                            </div>
                            <div>
                                <img 
                                    src={signupSvgTwo} 
                                    alt="Sign Up Model" 
                                    className="w-12 h-12 object-cover rounded-l-lg ml-7" 
                                />
                                <p className='pt-2'>Engage with the<br/>community.</p>
                            </div>
                            <div>
                                <img 
                                    src={signupSvgThree} 
                                    alt="Sign Up Model" 
                                    className="w-12 h-12 object-cover rounded-l-lg ml-5" 
                                />
                                <p className='pt-2'>Tailored video<br/>suggestions.</p>
                            </div>
                        </div>

                        <div className="mb-4 mt-10">
                            <input 
                                className="w-full px-4 py-2 bg-zinc-700 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-300" 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder='Email'
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                className="w-full px-4 py-2 bg-zinc-700 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-300" 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder='Password'
                                required 
                            />
                        </div>
                        
                        {/* Centering the Sign Up button */}
                        <div className="flex justify-center mt-10">
                            <button 
                                className="w-28 justify-center bg-yellow-500 text-black font-bold text-xl p-3 rounded-md hover:bg-yellow-600 transition duration-300" 
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>

                        <p className="text-center text-gray-300 mt-4 font-semibold">Already have an account? <a href="#" className="text-yellow-500 hover:text-yellow-600">Login<span className='text-white'> here</span></a></p>
                        <p className="text-center text-gray-300 font-semibold">By signing up, you agree to our <Link to='terms' className="text-yellow-500 hover:text-yellow-600">Terms & Conditions</Link></p>
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default SignUp;