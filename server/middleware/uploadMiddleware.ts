import multer from "multer";
import sharp from "sharp";

const storage = multer.memoryStorage();
const upload = multer({storage});

export default upload;