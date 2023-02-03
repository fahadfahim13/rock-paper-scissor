import { useState } from 'react';
import './App.css';
import PlayerNames from './components/PlayerNames';
import Playground from './components/Playground';
import SelectOptionType from './components/SelectOpponentType';
import { OPPONENT_TYPE } from './utils/constants';

function App() {
  const [userChoice, setUserChoice] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('Computer');

  return (
    <div className="App">
      {userChoice === '' && <SelectOptionType setUserChoice={setUserChoice} />}
      {userChoice === OPPONENT_TYPE.COMPUTER && <Playground firstUserName={firstName} secondUserName={'Computer'} setUserChoice={setUserChoice} opponentType={OPPONENT_TYPE.COMPUTER} />}
      {userChoice === OPPONENT_TYPE.HUMAN && <Playground firstUserName={firstName} secondUserName={secondName} setUserChoice={setUserChoice} opponentType={OPPONENT_TYPE.HUMAN} />}
      {userChoice === OPPONENT_TYPE.HUMAN_NAMES && <PlayerNames setUserChoice={setUserChoice} setFirstName={setFirstName} setSecondName={setSecondName} />}
    </div>
  );
}

export default App;
