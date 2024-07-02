import axios from 'axios';

const uploadApi = axios.create({

    baseURL: 'http://localhost:8000/'

})

export const sendAssetsJson = (task) =>  uploadApi.post('/upload/api/v1/upload_images/',task)
export const sendAttributesJson = (task) =>  uploadApi.post('/update/api/v1/update_impex/',task)
