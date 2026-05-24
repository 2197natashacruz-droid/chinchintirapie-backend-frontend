import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';
import Ticker from '../components/Ticker';
import { REPO_ITEMS } from '../data/repositorioData';

export default function Repositorio() {
  const [search, setSearch] = useState('');
  useReveal();

  const filtered = REPO_ITEMS.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Ticker text="📂 Repositorio Documental · Fotografías · Videos · Audios · Documentos históricos" />
      <PageHero badge="📂 Archivo Digital" title="Repositorio Documental" description="Fotografías, audiovisuales y documentos de todas las ediciones del carnaval, desde los primeros ensayos hasta los últimos desfiles." />
      <div className="search-bar-wrap">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar en el repositorio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍 Buscar</button>
        </div>
      </div>
      <section style={{ padding: '4rem 2rem', background: 'var(--crema)' }}>
        <div className="media-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {filtered.map(({ id, emoji, title, type, year, count }) => (
            <Link to={`/repositorio/${id}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="media-card reveal">
                <div className="media-thumb" style={{ background: `linear-gradient(135deg, var(--morado-o), var(--purpura))` }}>
                  <span>{emoji}</span>
                  <div className="play-icon">▶</div>
                </div>
                <div className="media-info">
                  <span className="media-tag">{type}</span>
                  <h4>{title}</h4>
                  <p>{year} · {count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
