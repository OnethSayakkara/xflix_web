import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";
import mongoose from "mongoose";



export const update = async (req,res,next)=> {

    if (req.params.id === req.user.id) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "You can update only your account!"));
      }

}
export const deleteUser = async (req,res,next)=> {

    if (req.params.id === req.user.id) {
        try {
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("User has been deleted.");
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "You can delete only your account!"));
      }
}
export const getUser = async (req,res,next)=> {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        next(err);
      }

}

export const subscribe = async (req, res, next) => {
  try {
    // Add the user to the subscribedUsers array of the current user
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { subscribedUsers: req.params.id }, // Use $addToSet to avoid duplicates
    });

    // Increment the subscriber count of the target user
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 }, // Corrected spelling from 'subcribers' to 'subscribers'
    });

    res.status(200).json("Subscription successful.");
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    // Remove the user from the subscribedUsers array of the current user
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });

    // Decrement the subscriber count of the target user
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 }, // Corrected spelling from 'subcribers' to 'subscribers'
    });

    res.status(200).json("Unsubscription successful.");
  } catch (err) {
    next(err);
  }
};


export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{likes:id},
      $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked.")
  } catch (err) {
    next(err);
  }
};


export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{dislikes:id},
      $pull:{likes:id}
    })
    res.status(200).json("The video has been disliked.")
} catch (err) {
  next(err);
}
};

export const getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User  not found" });
    }

    // Log the user ID being used for the count
    console.log("User  ID from request:", req.params.id);

    // Convert req.params.id to ObjectId using `new` keyword
    const userId = new mongoose.Types.ObjectId(req.params.id);

    // Count the number of videos uploaded by the user
    const videoCount = await Video.countDocuments({ userId: userId });
    console.log("Video Count:", videoCount);

    // Get the subscriber count
    const subscriberCount = user.subcribers; // Corrected spelling

    // Check if the current user is subscribed to the searched user
    const isSubscribed = Array.isArray(user.subcribedUsers) && req.user ? user.subcribedUsers.includes(req.user.id) : false; // Corrected spelling

    // Return user details along with video count, subscriber count, and subscription status
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImg: user.profileImg,
        subscribers: subscriberCount,
        videoCount: videoCount, // Include video count
        isSubscribed: isSubscribed, // Include subscription status
      },
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    next(err);
  }
};