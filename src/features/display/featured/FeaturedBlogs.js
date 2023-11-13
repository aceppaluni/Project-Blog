import { useSelector } from "react-redux/es/hooks/useSelector";
import {Col, Row} from 'reactstrap';
import { Loading } from "../../../components/Loading";
import { Error } from "../../../components/Error";
import { selectFeaturedBlog } from "../blogsSlice";
import FeaturedBlog from "./FeaturedBlog";



const FeaturedBlogs = () => {

    const featuredBlogs = useSelector(selectFeaturedBlog)

    // add when you return the object from the selectfeaturedBlog function 
    const isLoading = useSelector((state) => state.blogs.isLoading)
    const errMsg = useSelector((state) => state.blogs.errMsg) 

    return  (
      <Row>
        {featuredBlogs.map((blog) => (
          <Col key={blog.id} md>
              <FeaturedBlog blog={blog} />
          </Col>
        ))}
      </Row>
  );
}

export default FeaturedBlogs