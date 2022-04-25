
const { Post } = require('../Model/postModel')
const { cloudinary } = require('../Config/cloudinary')

const postControllers = {
    upload: async (req, res) => {
        try {
            const files = req.files
            const uploadfile = async (files) => {
                const urls = [];
                for (const file of files) {
                    const { path } = file;
                    const newPath = await cloudinary.uploader.upload(path);
                    let { url, public_id } = newPath
                    urls.push({ url, public_id });
                }
                return urls;
            }
            const photo = await uploadfile(files)

            console.log(photo)
            res.json("posttt")
        } catch (error) {
            res.status(500).json("Can not login account");
        }
    }

}

module.exports = postControllers;