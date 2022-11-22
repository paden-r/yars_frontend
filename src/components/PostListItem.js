import React from 'react';
import {Row, Col, Card} from "react-materialize";
const PostListItem = ({ obj }) =>
    <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      className="pink darken-4"
      textClassName="white-text"
      title={obj.title}
    >
        {obj.create_date}
    </Card>
  </Col>
</Row>
    // <p className='post-list-item' itemID={obj.post_id}>{obj.create_date} - {obj.title}</p>;
export default PostListItem;