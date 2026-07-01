import React from 'react';
import { Tag } from '../feedback/Tag.jsx';
import { Badge } from '../feedback/Badge.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * ProfileCard — the horse dating card shown in the phone. Full-bleed
 * hero with protection gradient, name/age, distance, trait tags + bio.
 */
export function ProfileCard({
  emoji = '🐴',
  src,
  name,
  age,
  horseAge,
  distance,
  location,
  verified = false,
  tags = [],
  bio,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'var(--surface-solid)',
        border: '1px solid var(--border-hairline)',
        boxShadow: 'var(--shadow-lg)',
        ...style,
      }}
      {...rest}
    >
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3 / 4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: src
            ? `center/cover no-repeat url(${src})`
            : 'radial-gradient(130% 100% at 50% 15%, rgba(255,45,120,0.35), rgba(255,122,24,0.16) 45%, rgba(11,17,32,0.9) 80%)',
          fontSize: 128,
        }}
      >
        {!src && <span style={{ filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.5))' }}>{emoji}</span>}

        {/* top-right verified */}
        {verified && (
          <span style={{ position: 'absolute', top: 14, right: 14 }}>
            <Badge tone="emerald" icon="shieldCheck">Verified Stud</Badge>
          </span>
        )}

        {/* protection gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(6,10,21,0.96) 4%, rgba(6,10,21,0.55) 32%, rgba(6,10,21,0) 60%)',
          }}
        />

        {/* name block */}
        <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <h3
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-h1)',
                fontWeight: 'var(--fw-bold)',
                color: 'var(--white)',
                letterSpacing: 'var(--ls-tight)',
                lineHeight: 1,
              }}
            >
              {name}
              {age != null && (
                <span style={{ fontWeight: 'var(--fw-regular)', color: 'var(--slate-200)' }}> {age}</span>
              )}
            </h3>
            {horseAge && (
              <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--slate-300)', fontWeight: 'var(--fw-medium)' }}>
                ({horseAge} in horse years)
              </span>
            )}
          </div>
          {(distance || location) && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                marginTop: 7,
                color: 'var(--slate-300)',
                fontSize: 'var(--fs-sm)',
                fontWeight: 'var(--fw-medium)',
              }}
            >
              <Icon name="mapPin" size={14} style={{ color: 'var(--neon-orange)' }} />
              {distance}
              {location && <span style={{ color: 'var(--slate-400)' }}>· {location}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-4)' }}>
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: bio ? 'var(--space-4)' : 0 }}>
            {tags.map((tg, i) => (
              <Tag key={i} emoji={tg.emoji}>{tg.label}</Tag>
            ))}
          </div>
        )}
        {bio && (
          <p
            style={{
              margin: 0,
              fontSize: 'var(--fs-body)',
              color: 'var(--text-body)',
              lineHeight: 'var(--lh-relaxed)',
              fontStyle: 'italic',
            }}
          >
            “{bio}”
          </p>
        )}
      </div>
    </div>
  );
}
