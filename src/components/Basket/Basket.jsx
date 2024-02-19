import React, { useEffect, useRef } from 'react';
import { Order } from '../Order/Order';
import './Basket.css';

const showOrders = (orders, onDelete) => {
    let summa = 0;
    orders.forEach((el) => (summa += Number.parseFloat(el.price)));
    return (
        <>
            {orders.map((obj) => (
                <Order key={obj.id} item={obj} onDelete={onDelete} />
            ))}
            <p className="sum">
                Сумма: {new Intl.NumberFormat().format(summa)}$
            </p>
        </>
    );
};

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Товаров нет</h2>
        </div>
    );
};

export function Basket({ orders, onDelete, onClose }) {
    const ref = useRef(null);

    const onClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', onClickOutside);

        return () => {
            document.removeEventListener('mouseup', onClickOutside);
        };
    }, []);

    return (
        <div className="shop-basket" ref={ref}>
            {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
        </div>
    );
}
