import React from 'react'

import { Card, CardImg, CardTitle, CardText, CardBody, Button, Row, Col } from 'reactstrap';
import { IElementProps } from './element.props';
import IconNote from '../../assets/icon-note.png';

const Element = (props: IElementProps) => {
    return (
        <Card className="pb-3 border-0">
            <CardImg top width="100%" src={props.imageUrl ? props.imageUrl : IconNote} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.artist}</CardText>
                <Row>
                    <Col xs={6} md={6} lg={6}><Button><div><i className="fa fa-music"></i></div> Preview</Button></Col>
                    <Col xs={6} md={6} lg={6}><Button onClick={props.onButtonClick}><div><i className="fa fa-star"></i></div> {props.buttonText}</Button></Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Element;
