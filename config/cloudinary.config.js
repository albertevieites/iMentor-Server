const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { Readable } = require('stream');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Custom storage implementation
const cloudinaryStorage = {
  _handleFile: function (req, file, cb) {
    // Create a readable stream from the file buffer
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'imentor',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        transformation: [{ width: 1000, height: 1000, crop: 'limit' }],
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          return cb(error);
        }
        cb(null, {
          filename: result.public_id,
          path: result.secure_url,
          size: result.bytes,
          fieldname: file.fieldname,
          originalname: file.originalname,
          encoding: file.encoding,
          mimetype: file.mimetype,
          destination: 'cloudinary',
          cloudinary: result,
        });
      },
    );

    // Pipe the file to cloudinary
    file.stream.pipe(stream);
  },

  _removeFile: function (req, file, cb) {
    // Optional: implement file removal from cloudinary
    if (file.cloudinary && file.cloudinary.public_id) {
      cloudinary.uploader.destroy(file.cloudinary.public_id, cb);
    } else {
      cb();
    }
  },
};

// Create multer instance with custom storage
const uploadCloud = multer({
  storage: cloudinaryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5, // Maximum 5 files
  },
  fileFilter: (req, file, cb) => {
    // Validate file types
    const allowedMimes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'), false);
    }
  },
});

// Export both the multer instance and cloudinary config
module.exports = {
  uploadCloud,
  cloudinary,
};
