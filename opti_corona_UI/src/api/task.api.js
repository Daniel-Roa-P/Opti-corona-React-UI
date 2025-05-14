import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'C-CSRFToken';
axios.defaults.withCredentials = true;

const uploadApi = axios.create({

    //baseURL: 'http://localhost:8000/'
    baseURL: 'https://opti-corona-backend-django.vercel.app/'

})

export const sendAssetsJson = (assets) =>  uploadApi.post('/upload/api/v1/generate_update_csv/',assets)
export const getAssetsListJson = (task) =>  uploadApi.post('/upload/api/v1/get_assets_list/',task)
export const getAssetStructureJson = (task) =>  uploadApi.post('/upload/api/v1/get_asset_structure/',task)

export const sendAttributesJson = (task) =>  uploadApi.post('/update/api/v1/generate_update_impex/',task)
export const getClassificationsListJson = (task) =>  uploadApi.post('/update/api/v1/get_classification_list/',task)
export const getAttributesListJson = (task) =>  uploadApi.post('/update/api/v1/get_attributes_list/',task)

export const loginUser = (credentials) =>  uploadApi.post('/auth/api/v1/login/',credentials)
//export const logoutUser = (credentials) =>  uploadApi.post('/auth/api/v1/logout/',credentials)