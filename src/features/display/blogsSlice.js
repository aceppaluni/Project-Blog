//import BLOGS from '../../app/shared/BLOGS'
import { createSlice } from '@reduxjs/toolkit'
import {BLOGS } from '../../app/shared/BLOGS'
//import { baseUrl } from '../../app/shared/baseUrl' 
//import { mapImgUrl } from '../../utils/mapImgUrl'

export const initialState = {
    blogsArray: BLOGS,
    isLoading: true,
    errMsg: ''
}

export const blogsSlice = createSlice({ // review again later, forgot name part 
    name: 'blogs',
    initialState,
    reducers: {},
})

export const blogsReducer = blogsSlice.reducer

export const selectAllBlogs = (state) => {
    return state.blogs.blogsArray
}

export const selectFeaturedBlog = (state)  => { // review again later 
    return state.blogs.blogsArray.filter((blog) => blog.featured)

}

export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async () => {
        const response = await fetch(baseUrl + 'blogs');
        if(!response.ok) {
            return Promise.reject('Unable to fetch response, status: ', response.status)
        }
        const data = await response.json()
        return data 
    }
)

//below code using axios 

// export const postBlog = createAsyncThunk(
//     'blogs/fetchBlogs',
//     async () => {
//         try {
//             const r = axios.post(baseUrl + 'blogs', blog, {
//                 headers: {'Content-Type': 'application/json'}
//             })
//             dispatch(addBlog(r.data))
//         } catch (error) {
//             return Promise.reject(`Failed to fetch: ${error.message}`)
//         }
//     }
// )

// export const initialState = {
//     blogsArray: BLOGS,
//     isLoading: true,
//     errMsg: ''
// }

// export const blogsSlice = createSlice({ // review again later, forgot name part 
//     name: 'blogs',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [fetchBlogs.pending]: (state) => {
//             state.isLoading = true;
//         },
//         [fetchBlogs.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.errMsg = '';
//             state.blogsArray = mapImgUrl(action.payload);
//         },
//         [fetchBlogs.rejected]: (state, action) => {
//             state.isLoading = false
//             state.errMsg = action.error ? action.error.message : 'Failed to fetch'
//         }
//     }
// })

// export const blogsReducer = blogsSlice.reducer

// export const selectAllBlogs = (state) => {
//     return state.blogs.blogsArray
// }

// export const selectFeaturedBlog = (state)  => { // review again later 
//     return {
//         feturedItem: state.blogs.blogsArray.find((blog) => blog.featured),
//         isLoading: state.blogs.isLoading,
//         errMsg: state.blogs.errMsg
//     }
// }