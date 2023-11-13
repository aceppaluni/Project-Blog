import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

const FeaturedBlog = ({blog}) => {

    const { image, entry, title } = blog


    return (
            <div>
                <div><h2>{title}</h2></div>
                <div><img src={image} alt={title} className="feature-img"/></div>
                {/* <CardImg src={image} alt={title} className="feature-img"></CardImg> */}
                <div>
                    <p>{entry}</p>
                </div>
                {/* <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{entry}</CardText>
                </CardBody> */}
            </div>
    )
}
export default FeaturedBlog