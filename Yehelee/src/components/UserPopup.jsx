import { useState,useEffect } from 'react';
import { 
  FaUserPlus, FaSignInAlt, FaThumbsUp, 
  FaCloudUploadAlt, FaGlobe, FaQuestionCircle, FaCommentDots 
} from 'react-icons/fa';
import SignUp from '../sections/SignUp';

function UserPopup() {
  const [openSignUp, setOpenSignUp] = useState(false);

  useEffect(() => {
    if (openSignUp) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }

    // Cleanup function to reset the overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openSignUp]);

  return (
    <div 
      className="absolute right-3 top-20 w-72 max-h-96 bg-zinc-900 p-4 rounded-lg shadow-lg z-50 overflow-y-auto"
      style={{ zIndex: 9999 }}
    >
      <div className="flex flex-col space-y-4 text-white">
        
        {/* Top Buttons */}
        <div className="grid grid-cols-3 gap-4">
          {/* Sign Up */}
          <button 
            className="items-center text-center hover:text-yellow-300"
            onClick={() => setOpenSignUp(true)}
          >
            <FaUserPlus className="text-5xl rounded-full bg-zinc-800 p-3 mx-auto" />
            <span className="font-semibold text-sm">Sign Up</span>
          </button>

          {openSignUp && (
            <SignUp onClose={() => setOpenSignUp(false)} />
          )}

          {/* Log In */}
          <button className="items-center text-center hover:text-yellow-300">
            <FaSignInAlt className="text-5xl rounded-full bg-zinc-800 p-3 mx-auto" />
            <span className="font-semibold text-sm">Log In</span>
          </button>

          {/* Liked Videos */}
          <button className="items-center text-center hover:text-yellow-300">
            <FaThumbsUp className="text-5xl rounded-full bg-zinc-800 p-3 mx-auto" />
            <span className="font-semibold text-sm">Liked</span>
          </button>
        </div>

        {/* Upload */}
        <div className="flex items-center space-x-2 p-2 hover:bg-zinc-800 rounded-lg cursor-pointer">
          <FaCloudUploadAlt className="text-2xl" />
          <span className="text-sm">Upload</span>
        </div>

        {/* Language Dropdown */}
        <div className="flex items-center space-x-2 p-2 hover:bg-zinc-800 rounded-lg">
          <FaGlobe className="text-2xl" />
          <select 
            className="bg-transparent text-white border-none focus:outline-none w-full text-sm cursor-pointer"
            defaultValue="English"
          >
            <option value="English" className="text-black">English</option>
            <option value="Spanish" className="text-black">Spanish</option>
            <option value="French" className="text-black">French</option>
          </select>
        </div>

        {/* FAQ */}
        <div className="flex items-center space-x-2 p-2 hover:bg-zinc-800 rounded-lg cursor-pointer">
          <FaQuestionCircle className="text-2xl" />
          <span className="text-sm">FAQ</span>
        </div>

        {/* Feedback */}
        <div className="flex items-center space-x-2 p-2 hover:bg-zinc-800 rounded-lg cursor-pointer">
          <FaCommentDots className="text-2xl" />
          <span className="text-sm">Feedback</span>
        </div>
      </div>
    </div>
  );
}

export default UserPopup;
