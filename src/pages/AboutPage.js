import { Container, Row, Col } from "reactstrap";
import CreaterImg from '../app/assets/IMG_1536.JPG'
//import SubHeader from './components/SubHeader.js'
import SubHeader from "../components/SubHeader"
import ContactForm from "../components/ContactForm";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About Us"/>
            <h1 className="text-center">About me:</h1>
            <h2 className="quote text-center">First Make it work, then make it better!</h2>
            <Row className="row-content">
                <Col md className="m-4" sm='6'>
                    <p className="about-text">
                        I created this blog not only as a personal project but to assist those 
                        working a coding journey of their own.  The goal of this website/Application 
                        is to enhance the understanding of the aspiring developer and provide 
                        motivation to continue pushing through even when the concepts are 
                        difficult to understand. I hope future developers will be able 
                        to use this project as a guide for their own projects or create 
                        ideas for future projects. Thank you for all the support and happy coding!
                    </p>
                </Col>
                <Col className="m-2" md sm='6'>
                    <img src={CreaterImg} className="creator-img m-4" alt='Site creator'/>
                </Col>
            </Row>
            <hr />
            <h1>Send me some feedback:</h1>
            <ContactForm />
        </Container>
    )
}
export default AboutPage