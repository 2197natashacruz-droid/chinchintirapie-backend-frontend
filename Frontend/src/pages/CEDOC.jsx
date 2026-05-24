import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';
import Ticker from '../components/Ticker';

import { Link } from 'react-router-dom';
import { ARTICLES, TIMELINE, DOWNLOADS, TOPICS, FILTERS, STATS } from '../data/cedocData';


export default function CEDOC() {
  const [activeFilter, setActiveFilter] = useState('all');
  useReveal();

  const visibleArticles = activeFilter === 'all'
    ? ARTICLES
    : ARTICLES.filter((a) => a.tags.some((t) => t.toLowerCase() === activeFilter));

  return (
    <>
      <Ticker text="📚 Centro de Documentación e Investigación · Ensayos · Investigaciones culturales · Documentos descargables" />

      <PageHero
        badge="📚 Investigación & Documentación"
        titleEm="CEDOC"
        title="Carnavalero"
        description="Centro de documentación e investigación sobre banda, baile y figura. Ensayos, investigaciones y reflexiones culturales."
      />

      {/* Stats */}
      <div className="stats-strip">
        {STATS.map(({ num, label }) => (
          <div className="strip-stat" key={label}>
            <span className="s-num">{num}</span>
            <span className="s-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <div className="filter-tabs">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-tab${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === 'all' ? 'Todos' : f === 'banda' ? '🎺 Banda' : f === 'baile' ? '💃 Baile'
              : f === 'figura' ? '🎭 Figura' : f === 'historia' ? '📜 Historia' : '🏘️ Comunidad'}
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <main>
        <div className="cedoc-layout">
          {/* Artículos */}
          <div className="cedoc-main">
            <section>
              <h2>✦ Artículos Destacados</h2>
              {visibleArticles.filter((a) => a.status === 'published').map((a) => (
                <Link to={`/cedoc/${a.id}`} key={a.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="article-card reveal">
                    <div className="article-icon" style={a.iconStyle}>{a.icon}</div>
                    <div className="article-body">
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                      <div className="article-meta">
                        {a.tags.map((t) => <span className="meta-tag" key={t}>{t}</span>)}
                      </div>
                      <button type="button" className="download-btn">⬇ Ver artículo completo</button>
                    </div>
                  </div>
                </Link>
              ))}
            </section>

            <section>
              <h2>🔬 Investigaciones en Curso</h2>
              {visibleArticles.filter((a) => a.status === 'in-progress').map((a) => (
                <Link to={`/cedoc/${a.id}`} key={a.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="article-card reveal">
                    <div className="article-icon" style={a.iconStyle}>{a.icon}</div>
                    <div className="article-body">
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                      <div className="article-meta">
                        {a.tags.map((t) => <span className="meta-tag" key={t}>{t}</span>)}
                      </div>
                      <button type="button" className="download-btn" style={{ background: 'var(--dorado)', color: 'var(--oscuro)' }}>👁 Ver avance completo</button>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="cedoc-sidebar">
            <div className="sidebar-widget reveal">
              <h3>⏳ Línea de Tiempo</h3>
              <div className="timeline">
                {TIMELINE.map(({ year, text }) => (
                  <div className="timeline-item" key={year}>
                    <div className="timeline-year">{year}</div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-widget reveal">
              <h3>📄 Descargas Rápidas</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                {DOWNLOADS.map(({ emoji, label, size, gold }) => (
                  <button key={label} type="button" className="download-btn"
                    style={{
                      justifyContent: 'space-between',
                      ...(gold ? { background: 'var(--dorado)', color: 'var(--oscuro)' } : {}),
                    }}>
                    <span>{emoji} {label}</span>
                    <span style={{ fontSize: '.7rem', opacity: .7 }}>{size}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-widget reveal">
              <h3>🏷 Temas de Investigación</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {TOPICS.map((t) => (
                  <span key={t} className="meta-tag" style={{ fontSize: '.82rem', padding: '.3rem .7rem' }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-widget reveal" style={{ background: 'var(--oscuro)', border: '2px solid var(--dorado)' }}>
              <h3 style={{ color: 'var(--amarillo)' }}>✉ Envía tu Investigación</h3>
              <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, marginBottom: '1rem' }}>
                ¿Tienes una investigación sobre carnaval y cultura popular? El CEDOC recibe colaboraciones externas.
              </p>
              <a href="mailto:cedoc@chinchintirapie.cl" className="download-btn"
                style={{ background: 'var(--rojo)', color: '#fff', display: 'block', textAlign: 'center' }}>
                📨 Enviar propuesta
              </a>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
