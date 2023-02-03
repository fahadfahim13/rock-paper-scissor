import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import { OPPONENT_TYPE } from '../../utils/constants';

const SelectOptionType = (props: {setUserChoice: (val: string) => void}) => {
    const { setUserChoice } = props;
    return (
        <Row gutter={16} style={{ marginTop: '15%' }}>
            <Col className="gutter-row" span={2}></Col>
            <Col className="gutter-row" span={10}>
            <div>
                <Card style={{ cursor: 'pointer' }} onClick={() => setUserChoice(OPPONENT_TYPE.HUMAN)}>
                <p></p>
                <p>Play With Human</p>
                <p></p>
                </Card>
            </div>
            </Col>
            <Col className="gutter-row" span={10}>
            <div>
                <Card style={{ cursor: 'pointer' }} onClick={() => setUserChoice(OPPONENT_TYPE.COMPUTER)}>
                <p></p>
                <p>Play With Computer</p>
                <p></p>
                </Card>
            </div>
            </Col>
            <Col className="gutter-row" span={2}></Col>
        </Row>
    );
}

export default SelectOptionType;

