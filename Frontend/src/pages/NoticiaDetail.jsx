import { useParams, Link } from 'react-router-dom';
import { NEWS_ITEMS } from '../data/noticiasData';
import PageHero from '../components/PageHero';

export default function NoticiaDetail() {
  const { id } = useParams();
  const noticia = NEWS_ITEMS.find((n) => n.id === id);

  if (!noticia) return <div style={{ textAlign: 'center', padding: '5rem' }}><h2>Noticia no encontrada</h2><Link to="/noticias">Volver</Link></div>;

  return (
    <>
      <PageHero badge={noticia.category} title={noticia.title} description="" />
      <div style={{ maxWidth: 800, margin: '4rem auto', padding: '0 2rem' }}>
        <Link to="/noticias" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--purpura)', fontWeight: 'bold', textDecoration: 'none' }}>← Volver a Noticias</Link>
        {noticia.video ? (
          <video controls style={{ width: '100%', borderRadius: 16, marginBottom: '2rem' }}>
            <source src={noticia.video} type="video/mp4" />
          </video>
        ) : (
          <img src={noticia.img} alt={noticia.title} style={{ width: '100%', borderRadius: 16, marginBottom: '2rem' }} />
        )}
        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444' }}>{noticia.desc}</p>
      </div>
    </>
  );
}
