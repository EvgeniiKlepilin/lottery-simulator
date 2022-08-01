import React from 'react';
import { getLotteryTicketNumber } from '../utils/lottery-utils';

export interface TicketDraw {
  draw: number[];
  megaplier: number;
}

interface LotteryTicketProps {
  draws: TicketDraw[];
}

const containerStyles: React.CSSProperties = {
  width: 500,

  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const numberLineStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',

  marginTop: 5,
  marginBottom: 5
};

const numberStyle = {
  marginLeft: 10,
  marginright: 10,
};

const megaplierStyle = {
  marginLeft: 25,
  marginright: 25,
};

export const LotteryTicket = ({ draws }: LotteryTicketProps) => {
  const ticketNumber = getLotteryTicketNumber();
  return (
    <div style={containerStyles}>
      <h4>Lottery Ticket #{ticketNumber}</h4>
      {draws.map((draw) => (
        <div style={numberLineStyle}>
          {draw.draw.map((num) => (
            <div style={numberStyle}>{num}</div>
          ))}
          <div style={megaplierStyle}>{draw.megaplier}</div>
        </div>
      ))}
      
    </div>
  );
};
