import React from "react";

type ListButtonProps = {
  title: string;
  icon: string;
  active: boolean;
  onClick: () => void;
};

const ListButton: React.FC<ListButtonProps> = ({ title, icon, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`list-btn ${active ? "active" : ""}`}
    >
      <img src={icon} alt="" className="icon" />
      {title}
    </button>
  );
};

export default ListButton;
