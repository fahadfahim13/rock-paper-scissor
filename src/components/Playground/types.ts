import { SAVED_GAMES_PROPS } from "../../utils/constants";
import { PAGE_OPPONENT_TYPE } from "../../utils/enums";

export interface PlaygroundProps {
    opponentType: PAGE_OPPONENT_TYPE.HUMAN | PAGE_OPPONENT_TYPE.COMPUTER;
    firstUserName: string;
    secondUserName: string;
    setUserChoice: (val: string) => void;
    savedGames: SAVED_GAMES_PROPS[];
    setSavedGames: (val: SAVED_GAMES_PROPS[]) => void;
}