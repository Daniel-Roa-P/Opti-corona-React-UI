import axios from 'axios';

const uploadApi = axios.create({

    baseURL: 'http://localhost:8000/'

})

export const sendAssetsJson = (task) =>  uploadApi.post('/upload/api/v1/upload/',task)
export const getAssetsListJson = (task) =>  uploadApi.post('/upload/api/v1/upload/get_assets_list/',task)
export const getAssetStructureJson = (task) =>  uploadApi.post('/upload/api/v1/upload/get_asset_structure/',task)
export const sendAttributesJson = (task) =>  uploadApi.post('/update/api/v1/update_impex/',task)

