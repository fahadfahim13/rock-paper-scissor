import { RPS_TYPE } from "../constants";

export const getComputerRandomChoice = (): RPS_TYPE | string => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return RPS_TYPE.ROCK;
      case 1:
        return RPS_TYPE.PAPER;
      case 2:
        return RPS_TYPE.SCISSOR;
      default:
        return '';
    }
  };