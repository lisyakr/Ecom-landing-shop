import React, { useCallback, useState } from 'react';
import './Form.css';

export function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = useCallback((e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }, []);

    return isSubmitted ? (
        <h2 className="dataGet">Спасибо, данные получены!</h2>
    ) : (
        <form>
            <h2>Чтобы узнать о нас больше, заполните Ваши данные</h2>
            <div>
                <label htmlFor="usernamename">Ваше имя: </label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="phone">Телефон: </label>
                <input type="text" id="phone" required />
            </div>
            <button id="submit" type="button" onClick={submitForm}>
                Отправить
            </button>
        </form>
    );
}
