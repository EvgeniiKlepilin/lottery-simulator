import React from 'react';

interface BuyButtonProps {
    clickHandler: () => void;
}

const styles: React.CSSProperties = {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 2,
    cursor: "pointer",
    marginTop: 5,
    marginBottom: 5,
};

export const BuyButton = (props: BuyButtonProps) => {
    return (
        <div style={styles} onClick={() => props.clickHandler()}>
            Buy Ticket
        </div>
    );
};