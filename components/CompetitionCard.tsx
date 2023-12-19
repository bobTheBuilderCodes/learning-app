import React from 'react';
import { Card, Col, Row } from 'antd';

const CompetitionCard: React.FC = () => (
  <Row>
    <Col className='w-full m-4'>
      <Card title="Competition title" bordered={false}>
        Competition content
      </Card>
    </Col>
   
  </Row>
);

export default CompetitionCard;