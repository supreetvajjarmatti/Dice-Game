import React from 'react'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';

const GamePlay = () => {
  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore></TotalScore>
      <NumberSelector></NumberSelector></div>
      <RoleDice/>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main `
padding-top: 17px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;

  }

`