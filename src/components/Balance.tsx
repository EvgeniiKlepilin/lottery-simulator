import React from "react";

interface BalanceProps {
  value: number;
}

const styles: React.CSSProperties = {
  color: "darkgreen",
  fontWeight: "bold"
};

export const Balance = (props: BalanceProps) => {
  return <span style={styles}>${props.value}</span>;
};
