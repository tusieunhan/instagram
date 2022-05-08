const { Post } = require("../Model/postModel");
const { cloudinary } = require("../Config/cloudinary");

const postControllers = {
  upload: async (req, res) => {
    try {
      const files = req.files;
      //   console.log(files);
      const uploadfile = async (files) => {
        const urls = [];
        for (const file of files) {
          const { path } = file;
          console.log(path);
          const newPath = await cloudinary.uploader.upload(path);
          console.log(newPath);
          let { url, public_id, resource_type } = newPath;
          urls.push({ url, public_id, resource_type });
        }
        return urls;
      };
      const photo = await uploadfile(files);

      console.log(photo);
      res.json("posttt");
    } catch (error) {
      res.status(500).json("Can not login account");
    }
  },
};

module.exports = postControllers;
