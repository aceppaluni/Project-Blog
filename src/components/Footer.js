import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{size: 4, offset: 1}} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className='text-center'>
                        <h3> Created by Angelina Ceppaluni</h3>
                        <h4>Find me on GitHub</h4>
                    </Col>
                    <Col className='text-center'>
                        <a href="www.instagram.com" className='btn btn-social-icon btn-instagram'> <i className='fa fa-instagram'/> </a>{' '}
                        <a href="www.facebook.com" className='btn btn-social-icon btn-facebook'> <i className='fa fa-facebook'/> </a>{' '}
                        <a href="www.twitter.com" className='btn btn-social-icon btn-twitter'> <i className='fa fa-twitter'/> </a>{' '}
                        <a href="www.google.com" className='btn btn-social-icon btn-google'> <i className='fa fa-google'/> </a>{' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer 

