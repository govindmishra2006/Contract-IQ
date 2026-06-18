import multer from "multer"

// Storing files temporarily in memory afterwards we will send them directly to aws
const storage = multer.memoryStorage();

// Create multer instance 
const upload = multer({
    storage,
})

export default upload;