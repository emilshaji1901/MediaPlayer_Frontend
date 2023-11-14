import { commonAPI } from "./commonAPI"
import { serverURl } from "./serverURL"


//upload vdo
export const uploadAllVideos = async(reqBody)=>{
    await commonAPI('POST',`${serverURl}/videos`,reqBody)
}


//get all vdos from json server
export const getAllVideos =async()=>{
    return await commonAPI('GET',`${serverURl}/videos`,"")
}

//delete
export const deleteAllVideos =async(id)=>{
    return await commonAPI('DELETE',`${serverURl}/videos/${id}`,{})
}

//watch history
export const addToHistory =async(videoDetails)=>{
    return await commonAPI('POST',`${serverURl}/history`,videoDetails)
}

//api to get all history from json server
export const getAllHistory =async()=>{
    return await commonAPI('GET',`${serverURl}/history`,"")
}

//api to delete history
export const deleteHistory =async(id)=>{
    return await commonAPI('DELETE',`${serverURl}/history/${id}`,{})
}

//api to add categories
export const addToCategory =async(body)=>{
    return await commonAPI('POST',`${serverURl}/categories`,body)
}

//api to get category
export const getAllCategory =async()=>{
    return await commonAPI('GET',`${serverURl}/categories`,"")
}

//api to delete the categories
export const deleteACategory =async(id)=>{
    return await commonAPI('DELETE',`${serverURl}/categories/${id}`,{})
}

//api to  drag a vdo
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURl}/videos/${id}`,"")  
}

//all api to update category
export const updateCategory = async(id , body)=>{
    return await commonAPI('PUT',`${serverURl}/categories/${id}`,body)  
}


