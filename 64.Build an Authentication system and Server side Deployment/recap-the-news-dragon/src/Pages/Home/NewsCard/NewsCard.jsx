import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url,total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex flex-grow-1 align-items-center">
         <Image src={author?.img} style={{width: '40px', height: '40px'}} roundedCircle />
         <div className="mt-3 ms-2">
          <p className="m-0">{author?.name}</p>
          <p>{moment().format('L')}</p>
         </div>
        </div>
        <div>
          <FaBookmark/>
          <FaShare/>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>
          {details < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          
        </div>
        <div>
        <FaEye/>{total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
