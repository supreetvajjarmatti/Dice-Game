import React from 'react'
import styled from 'styled-components'

const RoleDice = () => {
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

p{
  font-size: 24px;
}

`
