import React from "react";

interface BallProps {
  value: number;
  isMegaplier?: boolean;
}

const styles = {
  margin: 5,

  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  height: 50,
  width: 50,
  borderRadius: 25,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const Ball = ({ value, isMegaplier }: BallProps) => {
  const ballStyle = isMegaplier ? {...styles, backgroundColor: 'yellow'} : styles;
  return <div key={value} style={ballStyle}>{value}</div>;
};
