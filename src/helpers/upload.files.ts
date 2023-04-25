import multer from "multer";
import uniqid from 'uniqid';
import path from "path";

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, db) => {
        db(null, Date.now() + uniqid() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export default upload;