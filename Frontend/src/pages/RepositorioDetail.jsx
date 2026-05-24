import { useParams, Link } from 'react-router-dom';
import { REPO_ITEMS } from '../data/repositorioData';
import PageHero from '../components/PageHero';

export default function RepositorioDetail() {
  const { id } = useParams();
  const item = REPO_ITEMS.find((i) => i.id === id);

  if (!item) return <div style={{ textAlign: 'center', padding: '5rem' }}><h2>Archivo no encontrado</h2><Link to="/repositorio">Volver</Link></div>;

  return (
    <>
      <PageHero badge={`📂 ${item.type}`} title={item.title} description={`${item.year} · ${item.count}`} />
      <div style={{ maxWidth: 800, margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <Link to="/repositorio" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--purpura)', fontWeight: 'bold', textDecoration: 'none' }}>← Volver al Repositorio</Link>
        <div style={{ background: 'var(--oscuro)', padding: '4rem', borderRadius: 16, color: '#fff' }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>{item.emoji}</div>
          <h3>Previsualización no disponible</h3>
          <p style={{ opacity: 0.7, margin: '1rem 0' }}>El archivo se encuentra en los registros históricos del repositorio.</p>
          <button className="download-btn" style={{ background: 'var(--cian)', color: 'var(--oscuro)' }}>Solicitar Acceso</button>
        </div>
      </div>
    </>
  );
}
