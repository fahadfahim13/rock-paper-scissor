import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { SAVED_GAMES_PROPS } from '../../utils/constants';
import { RPS_TYPE } from '../../utils/enums';
import { getComputerRandomChoice } from '../../utils/functions/generateRandom';
import { getResult } from '../../utils/functions/result';
import { PlaygroundProps } from './types';

const usePlaygroundLogic = (props: PlaygroundProps) => {
    const { firstUserName, secondUserName, savedGames, setSavedGames } = props;
    const [firstUserData, setFirstUserData] = useState<RPS_TYPE | string>('');
    const [firstUserScore, setFirstUserScore] = useState<number>(0);
    const [secondUserData, setSecondUserData] = useState<RPS_TYPE | string>('');
    const [secondUserScore, setSecondUserScore] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const successNotify = () => toast.success("Game Saved successfully!");

    const generateComputerChoice = (val: RPS_TYPE | string) => {
        const choice: RPS_TYPE | string = getComputerRandomChoice();
        setFirstUserData(val);
        setSecondUserData(choice);
    }

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

    const saveGame = () => {
        const game: SAVED_GAMES_PROPS = {
            key: (savedGames.length).toString(),
            player1: firstUserName,
            player1_score: firstUserScore,
            player2: secondUserName,
            player2_score: secondUserScore,
        };
        const newSavedGames = [...savedGames, {...game} ];
        setSavedGames(newSavedGames);
        successNotify();
    }

    return { 
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
    }
}

export default usePlaygroundLogic