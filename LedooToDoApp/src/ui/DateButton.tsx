import { useState, useRef, useEffect } from "react";
import CustomDatePicker from "./CustomDatePicker";

import DateIcon from "../assets/images/icons/BxCalendar.svg";

type DateButtonProps = {
    value?: string;
    onChange: (date: string) => void;
};

const DateButton: React.FC<DateButtonProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<"up" | "down">("down");
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < 300 && spaceAbove > 300) {
            setPosition("up");
        } else {
            setPosition("down");
        }
        }
    }, [isOpen]);

    const handleConfirm = (date: Date) => {
        const iso = date.toISOString().split(".")[0];
        onChange(iso);
        setIsOpen(false);
    };

    return (
        <div className="date-button-wrapper" style={{ position: "relative" }}>
        <button
            type="button"
            className="btn"
            onClick={() => setIsOpen(!isOpen)}
            ref={buttonRef}>
                <img src={DateIcon} alt="Icono de fecha" className="icon"/>
                {value ? value : "Fecha"}
        </button>
        {isOpen && (
            <div
            className={`date-popup ${position === "up" ? "popup-up" : "popup-down"}`}
            >
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
