import { useParams, Link } from 'react-router-dom';
import { REPO_ITEMS } from '../data/repositorioData';
import PageHero from '../components/PageHero';
import '/src/styles/Repositorio.css';

export default function RepositorioDetail() {
  const { id } = useParams();
  const item = REPO_ITEMS.find((i) => i.id === id);

  if (!item) return (
    <div className="page-empty-state">
      <h2>Archivo no encontrado</h2>
      <Link to="/repositorio" className="page-back-link">Volver</Link>
    </div>
  );

  return (
    <>
      <PageHero badge={`📂 ${item.type}`} title={item.title} description={`${item.year} · ${item.count}`} />
      <div className="page-container repo-detail-container">
        <Link to="/repositorio" className="page-back-link">← Volver al Repositorio</Link>
        <div className="repo-detail-card">
          <div className="repo-detail-emoji">{item.emoji}</div>
          <h3>Previsualización no disponible</h3>
          <p className="repo-detail-copy">El archivo se encuentra en los registros históricos del repositorio.</p>
          <button className="download-btn download-btn--cian">Solicitar Acceso</button>
        </div>
      </div>
    </>
  );
}
