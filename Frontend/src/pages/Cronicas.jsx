import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/PageHero';
import Ticker from '../components/Ticker';
import { CRONICAS } from '../data/cronicasData';

export default function Cronicas() {
  useReveal();
  return (
    <>
      <Ticker text="📰 Crónicas · Relatos vivos · Historia contada desde adentro · Escuela Carnavalera" />
      <PageHero badge="📰 Periodismo Carnavalero" title="Crónicas" description="Relatos, entrevistas y notas que cuentan la historia viva de la escuela y sus protagonistas en las calles." />
      <section style={{ padding: '4rem 2rem', background: 'var(--crema)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {CRONICAS.map(({ id, emoji, date, title, body, author, tags }) => (
            <Link to={`/cronicas/${id}`} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="reveal" style={{
                background: '#fff',
                borderRadius: 20,
                padding: '2rem',
                boxShadow: '0 8px 24px rgba(0,0,0,.07)',
                display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 12, flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--morado-o), var(--purpura))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                }}>{emoji}</div>
                <div>
                  <p style={{ color: '#999', fontSize: '.78rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '.3rem' }}>{date}</p>
                  <h3 style={{ fontFamily: 'Boogaloo, cursive', fontSize: '1.4rem', color: 'var(--oscuro)', marginBottom: '.5rem' }}>{title}</h3>
                  <p style={{ color: '#5a3e2b', lineHeight: 1.7, fontSize: '.95rem', marginBottom: '.8rem' }}>{body}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.5rem' }}>
                    <div style={{ display: 'flex', gap: '.5rem' }}>
                      {tags.map((t) => <span key={t} className="meta-tag">{t}</span>)}
                    </div>
                    <span style={{ color: '#999', fontSize: '.82rem' }}>Por {author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
