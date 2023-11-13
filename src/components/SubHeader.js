import { Breadcrumb, BreadcrumbItem, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

const SubHeader = ({current, detail}) => { // review again later - look at setup 
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/Home'>Home</Link>
                    </BreadcrumbItem>
                        {detail && (
                            <BreadcrumbItem>
                                <Link to='/Directory'>Directory</Link>
                            </BreadcrumbItem>
                        )}
                        <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <hr />
            </Col>
        </Row>
    )
}

export default SubHeader


