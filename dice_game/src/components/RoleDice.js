import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = () => {

const [currentDice, setCurrentDice] = useState();

const generateRandomNumber = (min, max) => {
  return Math.random() *(max-min)+min;
}

  return (
    <DiceContainer>
      <div className='dice'>
      <img src="/images/dice/dice_1.png" alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
align-items : center;
margin-top: 48px;
flex-direction: column;

.dice{
  cursor: pointer;
}

p{
  font-size: 24px;
}

`
