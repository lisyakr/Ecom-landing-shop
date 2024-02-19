import { useEffect, useRef } from 'react';
import './ItemModal.css';

export function ItemModal({ item, onAdd, onShowItem, onCloseFullItem }) {
    const ref = useRef(null);

    const onClickOutsideFullItem = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            onCloseFullItem();
        }
    };

    useEffect(() => {
        document.addEventListener('mouseup', onClickOutsideFullItem);

        return () => {
            document.removeEventListener('mouseup', onClickOutsideFullItem);
        };
    }, []);

    return (
        <div className="full-item item">
            <div ref={ref}>
                <div
                    className="item_image"
                    onClick={() => onShowItem(item)}
                    style={{
                        backgroundImage: `url(${
                            `${process.env.PUBLIC_URL}/image/` + item.img
                        })`,
                    }}
                />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className="add-to-cart" onClick={() => onAdd(item)}>
                    +
                </div>
            </div>
        </div>
    );
}
