import { Storage } from "@google-cloud/storage";
import fs from "fs"


const storage = new Storage({
    keyFilename: "keys.json"
})

const bucketName = "mayavi_fashion1"

export async function ImageUpload(file) {
    try {
        const bucket = storage.bucket(bucketName);
        const destination = `images/${file.filename}`;

        const data = await bucket.upload(file.path, {
            destination: destination,
            resumable: true,
            metadata: {
                contentType: file.mimetype,
            },
        });

        fs.unlinkSync(file.path)

        const image_url = `https://storage.googleapis.com/${data[1].bucket}/${data[1].name}`
        return { image_url, image_id : data[1].name}
    } catch (err) {
        fs.unlinkSync(file.path)
        console.log(err)
    }
}


export async function deleteImage(fileName) {
    try {
        await storage.bucket(bucketName).file(fileName).delete();
        console.log(`File ${fileName} deleted successfully.`);
    } catch (err) {
        console.error('Error deleting file:', err);
        throw new Error('Failed to delete image');
    }
}