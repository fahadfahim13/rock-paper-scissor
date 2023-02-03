import { Card, Col, Row } from 'antd';
import { useState } from 'react';
import './App.css';
import Playground from './components/Playground';
import SelectOptionType from './components/SelectOpponentType';
import { OPPONENT_TYPE } from './utils/constants';

function App() {
  const [userChoice, setUserChoice] = useState<string>('');
  return (
    <div className="App">
      {userChoice === '' && <SelectOptionType setUserChoice={setUserChoice} />}
      {userChoice === OPPONENT_TYPE.COMPUTER && <Playground firstUserName='Human' secondUserName='Computer' setUserChoice={setUserChoice} opponentType={OPPONENT_TYPE.COMPUTER} />}
    </div>
  );
}

export default App;
