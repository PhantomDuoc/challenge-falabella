import React from 'react';
import {render, screen} from '@testing-library/react';
import NumberList from "./NumberList";

test('count the occurences of the word "Falabella"', () => {
    const {container} = render(<NumberList/>);

    const falabellaOcurrences = screen.getAllByText('Falabella').length;

    let falabellaCount = 0;

    function countFalabella() {
        for (let i = 1; i <= 100; i++) {

            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    continue;
                case i % 3 === 0:
                    falabellaCount++;
                    break;
            }
        }
    }

    countFalabella();
    expect(falabellaOcurrences).toBe(falabellaCount)
});

test('count the occurences of the word "Marketplace"', () => {
    const {container} = render(<NumberList/>);

    const marketplaceOcurrences = screen.getAllByText('Marketplace').length;

    let marketplaceCount = 0;

    function countMarketplace() {
        for (let i = 1; i <= 100; i++) {
            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    marketplaceCount++;
                    break;
            }
        }
    }

    countMarketplace();
    expect(marketplaceOcurrences).toBe(marketplaceCount)
});

test('count the occurences of the word "IT"', () => {
    const {container} = render(<NumberList/>);

    const itOcurrences = screen.getAllByText('IT').length;

    let itCount = 0;

    function countIt() {
        for (let i = 1; i <= 100; i++) {
            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    continue;
                case i % 5 === 0:
                    itCount++;
                    break;
            }
        }
    }

    countIt();
    expect(itOcurrences).toBe(itCount)
});
