import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { title, details, image_url, category_id } = useLoaderData();
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/catagory/${category_id}`}>
            <Button variant="danger">
              <FaAngleLeft />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
