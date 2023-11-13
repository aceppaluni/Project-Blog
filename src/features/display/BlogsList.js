import Blog from "./Blog";
//import {Col} from 'reactstrap'
import { selectAllBlogs } from "./blogsSlice";
import {Row, Container} from 'reactstrap'
import { useSelector } from "react-redux/es/hooks/useSelector";
//import { Loading }from "../../components/Loading";
//import Error from "../../components/Error";

const BlogsList = () => {
    const allBlogs = useSelector(selectAllBlogs)

    const isLoading = useSelector((state) => state.blogs.isLoading)
    const errMsg = useSelector((state) => state.blogs.errMsg)

    return (
        <Container>
            {allBlogs.map((blog) => {
                return (
                    <Row key={blog.id}>
                        <Blog blog={blog}/>
                    </Row>
                )
            })}
        </Container>
    )
}


export default BlogsList

























// const DisplayBlogsList = () => {
//     const blogs = useSelector((state) => selectAllBlogs(state))

//     const isLoading = useSelector((state) => state.blogs.isLoading)
//     const errMsg = useSelector((state) => state.blogs.errMsg)

//     return isLoading ? (
//         <Loading />
//     ) : errMsg ? (
//         <Error  errMsg={errMsg}/>
//     ) : (
//         <Row>
//             {blogs.map((blog, id) => {
//                 return (
//                     <Col md className="m-1" key={id}>
//                         <Blog blog={blog}/>
//                     </Col>
//                 )
//             })}
//         </Row>
//     )
// }

// export default DisplayBlogsList