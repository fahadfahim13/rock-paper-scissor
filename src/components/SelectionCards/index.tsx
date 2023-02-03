import React, { useState } from 'react'
import { Card } from 'antd';
import Paper from './paper.png';
import Rock from './rock-left.png';
import Scissor from './scissor-left.png';
import { RPS_TYPE } from '../../utils/constants';

interface CardProps {
  selectedImg: string;
  name: string;
  setSelectedImg: (val: string) => void;
}

const SelectionCards = (props: CardProps) => {
  const logoStyle = { width: '80px', cursor: 'pointer' };
  const imgStyle = { width: '100%' };
  const { selectedImg, setSelectedImg, name } = props;

  if (selectedImg === RPS_TYPE.ROCK){
    return (
      <Card>
          <img src={Rock} alt="Rock" style={imgStyle} /> <br />
          Rock
      </Card>
    );
  } else if (selectedImg === RPS_TYPE.PAPER){
    return (
      <Card>
          <img src={Paper} alt="Paper" style={imgStyle} /> <br />
          Paper
      </Card>
    );
  } else if (selectedImg === RPS_TYPE.SCISSOR){
    return (
      <Card>
          <img src={Scissor} alt="Scissor" style={imgStyle} /> <br />
          Scissor
      </Card>
    );
  } else{
    return (
      <Card>
          <h3>{name}</h3>
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
    );
  }
}

export default SelectionCards;