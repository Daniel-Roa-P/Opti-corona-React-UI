import axios from 'axios';

const uploadApi = axios.create({

    baseURL: 'http://localhost:8000/upload/api/v1/upload_images/'

})

export const sendImagesJson = (task) =>  uploadApi.post('/',task)
