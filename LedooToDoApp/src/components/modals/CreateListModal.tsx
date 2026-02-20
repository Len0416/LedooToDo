import { useState } from "react";
import { useListStore } from "../../store/useListStore";

type Props = {
  onClose: () => void;
};

const CreateListModal: React.FC<Props> = ({ onClose }) => {
  const { addList } = useListStore();
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleCreate = () => {
    if (title.trim()) {
      addList(title, notes);
      setTitle("");
      setNotes("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Nueva lista</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Nombre de la lista"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="input-field"
          placeholder="Notas (opcional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <div className="modal-actions">
          <button className="save-btn" onClick={handleCreate}>Crear</button>
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateListModal;
