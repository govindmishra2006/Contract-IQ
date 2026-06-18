import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/s3.js";

// Upload a file buffer to s3

const uploadToS3 = async (file)=>{

    console.log(file);
    const fileKey = `${Date.now()}-${file.originalname}`;
    console.log(fileKey)

    // tell aws what we want to upload

    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key:fileKey,
        Body: file.buffer,
        ContentType: file.mimetype,
    })

    await s3.send(command);

    return{
        fileKey,
        fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
    }
}

export default uploadToS3;