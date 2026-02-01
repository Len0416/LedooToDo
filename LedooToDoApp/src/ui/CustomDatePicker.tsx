import { useState } from "react";
import "../assets/styles/ui/customDatePicker.css";

type CustomDatePickerProps = {
    value?: Date;
    onConfirm: (date: Date) => void;
    onClose: () => void;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onConfirm, onClose }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(value);
    const [hour, setHour] = useState("12");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");

    const getDaysInMonth = (month: number, year: number) =>
        new Date(year, month + 1, 0).getDate();

    const days = Array.from(
        { length: getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear()) },
        (_, i) => i + 1
    );

    const handleDayClick = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDay(date); // 👈 solo actualiza estado, no dispara nada
    };

    const handleConfirm = () => {
        if (!selectedDay) return;
        const finalDate = new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        selectedDay.getDate(),
        parseInt(hour),
        parseInt(minute),
        parseInt(second)
        );
        onConfirm(finalDate); // 👈 solo aquí se envía
        onClose();            // 👈 y aquí se cierra el popup
        console.log("📆 CustomDatePicker envía:", finalDate.toISOString());
    };

    return (
        <div className="custom-date-picker">
        <div className="calendar-header">
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>◀</button>
            <span>
            {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
            </span>
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>▶</button>
        </div>

        <div className="calendar-grid">
            {days.map((day) => (
            <button
                type="button"
                key={day}
                className={`calendar-day ${
                selectedDay &&
                selectedDay.getDate() === day &&
                selectedDay.getMonth() === currentMonth.getMonth()
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleDayClick(day)}
            >
                {day}
            </button>
            ))}
        </div>

        {selectedDay && (
            <>
            <div className="selected-date">📅 {selectedDay.toLocaleDateString()}</div>
            <div className="time-picker">
                <label>Hora:</label>
                <input type="number" min="0" max="23" value={hour} onChange={(e) => setHour(e.target.value)} />
                <input type="number" min="0" max="59" value={minute} onChange={(e) => setMinute(e.target.value)} />
                <input type="number" min="0" max="59" value={second} onChange={(e) => setSecond(e.target.value)} />
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
            </>
        )}
        </div>
    );
};

export default CustomDatePicker;
