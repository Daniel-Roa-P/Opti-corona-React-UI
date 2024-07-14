import axios from 'axios';

const uploadApi = axios.create({

    baseURL: 'http://localhost:8000/'

})

export const sendAssetsJson = (task) =>  uploadApi.post('/upload/api/v1/upload/',task)
export const getAssetsListJson = (task) =>  uploadApi.post('/upload/api/v1/upload/get_assets_list/',task)
export const getAssetStructureJson = (task) =>  uploadApi.post('/upload/api/v1/upload/get_asset_structure/',task)

export const sendAttributesJson = (task) =>  uploadApi.post('/update/api/v1/update/',task)
export const getClassificationsListJson = (task) =>  uploadApi.post('/update/api/v1/get_classification_list/',task)
export const getAttributesListJson = (task) =>  uploadApi.post('/update/api/v1/get_attributes_list/',task)
export const getAttributeStructureJson = (task) =>  uploadApi.post('/update/api/v1/get_attibute_structure/',task)