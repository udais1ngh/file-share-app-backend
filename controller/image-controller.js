import File from "../model/file.js";

export const uploadImage = async (req, res) => {

    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }

    try {

        const file = await File.create(fileObj);
        res.status(200).json({ path: `${process.env.BASE_URL}/file/${file._id}` })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message })
    }

}


////////////////////////////////////////////////////////////////////////////////////////


export async function downloadImage(req, res) {
    try {

        const downloadedFile = await File.findById(req.params.fileId);
        downloadedFile.downloadContent++;

        await downloadedFile.save();

        res.download(downloadedFile.path,downloadedFile.name);
    } catch (error) {

        console.error(error.message);
        res.status(500).json({ error: error.message })

    }



}