import React from "react";
import { Ball } from "./Ball";

interface WinningNumbersProps {
  draw: number[];
  megaplier: number;
}

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const ballsStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const WinningNumbers = ({ draw, megaplier }: WinningNumbersProps) => {
  return (
    <div style={containerStyles}>
      <h3>Winning Numbers</h3>
      <div style={ballsStyles}>
        {draw.map((ball) => (
          <Ball value={ball} />
        ))}
        <Ball value={megaplier} isMegaplier />
      </div>
    </div>
  );
};
