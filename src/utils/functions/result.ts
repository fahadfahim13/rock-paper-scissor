import { RPS_TYPE } from "../constants";

export const getResult = (firstData: RPS_TYPE | string, secondData: RPS_TYPE | string): number => {
    if(firstData === secondData) {
        return 3;
    }
    if (firstData === RPS_TYPE.ROCK){
        if (secondData === RPS_TYPE.PAPER){
            return 2;
        } else{
            return 1;
        }
    }

    if (firstData === RPS_TYPE.PAPER) {
        if (secondData === RPS_TYPE.SCISSOR){
            return 2;
        } else{
            return 1;
        }
    }

    if (firstData === RPS_TYPE.SCISSOR) {
        if (secondData === RPS_TYPE.ROCK){
            return 2;
        } else{
            return 1;
        }
    }
    return 0;
}