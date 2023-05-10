import React, { useState } from "react";

import "./Form.css";

const Form = () => {
    const [tower, setTower] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            tower,
            floor,
            room,
            date,
            time,
            comment,
        };

        console.log(formData);
    };

    const handleReset = () => {
        setTower("");
        setFloor("");
        setRoom("");
        setDate("");
        setTime("");
        setComment("");
    };

    const generateTimeOptions = () => {
        const options = [];

        for (let hour = 10; hour <= 20; hour++) {
            const timeValue = `${hour}:00 - ${hour + 1}:00`;

            options.push(
                <option key={timeValue} value={timeValue}>
                    {timeValue}
                </option>
            );
        }

        return options;
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label>
                Выберите башню:
                <select
                    value={tower}
                    onChange={(e) => setTower(e.target.value)}
                >
                    <option value="">Выберите...</option>
                    <option value="А">А</option>
                    <option value="Б">Б</option>
                </select>
            </label>

            <label>
                Выберите этаж:
                <select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                >
                    <option value="">Выберите...</option>
                    {Array.from({ length: 25 }, (_, i) => i + 3).map((f) => (
                        <option key={f} value={f}>
                            {f}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Выберите переговорку:
                <select value={room} onChange={(e) => setRoom(e.target.value)}>
                    <option value="">Выберите...</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Выберите дату:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>

            <label>
                Выберите время:
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                    {generateTimeOptions()}
                </select>
            </label>

            <label>
                Комментарий:
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>

            <button type="submit">Отправить</button>
            <button type="button" onClick={handleReset}>
                Очистить
            </button>
        </form>
    );
};

export default Form;
