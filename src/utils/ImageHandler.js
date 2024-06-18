import { Storage } from "@google-cloud/storage";


const storage = new Storage({
    keyFilename:"keys.json"
})

const bucketName = "mayavi_fashion"

export async function  ImageUpload (file) {
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
        // const url = `https://storage.cloud.google.com/${data[1].id}`
        console.log(data);
        // console.log(files)    
    } catch(err){
        console.log(err)
    }
}