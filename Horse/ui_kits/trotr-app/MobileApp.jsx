// Phone screen content — Dating Feed + in-app Shop, switched by Tabs.
const { Tabs, ProfileCard, IconButton, Icon, Badge, Avatar } = window.Horse_7cfa43;

function DatingFeed({ horse, ghost, onSwipe }) {
  const [superHover, setSuperHover] = React.useState(false);
  if (!horse) {
    return (
      <div style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div style={{ fontSize: 52 }}>🌾</div>
        <div style={{ fontFamily: 'var(--font-display)', color: 'var(--text-strong)', fontSize: 18, marginTop: 12 }}>
          You've trotted through everyone
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6 }}>Check back after the next hay delivery for fresh stallions & mares.</p>
      </div>
    );
  }
  return (
    <div style={{ padding: '10px 16px 18px' }}>
      <div style={{
        position: 'relative',
        transition: 'transform 340ms var(--ease-spring), opacity 300ms var(--ease-out)',
        transform: ghost === 'like' ? 'translateX(120%) rotate(18deg)'
          : ghost === 'nope' ? 'translateX(-120%) rotate(-18deg)'
          : ghost === 'super' ? 'translateY(-130%) scale(0.9)' : 'none',
        opacity: ghost ? 0 : 1,
      }}>
        <ProfileCard {...horse} />
      </div>

      {/* Action row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 18 }}>
        <IconButton icon="x" tone="nope" size="lg" label="Nope" onClick={() => onSwipe('nope')} />
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setSuperHover(true)} onMouseLeave={() => setSuperHover(false)}>
          <IconButton icon="zap" tone="super" label="Super Neigh" onClick={() => onSwipe('super')} />
          <span style={{
            position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: `translateX(-50%) scale(${superHover ? 1 : 0.7})`,
            padding: '5px 10px', borderRadius: 999, whiteSpace: 'nowrap',
            background: 'var(--accent-super)', color: '#04222e', fontFamily: 'var(--font-display)',
            fontWeight: 700, fontSize: 13, boxShadow: '0 8px 22px var(--glow-super)',
            opacity: superHover ? 1 : 0, transition: 'all 200ms var(--ease-spring)', pointerEvents: 'none',
          }}>*NEIGHHH!*</span>
        </div>
        <IconButton icon="heart" tone="love" size="lg" label="Like" onClick={() => onSwipe('like')} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 10, fontSize: 11, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
        Nope · Super Neigh · Like
      </div>
    </div>
  );
}

function MobileShop({ onBuy }) {
  const products = window.TROTR_DATA.products;
  return (
    <div style={{ padding: '6px 16px 20px', display: 'grid', gap: 10 }}>
      {products.map((p) => (
        <div key={p.id} onClick={() => onBuy(p)} style={{
          display: 'flex', gap: 12, alignItems: 'center', padding: 10, cursor: 'pointer',
          borderRadius: 'var(--radius-md)', background: 'var(--surface-card)',
          border: '1px solid var(--border-hairline)',
        }}>
          <div style={{
            width: 52, height: 52, flexShrink: 0, borderRadius: 12, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 26, background: 'rgba(148,163,184,0.1)',
          }}>{p.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: 'var(--text-strong)', fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>{p.name}</div>
            <div style={{ color: 'var(--text-faint)', fontSize: 11, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.blurb}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: p.tone === 'gold' ? 'var(--gold-400)' : p.tone === 'emerald' ? 'var(--emerald-300)' : 'var(--neon-rose)' }}>{p.price}</span>
        </div>
      ))}
    </div>
  );
}

function MobileApp({ tab, onTab, horse, ghost, onSwipe, onBuy }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', background: 'var(--grad-app-glow), var(--bg-app)' }}>
      {/* status + header */}
      <div style={{ paddingTop: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 16px 10px' }}>
          <span className="trotr-gradient-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.03em' }}>Trotr</span>
          <div style={{ display: 'flex', gap: 12, color: 'var(--text-muted)' }}>
            <Icon name="bell" size={18} />
            <Icon name="settings" size={18} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 8 }}>
          <Tabs value={tab} onChange={onTab} items={[
            { id: 'feed', label: 'Dating', icon: 'flame' },
            { id: 'shop', label: 'Shop', icon: 'store' },
          ]} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tab === 'feed' ? <DatingFeed horse={horse} ghost={ghost} onSwipe={onSwipe} /> : <MobileShop onBuy={onBuy} />}
      </div>
    </div>
  );
}

Object.assign(window, { MobileApp });
