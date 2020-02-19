import React from 'react'

import { Card, CardImg, CardTitle, CardText, CardBody, Button, Row, Col } from 'reactstrap';
import { IItemListProps } from './list-item.props';
import IconNote from '../../assets/icon-note.png';

const ListItem = (props: IItemListProps) => {
    return (
        <Card className="pb-3 border-0">
            <CardBody className="text-center">
                <Row>
                        <Col xs={12} md={8} lg={8}>
                            <Row>
                                <Col xs={12} md={2} lg={1} className="align-self-center">
                                    <p>{props.id}</p>
                                </Col>  
                                <Col xs={12} md={2} lg={2}>
                                    <CardImg src={props.imageUrl ? props.imageUrl : IconNote} alt="Card image cap" />
                                </Col>
                                <Col xs={12} md={4} lg={5} className="align-self-center">
                                    <CardTitle>{props.name}</CardTitle>
                                </Col>
                                <Col xs={12} md={4} lg={4} className="align-self-center">
                                    <CardText>{props.artist}</CardText>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4} lg={4} className="align-self-center">
                            <Row>
                                <Col xs={6} md={6} lg={6}>
                                    <Button onClick={props.onPreviewClick} disabled={props.disablePreview} className={'btn-block'}>
                                    <div><i className="fa fa-music"></i></div>
                                    {props.previewClicked ? 'Stop' : 'Preview'}
                                    </Button>
                                </Col>
                                <Col xs={6} md={6} lg={6}>
                                    <Button onClick={props.onButtonClick} className={'btn-block btn-danger'}>
                                    <div><i className="fa fa-star"></i></div>
                                    {props.buttonText}
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                </Row>
            </CardBody>
        </Card >
    );
}

export default ListItem;
