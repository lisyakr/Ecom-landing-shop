import { useCallback, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Items } from './components/Items/Items';
import { data } from './data';
import { Categories } from './components/Categories/Categories';
import { ItemModal } from './components/ItemModal/ItemModal';
import './App.css';

export function App() {
    const [orders, setOrders] = useState([]);
    const [currentItems, setCurrentItems] = useState(data);
    const [showFullItem, setShowFullItem] = useState(false);
    const [fullItem, setFullItem] = useState({});

    const addToOrder = (item) => {
        if (!orders.some((el) => el.id === item.id)) {
            setOrders([...orders, item]);
        }
    };

    const deleteOrder = (id) => {
        setOrders((curOrders) => curOrders.filter((el) => el.id !== id));
    };

    const chooseCategory = (category) => {
        if (category === 'all') {
            setCurrentItems(data);
            return;
        }
        const filterCurrentItems = data.filter(
            (el) => el.category === category
        );
        setCurrentItems(filterCurrentItems);
    };

    const onShowItem = (item) => {
        setFullItem(item);
        setShowFullItem(!showFullItem);
    };

    const onCloseFullItem = useCallback(() => {
        setShowFullItem(false);
    }, []);

    return (
        <div className="wrapper">
            <Header orders={orders} onDelete={deleteOrder} />
            <Categories chooseCategory={chooseCategory} />
            <Items
                onShowItem={onShowItem}
                items={currentItems}
                onAdd={addToOrder}
            />

            {showFullItem && (
                <ItemModal
                    item={fullItem}
                    onAdd={addToOrder}
                    onShowItem={onShowItem}
                    onCloseFullItem={onCloseFullItem}
                />
            )}
            <Form />
            <Footer />
        </div>
    );
}
