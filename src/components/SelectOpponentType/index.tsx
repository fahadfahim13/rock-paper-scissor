import React, { useState } from 'react';
import { Button, Card, Col, Divider, Row } from 'antd';
import { PAGE_OPPONENT_TYPE } from '../../utils/enums';

const SelectOptionType = (props: {setUserChoice: (val: string) => void}) => {
    const { setUserChoice } = props;
    return (
        <div style={{ marginTop: '15%' }}>
        <Button onClick={() => setUserChoice(PAGE_OPPONENT_TYPE.SAVED_GAMES)}>Saved Games</Button>
        <Divider orientation='left' />
        <Row gutter={16}>
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={10}>
                <div>
                    <Card style={{ cursor: 'pointer', backgroundColor: '#13c2c2', color: 'white' }} onClick={() => setUserChoice(PAGE_OPPONENT_TYPE.HUMAN_NAMES)}>
                    <p></p>
                    <p>Play With Human</p>
                    <p></p>
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={10}>
                <div>
                    <Card style={{ cursor: 'pointer', backgroundColor: '#73d13d', color: 'white' }} onClick={() => setUserChoice(PAGE_OPPONENT_TYPE.COMPUTER)}>
                    <p></p>
                    <p>Play With Computer</p>
                    <p></p>
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={2}></Col>
        </Row>
        </div>
    );
}

export default SelectOptionType;

