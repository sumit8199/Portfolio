import type { Exhibition } from '../lib/exhibitions';
import { exhibitionsConfig } from '../config';

interface ExhibitionDetailProps {
  exhibition: Exhibition;
  onBack: () => void;
}

export default function ExhibitionDetail({ exhibition, onBack }: ExhibitionDetailProps) {
  return (
    <section
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        padding: '2rem 4vw 5rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            color: 'inherit',
            cursor: 'none',
          }}
        >
          {exhibitionsConfig.detailBackText}
        </button>
        <span>{exhibition.year}</span>
      </div>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 36vw) minmax(0, 1fr)',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: '2rem',
            maxWidth: '560px',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              background: '#f2f2f2',
            }}
          >
            <img
              src={exhibition.image}
              alt={exhibition.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          style={{
            maxWidth: '62ch',
            paddingTop: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
            }}
          >
            {exhibition.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5vw, 5rem)',
              lineHeight: 1.02,
              fontWeight: 400,
              textTransform: 'uppercase',
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            {exhibition.title}
          </h1>

          {/* Technology Badges */}
          {exhibition.technologies && exhibition.technologies.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1.5rem',
              }}
            >
              {exhibition.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    border: '1px solid #e0e0e0',
                    background: '#f9f9f9',
                    color: '#333333',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Links (GitHub / Live) */}
          {(exhibition.githubUrl || exhibition.liveUrl) && (
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {exhibition.githubUrl && (
                <a
                  href={exhibition.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    background: '#111111',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#333333';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#111111';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>View Repository</span>
                </a>
              )}
              {exhibition.liveUrl && (
                <a
                  href={exhibition.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#111111',
                    background: 'transparent',
                    border: '1px solid #111111',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#f2f2f2';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  <span>Live Preview ↗</span>
                </a>
              )}
            </div>
          )}

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginTop: '2rem',
              marginBottom: '3rem',
            }}
          >
            {exhibition.intro}
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.75rem',
            }}
          >
            {exhibition.sections.map((section) => (
              <article key={section.heading}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2vw, 2.1rem)',
                    lineHeight: 1.15,
                    fontWeight: 400,
                    margin: 0,
                    color: 'var(--text-primary)',
                  }}
                >
                  {section.heading}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.96rem',
                    lineHeight: 1.9,
                    color: 'var(--text-secondary)',
                    marginTop: '1rem',
                    marginBottom: 0,
                  }}
                >
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
