import { useParams, Link } from 'react-router-dom';
import { CRONICAS } from '../data/cronicasData';
import PageHero from '../components/PageHero';
import '/src/styles/Cronicas.css';

export default function CronicaDetail() {
  const { id } = useParams();
  const cronica = CRONICAS.find((c) => c.id === id);

  if (!cronica) {
    return (
      <div className="cronica-not-found">
        <h2>Crónica no encontrada</h2>
        <Link to="/cronicas">← Volver a Crónicas</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero badge="📰 Crónica" title={cronica.title} description={`Por ${cronica.author} | ${cronica.date}`} />
      <div className="cronica-detail">
        <Link to="/cronicas" className="cronica-detail-back">← Volver a Crónicas</Link>
        <div className="cronica-detail-emoji">{cronica.emoji}</div>
        <div className="cronica-detail-tags">
          {cronica.tags.map((t) => <span key={t} className="meta-tag">{t}</span>)}
        </div>
        <div className="cronica-detail-content">
          <p>{cronica.body}</p>
        </div>
      </div>
    </>
  );
}
