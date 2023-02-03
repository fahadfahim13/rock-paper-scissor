import React, { useState } from 'react'
import { Card } from 'antd';
import Paper from './paper.png';
import Rock from './rock-left.png';
import Scissor from './scissor-left.png';
import { PAGE_OPPONENT_TYPE, RPS_TYPE } from '../../utils/enums';

interface CardProps {
  selectedImg: string;
  name: string;
  opponentType?: PAGE_OPPONENT_TYPE.HUMAN | PAGE_OPPONENT_TYPE.COMPUTER;
  setSelectedImg: (val: string) => void;
}

const SelectionCards = (props: CardProps) => {
  const logoStyle = { width: '80px', cursor: 'pointer' };
  const imgStyle = { width: '100%' };
  const { selectedImg, setSelectedImg, name, opponentType = PAGE_OPPONENT_TYPE.HUMAN } = props;

  if (selectedImg === RPS_TYPE.ROCK){
    return (
      <Card hoverable>
          <img src={Rock} alt="Rock" style={imgStyle} /> <br />
          Rock
      </Card>
    );
  } else if (selectedImg === RPS_TYPE.PAPER){
    return (
      <Card hoverable>
          <img src={Paper} alt="Paper" style={imgStyle} /> <br />
          Paper
      </Card>
    );
  } else if (selectedImg === RPS_TYPE.SCISSOR){
    return (
      <Card hoverable>
          <img src={Scissor} alt="Scissor" style={imgStyle} /> <br />
          Scissor
      </Card>
    );
  } else{
    return (
      <div>
      <h3>{name}</h3>
      <Card hoverable loading={opponentType === PAGE_OPPONENT_TYPE.COMPUTER}>
          <p onClick={() => setSelectedImg(RPS_TYPE.ROCK)}>
              <img src={Rock} alt="Rock" style={logoStyle} /> <br />
              Rock
          </p>
          <p onClick={() => setSelectedImg(RPS_TYPE.PAPER)}>
              <img src={Paper} alt="Paper" style={logoStyle} /> <br />
              Paper
          </p>
          <p onClick={() => setSelectedImg(RPS_TYPE.SCISSOR)}>
              <img src={Scissor} alt="Scissor" style={logoStyle} /> <br />
              Scissor
          </p>
      </Card>
      </div>
    );
  }
}

export default SelectionCards;