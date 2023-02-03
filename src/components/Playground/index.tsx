import React, { useEffect, useState } from 'react';
import { Button, Col, Divider, Row } from 'antd';
import SelectionCards from '../SelectionCards';
import { getResult } from '../../utils/result';
import { RPS_TYPE } from '../../utils/constants';

interface PlaygroundProps {
    opponentType: string;
    firstUserName: string;
    secondUserName: string;
    setUserChoice: (val: string) => void;
}

const Playground = (props: PlaygroundProps) => {
    const { setUserChoice, opponentType, firstUserName, secondUserName } = props;    
    const [firstUserData, setFirstUserData] = useState<RPS_TYPE | string>('');
    const [firstUserScore, setFirstUserScore] = useState<number>(0);
    const [secondUserData, setSecondUserData] = useState<RPS_TYPE | string>('');
    const [secondUserScore, setSecondUserScore] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        if (firstUserData !== '' && secondUserData !== '') {
            const res = getResult(firstUserData, secondUserData);
            if(res === 1) {
                setFirstUserScore((prev) => prev + 1);
            } else if (res === 2) {
                setSecondUserScore((prev) => prev + 1);
            }
            setResult(res);
        }
    }, [firstUserData, secondUserData]);

    return (
        <div style={{ marginTop: '5%' }}>
            <Button type='primary' onClick={() => setUserChoice('')}>Home</Button>
            <Divider orientation='left' />
            <Row gutter={16}>
                <Col className="gutter-row" span={2}></Col>
                <Col className="gutter-row" span={10}>
                    <div>
                        <SelectionCards name={`${firstUserName} - ${firstUserScore}`} selectedImg={firstUserData} setSelectedImg={setFirstUserData} />
                    </div>
                </Col>
                <Col className="gutter-row" span={10}>
                    <div>
                        <SelectionCards name={`${secondUserName} - ${secondUserScore}`} selectedImg={secondUserData} setSelectedImg={setSecondUserData} />
                    </div>
                </Col>
                <Col className="gutter-row" span={2}></Col>
            </Row>
            {!result ? <p></p>: (result === 1? <p>{firstUserName} Won!!!</p> : ((result === 2)? <p>{secondUserName} Won!!!</p>: 
            <p>DRAW!!!</p>))}
            {(firstUserData !== '' && secondUserData !== '' && result) && 
            <Button type='link' onClick={() => {setResult(0); setFirstUserData(''); setSecondUserData('');}}>Reload</Button>}
        </div>
    );
}

export default Playground