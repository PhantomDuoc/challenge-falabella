import React from 'react';

const NumberList = () => {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
        let number;
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                number = 'Marketplace';
                break;
            case i % 3 === 0:
                number = 'Falabella';
                break;
            case i % 5 === 0:
                number = 'IT';
                break;
            default:
                number = i;
                break;
        }
        numbers.push(<li key={i}>{number}</li>);
    }
    return <ul>{numbers}</ul>;
};

export default NumberList;