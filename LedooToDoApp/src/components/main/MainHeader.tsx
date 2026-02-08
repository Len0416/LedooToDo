// src/components/MainHeader.tsx
type MainHeaderProps = {
  title: string;
};

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <header className="main-header">
      <h1>{title}</h1>
      <div className="actions">
        <label className="search">
          <span className="sr-only">Buscar tareas</span>
          <input type="search" placeholder="Buscar tareas…" />
        </label>
      </div>
    </header>
  );
};

export default MainHeader;
