import ListButton from "./ListButton";
import "../assets/styles/ui/listpages.css";

type ListItemsProps = {
  listIcon: string;
  onClose: () => void;
  onSelect: (list: string) => void;
};

const ListPages: React.FC<ListItemsProps> = ({ listIcon, onClose, onSelect }) => {
  const lists = ["lista1", "lista2", "lista3"];

  return (
    <div className="list-pages-overlay">
      <div className="list-pages">
        <button type="button" className="close-btn" onClick={onClose}>
          ✕
        </button>
        {lists.map((title, index) => (
          <ListButton
            key={index}
            title={title}
            icon={listIcon}
            active={false}
            onClick={() => onSelect(title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPages;
