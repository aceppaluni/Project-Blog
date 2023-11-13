import {Col} from 'reactstrap';

export default Error = ({errMsg}) => {
    return (
        <Col>
            <h4>{errMsg}</h4>
        </Col>
    )
}

//export default Error 