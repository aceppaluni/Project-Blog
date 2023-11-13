import {Container} from 'reactstrap'
import SubHeader from "../components/SubHeader"
import FeaturedBlogs from '../features/display/featured/FeaturedBlogs'

const HomePage = () => {
    return (
        <Container>
            <SubHeader current="Home"/>
            <FeaturedBlogs />
        </Container>
    )
}
export default HomePage


