import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// register api called by auth
export const registerAPI = async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register`,reqBody)
}