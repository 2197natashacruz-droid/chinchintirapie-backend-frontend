import { useParams, Link } from 'react-router-dom';
import { EDU_ITEMS } from '../data/educativoData';
import PageHero from '../components/PageHero';

export default function MaterialEducativoDetail() {
  const { id } = useParams();
  const item = EDU_ITEMS.find((e) => e.id === id);

  if (!item) return <div style={{ textAlign: 'center', padding: '5rem' }}><h2>Material no encontrado</h2><Link to="/material-educativo">Volver</Link></div>;

  return (
    <>
      <PageHero badge={`📚 ${item.type}`} title={item.title} description={`Nivel: ${item.level} | ${item.pages}`} />
      <div style={{ maxWidth: 800, margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <Link to="/material-educativo" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--purpura)', fontWeight: 'bold', textDecoration: 'none' }}>← Volver a Material Educativo</Link>
        <div style={{ background: 'var(--crema)', padding: '4rem', borderRadius: 16, border: '2px dashed #ccc' }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>{item.emoji}</div>
          <h3 style={{ fontFamily: 'Boogaloo, cursive', fontSize: '2rem', color: 'var(--oscuro)' }}>{item.title}</h3>
          <p style={{ color: '#5a3e2b', margin: '1rem 0 2rem' }}>Este material es de libre distribución para fines pedagógicos.</p>
          <button className="download-btn" style={{ margin: '0 auto' }}>⬇ Descargar gratis (PDF)</button>
        </div>
      </div>
    </>
  );
}
