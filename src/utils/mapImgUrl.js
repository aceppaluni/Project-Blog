import { baseUrl } from "../app/shared/baseUrl";


// rewview again later 
export const mapImgUrl = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        }
    })
}