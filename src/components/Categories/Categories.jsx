import React from 'react';
import './Categories.css';

const categories = [
    {
        key: 'all',
        name: 'Всё',
    },
    {
        key: 'chairs',
        name: 'Стул',
    },
    {
        key: 'table',
        name: 'Столы',
    },
    {
        key: 'sofa',
        name: 'Диваны',
    },
    {
        key: 'light',
        name: 'Свет',
    },
];
export function Categories({ chooseCategory }) {
    // const [categories, setCategories] = useState();

    return (
        <div className="categories">
            {categories.map((el) => (
                <div key={el.key} onClick={() => chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
    );
}
