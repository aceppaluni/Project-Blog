import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import {Col} from 'reactstrap'

const Blog = ({blog}) => {
    const { id, image, title, entry, tags, date} = blog

    return (
        <span className="m-2" sm='6'>
        <div key={id} className="container">
            <div className="p-2">
                <img src={image} width="25%" className="blog-img p-2" />
            </div>
            <div className="d-fex">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <h4>{tags.join(', ')}</h4>
                <p className="text-break">{entry}</p>
            </div>
        </div>
        </span>
    )
}

export default Blog


