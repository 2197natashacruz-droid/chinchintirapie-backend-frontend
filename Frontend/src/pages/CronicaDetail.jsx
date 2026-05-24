import { useParams, Link } from 'react-router-dom';
import { CRONICAS } from '../data/cronicasData';
import PageHero from '../components/PageHero';

export default function CronicaDetail() {
  const { id } = useParams();
  const cronica = CRONICAS.find((c) => c.id === id);

  if (!cronica) return <div style={{ textAlign: 'center', padding: '5rem' }}><h2>Crónica no encontrada</h2><Link to="/cronicas">Volver</Link></div>;

  return (
    <>
      <PageHero badge="📰 Crónica" title={cronica.title} description={`Por ${cronica.author} | ${cronica.date}`} />
      <div style={{ maxWidth: 800, margin: '4rem auto', padding: '0 2rem' }}>
        <Link to="/cronicas" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--purpura)', fontWeight: 'bold', textDecoration: 'none' }}>← Volver a Crónicas</Link>
        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '2rem' }}>{cronica.emoji}</div>
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
          {cronica.tags.map((t) => <span key={t} className="meta-tag">{t}</span>)}
        </div>
        <div style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', background: 'var(--crema)', padding: '2rem', borderRadius: 16 }}>
          <p>{cronica.body}</p>
        </div>
      </div>
    </>
  );
}
