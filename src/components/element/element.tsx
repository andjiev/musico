import React from 'react'
import IconNote from '../../../public/icon-note.png';
import { Card, CardImg, CardTitle, CardText, CardBody, Button, Row, Col } from 'reactstrap';
import { IProps } from './element.props';

const Element = (props: IProps) => {
    return (
        <Card className="pb-3 border-0">
            <CardImg top width="100%" src={IconNote} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.artist}</CardText>
                <Row>
                    <Col xs={6} md={5} lg={6}><Button><i className="fa fa-music"></i> Review</Button></Col>
                    <Col xs={6} md={5} lg={6}><Button><i className="fa fa-star"></i> Collect</Button></Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Element;
