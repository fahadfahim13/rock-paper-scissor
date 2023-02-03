import React, { useState } from 'react';
import { Button, Card, Col, Divider, Input, Row } from 'antd';
import { OPPONENT_TYPE } from '../../utils/constants';

const PlayerNames = (props: { setUserChoice: (val: string) => void; setFirstName: (val: string) => void; setSecondName: (val: string) => void; }) => {
    const { setUserChoice, setFirstName, setSecondName } = props;
    return (
        <div>

        <Row gutter={16} style={{ marginTop: '15%' }}>
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={10}>
                <div>
                    <Card style={{ cursor: 'pointer', backgroundColor: '#13c2c2', color: 'white' }}>
                    <p>Set Player1 Name: </p>
                    <p><Input placeholder="Set name.." onChange={(e) => setFirstName(e.target.value)} /></p>
                    <p></p>
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={10}>
                <div>
                    <Card style={{ cursor: 'pointer', backgroundColor: '#73d13d', color: 'white' }}>
                    <p>Set Player2 Name: </p>
                    <p><Input placeholder="Set name.." onChange={(e) => setSecondName(e.target.value)} /></p>
                    <p></p>
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={2}></Col>
        </Row>
        <Divider orientation='left' />
        <Row>
            <Col span={8}></Col>
            <Col span={8}>
                <Button type='primary' onClick={() => setUserChoice(OPPONENT_TYPE.HUMAN)}>Ok</Button>
            </Col>
            <Col span={8}></Col>
        </Row>
        </div>
    );
}

export default PlayerNames;

