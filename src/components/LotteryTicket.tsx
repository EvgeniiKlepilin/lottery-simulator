import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { calculateWinnings, getLotteryTicketNumber } from '../utils/lottery-utils';

export interface TicketDraw {
  draw: number[];
  megaplier: number;
}

interface LotteryTicketProps {
  draws: TicketDraw[];
  winningDraw: number[];
  winningMegaplier: number;
  addMoney: (incomingMoney: number) => void;
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

const winningNumberStyle = {
  ...numberStyle,
  backgroundColor: "yellow"
};

const megaplierStyle = {
  marginLeft: 25,
  marginright: 25,
};

const winningMegaplierStyle = {
  ...megaplierStyle,
  backgroundColor: "yellow"
}

export const LotteryTicket = ({ draws, winningDraw, winningMegaplier, addMoney }: LotteryTicketProps) => {
  const [hasLongestComboMegaplier, setHasLongestComboMegaplier] = useState(false);
  const [longestCombo, setLongestCombo] = useState(0);
  const [longestComboIndex, setLongestComboIndex] = useState(0);

  useEffect(() => {
    console.log("winnings", calculateWinnings(longestCombo, hasLongestComboMegaplier));
    return () => console.log("component unmounting")
  });

  const ticketNumber = getLotteryTicketNumber();

  const renderNumber = (draw: number[], lineIndex: number) => {
    let isContinuousMatch = true;
    return draw.map((num, index) => {
      if (isContinuousMatch && num === winningDraw[index]) {
        if (longestCombo < index + 1) {
          setLongestComboIndex(lineIndex);
          setLongestCombo(longestCombo + 1);
        }
        return <div style={winningNumberStyle}>{num}</div>;
      } else {
        isContinuousMatch = false;
        return <div style={numberStyle}>{num}</div>;
      }
    });
  }

  const renderMegaplier = (megaplier: number, lineIndex: number) => {
    if (megaplier === winningMegaplier) {
      if (lineIndex === longestComboIndex) {
        setHasLongestComboMegaplier(true);
      }
      return <div style={winningMegaplierStyle}>{megaplier}</div>;
    } else {
      return <div style={megaplierStyle}>{megaplier}</div>;
    }
  }

  return (
    <div style={containerStyles}>
      <h4>Lottery Ticket #{ticketNumber}</h4>
      {draws.map((draw, index) => (
        <div style={numberLineStyle}>
          {renderNumber(draw.draw, index)}
          {renderMegaplier(draw.megaplier, index)}
        </div>
      ))}
    </div>
  );
};
