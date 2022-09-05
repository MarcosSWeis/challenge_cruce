import { image } from "@cloudinary/url-gen/qualifiers/source";
import axios from "axios";
import { array } from "yup";
import { postPublic } from "./api-service";

export function uploadImage(files: FileList | null): Promise<Array<string>> {
  let imagesPromises: Array<Promise<string>> = [];
  const cloudName = "marcosweis";
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  const config = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  };

  const formData = new FormData();
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "nv9vffxy");
      formData.append("api_key", "393595837372787");
      formData.append("timestamp", (Date.now() / 1000).toString());

      imagesPromises.push(
        postPublic(url, formData, config).then((response: any) => {
          let url: string = response.secure_url;
          return url;
        })
      );
    }
  }
  let images: Promise<Array<string>> = axios.all(imagesPromises).then((array) => {
    return array;
  });

  return images;
}
