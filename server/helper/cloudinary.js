import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dbr6f90sl",
  api_key: "497534765642573",
  api_secret: "F3kpk0YStEkPCWk081zSiN-g45Q",
});

const storage = new multer.memoryStorage();

export async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
export const upload = multer({ storage });
