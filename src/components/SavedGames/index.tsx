import { Button, Divider, Table } from 'antd';
import { SAVED_GAMES_COLUMNS, SAVED_GAMES_PROPS } from '../../utils/constants';

const SavedGames = (props: {setUserChoice: (val: string) => void; savedGames: SAVED_GAMES_PROPS[] }) => {
  const { setUserChoice, savedGames } = props;
  
  return (
    <div style={{ marginTop: '15%' }}>
      <Button onClick={() => setUserChoice('')}>Home</Button>
      <Divider orientation='left' />
      <Table dataSource={savedGames} columns={SAVED_GAMES_COLUMNS} />
    </div>
  )
}

export default SavedGames;