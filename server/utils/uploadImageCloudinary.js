import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

export const uploadImageCloudinary = async (image) => {
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

    const uploadImage = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: "ijseproduct" },
            (error, uploadResult) => {
                if (error) return reject(error);
                resolve(uploadResult);
            }
        ).end(buffer);
    });

    return uploadImage;
};



export const uploadVideoCloudinary = async (video) => {
    const buffer = video?.buffer || Buffer.from(await video.arrayBuffer());

    return new Promise((resolve, reject) => {
        // cloudinary.uploader.upload_stream requires a readable stream, not a buffer directly
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "ijseproduct/videos",
                resource_type: "video",
                timeout: 480000, // Set timeout to 8 minutes (480,000 ms)
            },
            (error, uploadResult) => {
                if (error) return reject(error);
                resolve(uploadResult);
            }
        );
        
        // Pipe the buffer into the stream
        stream.end(buffer); // This sends the buffer to Cloudinary
    });
};


