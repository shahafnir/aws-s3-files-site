import axios from "axios";
import { environment } from "./../environments/environment.prod";

const URL = environment.serverEndpointUrl;

export const uploadImage = async (formData) => {
  try {
    const result = await axios.post(URL + "upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getImagesData = async () => {
  try {
    const result = await axios.get(URL + "get-images");

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async (id, key) => {
  try {
    const result = await axios.delete(URL + "delete-image/", {
      data: { id, key },
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
