import React, { useState } from 'react'
import './LotteryGame.css'
import {genTicket, sum} from './Helper'

const LotteryGame = () => {
  let[ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  function buyTicket(){
    setTicket(genTicket(3));
  }

  return (
    <div>
        <h1>Lottery Game</h1>
        <br/>
        <div className='ticket'>
          <span>
            {ticket[0]}
            {ticket[1]}
            {ticket[2]}
          </span>
        </div>
      <br/>
      <br/>
      <button onClick = {buyTicket}>Generate New Ticket</button>
        <h3>{isWinning && "Congratulations, You Won"}</h3>
    </div>
  )
}

export default LotteryGame