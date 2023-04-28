import React from 'react';
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Hooter from '../pages/Shared/footer/Hooter';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Hooter></Hooter>
    </div>
  );
};

export default NewsLayout;