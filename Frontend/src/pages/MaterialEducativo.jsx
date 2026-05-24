import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';
import Ticker from '../components/Ticker';
import { EDU_ITEMS } from '../data/educativoData';

export default function MaterialEducativo() {
  useReveal();
  return (
    <>
      <Ticker text="📚 Material Educativo · Guías · Manuales · Cuadernos · Para todos los niveles" />
      <PageHero badge="📚 Recursos Pedagógicos" title="Material Educativo" description="Guías, manuales, partituras y cuadernos pedagógicos desarrollados por la escuela para compartir el saber carnavalero." />
      <section style={{ padding: '4rem 2rem', background: 'var(--crema)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {EDU_ITEMS.map(({ id, emoji, title, type, level, pages }) => (
            <Link to={`/material-educativo/${id}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="reveal" style={{
                background: '#fff',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,.07)',
              }}>
                <div style={{
                  height: 120, background: 'linear-gradient(135deg, var(--oscuro), #5a3e2b)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem',
                }}>{emoji}</div>
                <div style={{ padding: '1.2rem' }}>
                  <span className="media-tag">{type}</span>
                  <h3 style={{ fontFamily: 'Boogaloo, cursive', fontSize: '1.1rem', color: 'var(--oscuro)', margin: '.4rem 0' }}>{title}</h3>
                  <p style={{ fontSize: '.8rem', color: '#7a5c40', marginBottom: '.8rem' }}>Nivel: {level} · {pages}</p>
                  <button type="button" className="download-btn" style={{ width: '100%', justifyContent: 'center' }}>⬇ Ver Detalles</button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
