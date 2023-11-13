import {Container} from 'reactstrap';
import BlogsList from '../features/display/BlogsList';
import SubHeader from '../components/SubHeader'


const BlogsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <BlogsList />
        </Container>
    )
}

export default BlogsDirectoryPage