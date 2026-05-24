import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data/cedocData';
import PageHero from '../components/PageHero';

export default function CEDOCDetail() {
  const { id } = useParams();
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) return <div style={{ textAlign: 'center', padding: '5rem' }}><h2>Artículo no encontrado</h2><Link to="/cedoc">Volver</Link></div>;

  return (
    <>
      <PageHero badge={article.status === 'published' ? '📄 Artículo' : '🔬 Investigación en proceso'} title={article.title} description="" />
      <div style={{ maxWidth: 800, margin: '4rem auto', padding: '0 2rem' }}>
        <Link to="/cedoc" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--purpura)', fontWeight: 'bold', textDecoration: 'none' }}>← Volver al CEDOC</Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div className="article-icon" style={{ ...article.iconStyle, width: 100, height: 100, fontSize: '3rem' }}>{article.icon}</div>
          <div>
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
              {article.tags.map((t) => <span key={t} className="meta-tag">{t}</span>)}
            </div>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', marginBottom: '2rem' }}>{article.desc}</p>
            {article.status === 'published' ? (
               <button className="download-btn">⬇ Descargar Documento Completo (PDF)</button>
            ) : (
               <button className="download-btn" style={{ background: 'var(--dorado)', color: 'var(--oscuro)' }}>👁 Solicitar Avance de Investigación</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
