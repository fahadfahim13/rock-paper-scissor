export interface SAVED_GAMES_PROPS {
    key: string;
    player1: string;
    player1_score: number;
    player2: string;
    player2_score: number;
}

export const SAVED_GAMES_COLUMNS = [
    {
      title: 'Player Name',
      dataIndex: 'player1',
      key: 'player1',
    },
    {
      title: 'Score',
      dataIndex: 'player1_score',
      key: 'player1_score',
    },
    {
      title: 'Player Name',
      dataIndex: 'player2',
      key: 'player2',
    },
    {
      title: 'Score',
      dataIndex: 'player2_score',
      key: 'player2_score',
    },
  ];

export const SAVED_GAMES:SAVED_GAMES_PROPS[] = [];