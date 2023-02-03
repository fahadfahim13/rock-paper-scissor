import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import PlayerNames from './components/PlayerNames';
import Playground from './components/Playground';
import SavedGames from './components/SavedGames';
import SelectOptionType from './components/SelectOpponentType';
import { SAVED_GAMES } from './utils/constants';
import { PAGE_OPPONENT_TYPE } from './utils/enums';

function App() {
  const [userChoice, setUserChoice] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('Computer');
  const [savedGames, setSavedGames] = useState(SAVED_GAMES);

  return (
    <div className="App">
      {userChoice === '' && <SelectOptionType setUserChoice={setUserChoice} />}
      {userChoice === PAGE_OPPONENT_TYPE.COMPUTER && <Playground firstUserName={firstName} secondUserName={'Computer'} setUserChoice={setUserChoice}
      savedGames={savedGames} setSavedGames={setSavedGames} opponentType={PAGE_OPPONENT_TYPE.COMPUTER} />}
      {userChoice === PAGE_OPPONENT_TYPE.HUMAN && <Playground firstUserName={firstName} secondUserName={secondName} setUserChoice={setUserChoice}
      savedGames={savedGames} setSavedGames={setSavedGames} opponentType={PAGE_OPPONENT_TYPE.HUMAN} />}
      {userChoice === PAGE_OPPONENT_TYPE.HUMAN_NAMES && <PlayerNames setUserChoice={setUserChoice} setFirstName={setFirstName} setSecondName={setSecondName} />}
      {userChoice === PAGE_OPPONENT_TYPE.SAVED_GAMES && <SavedGames setUserChoice={setUserChoice} savedGames={savedGames} />}
      <ToastContainer />
    </div>
  );
}

export default App;
