import React, { useState } from "react";
import { useListStore } from "../../store/useListStore";
import type { List } from "../../types/List";

type Props = {
  onClose: () => void;
  onEdit: () => void;
  list: List;
};

const EditListModal: React.FC<Props> = ({ onClose, list }) => {
  const { editList, removeList } = useListStore();
  const [title, setTitle] = useState(list.name);
  const [notes, setNotes] = useState(list.notes);

  const handleEdit = () => {
    if (title.trim()) {
      editList(list.id, title, notes);
      setTitle("");
      setNotes("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Editar lista</h2>
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
          <button className="save-btn" onClick={handleEdit}>Crear</button>
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="delete-btn" onClick={() => { removeList(list.id); onClose(); }}>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default EditListModal;