import React, { useCallback, useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { Basket } from '../Basket/Basket';
import './Header.css';

export function Header({ orders, onDelete }) {
    const [basketOpen, setBasketOpen] = useState(false);

    const onClose = useCallback(() => {
        setBasketOpen(false);
    }, []);

    return (
        <header>
            <div>
                <span className="logo">House staff</span>
                <ul className="nav">
                    <li>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
                <FaShoppingBasket
                    className={`shop-basket-button ${basketOpen && 'active'}`}
                    onClick={() => setBasketOpen(!basketOpen)}
                />
                {basketOpen && (
                    <Basket
                        orders={orders}
                        onDelete={onDelete}
                        onClose={onClose}
                    />
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
}
