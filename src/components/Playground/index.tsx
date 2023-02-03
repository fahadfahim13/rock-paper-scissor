import { Button, Col, Divider, Row } from 'antd';
import SelectionCards from '../SelectionCards';
import { PAGE_OPPONENT_TYPE } from '../../utils/enums';
import { PlaygroundProps } from './types';
import usePlaygroundLogic from './usePlaygroundLogic';

const Playground = (props: PlaygroundProps) => {
    const { setUserChoice, opponentType, firstUserName, secondUserName } = props;
    
    const { 
        firstUserScore, 
        setFirstUserData,
        secondUserScore,
        setSecondUserData,
        firstUserData, 
        secondUserData,
        generateComputerChoice,
        result,
        setResult,
        saveGame
    } = usePlaygroundLogic(props);

    return (
        <div style={{ marginTop: '5%' }}>
            <Button type='primary' onClick={() => setUserChoice('')}>Home</Button>
            <Button type='default' onClick={saveGame}>Save Game</Button>
            <Divider orientation='left' />
            <Row gutter={16}>
                <Col className="gutter-row" span={2}></Col>
                <Col className="gutter-row" span={10}>
                    <div>
                        <SelectionCards name={`${firstUserName} - ${firstUserScore}`} selectedImg={firstUserData} 
                        setSelectedImg={ opponentType === PAGE_OPPONENT_TYPE.COMPUTER? generateComputerChoice : setFirstUserData} />
                    </div>
                </Col>
                <Col className="gutter-row" span={10}>
                    <div>
                        <SelectionCards name={`${secondUserName} - ${secondUserScore}`} selectedImg={secondUserData} 
                        setSelectedImg={setSecondUserData} opponentType={opponentType} />
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