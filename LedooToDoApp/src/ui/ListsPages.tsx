import ListButton from "./ListButton";
import "../assets/styles/ui/listpages.css";
import { useListStore } from "../store/useListStore";

type ListItemsProps = {
  listIcon: string;
  onClose: () => void;
  onSelect: (list: string) => void;
};

const ListPages: React.FC<ListItemsProps> = ({ listIcon, onClose, onSelect }) => {
  const lists = useListStore((state) => state.lists);


  return (
    <div className="list-pages-overlay">
      <div className="list-pages">
        <button type="button" className="close-btn" onClick={onClose}>
          ✕
        </button>
        {lists.map((list) => (
          <ListButton
            key={list.id}
            title={list.name}
            icon={listIcon}
            active={false}
            onClick={() => onSelect(list.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListPages;
