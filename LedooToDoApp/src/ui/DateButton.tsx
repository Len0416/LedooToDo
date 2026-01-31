import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";

type DateButtonProps = {
    value?: string;
    onChange: (date: string) => void;
};

const DateButton: React.FC<DateButtonProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleConfirm = (date: Date) => {
    const iso = date.toISOString().split(".")[0];
    console.log("📅 DateButton recibió:", iso);
    onChange(iso); // 👈 este es el único lugar donde se llama onChange
    };
    return (
        <div className="date-button-wrapper">
        <button type="button" className="date-button button" onClick={() => setIsOpen(!isOpen)}>
            {value ? value : "Seleccionar fecha"}
        </button>
        {isOpen && (
            <div className="date-popup">
            <CustomDatePicker
                value={value ? new Date(value) : undefined}
                onConfirm={handleConfirm}
                onClose={() => setIsOpen(false)}
            />
            </div>
        )}
        </div>
    );
};

export default DateButton;
