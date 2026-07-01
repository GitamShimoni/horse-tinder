// Dashboard orchestration: sidebar + centered phone + merch rail, with
// swipe animation, match celebration, and buy toasts.
const { PhoneFrame, MatchToast, Button, Badge, Icon, GlassCard } = window.Horse_7cfa43;

function CenterStat({ icon, value, label, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px',
      borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}>
      <Icon name={icon} size={18} style={{ color }} />
      <div>
        <div style={{ color: 'var(--text-strong)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>{value}</div>
        <div style={{ color: 'var(--text-faint)', fontSize: 11, marginTop: 2 }}>{label}</div>
      </div>
    </div>
  );
}

function App() {
  const horses = window.TROTR_DATA.horses;
  const [idx, setIdx] = React.useState(0);
  const [ghost, setGhost] = React.useState(null);
  const [tab, setTab] = React.useState('feed');
  const [nav, setNav] = React.useState('discover');
  const [match, setMatch] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [matches, setMatches] = React.useState(7);
  const busy = React.useRef(false);

  const current = horses[idx % horses.length];

  const swipe = (dir) => {
    if (busy.current) return;
    busy.current = true;
    const horse = current;
    setGhost(dir);
    setTimeout(() => {
      setIdx((i) => i + 1);
      setGhost(null);
      busy.current = false;
      if (dir === 'like' || dir === 'super') {
        setMatches((m) => m + 1);
        setMatch({ horse, dir });
      }
    }, 360);
  };

  const buy = (p) => {
    setToast(`Added “${p.name}” to your stable 🛒`);
    clearTimeout(buy._t);
    buy._t = setTimeout(() => setToast(null), 2600);
  };

  const onNavigate = (id) => {
    setNav(id);
    if (id === 'shop') setTab('shop');
    if (id === 'discover' || id === 'matches') setTab('feed');
  };

  return (
    <div className="trotr-root" style={{ position: 'fixed', inset: 0, display: 'flex', overflow: 'hidden' }}>
      {/* ambient bg */}
      <div style={{ position: 'absolute', inset: 0, background:
        'radial-gradient(60% 80% at 15% 0%, rgba(255,45,120,0.16), rgba(6,10,21,0) 60%),' +
        'radial-gradient(55% 75% at 90% 100%, rgba(255,122,24,0.14), rgba(6,10,21,0) 55%),' +
        'radial-gradient(50% 60% at 85% 5%, rgba(245,181,36,0.1), rgba(6,10,21,0) 55%),' +
        'var(--slate-950)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%' }}>
        <Sidebar active={nav} onNavigate={onNavigate} matchCount={matches} />

        {/* Center */}
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: 'var(--space-6)', overflow: 'hidden' }}>
          <div style={{ width: '100%', maxWidth: 560, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
            <div>
              <div className="trotr-eyebrow">Discover</div>
              <h1 style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700,
                color: 'var(--text-strong)', letterSpacing: '-0.03em' }}>
                Good evening, Ed 🌙
              </h1>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <CenterStat icon="heart" value={matches} label="Matches" color="var(--neon-pink)" />
              <CenterStat icon="zap" value="3" label="Neighs left" color="var(--accent-super)" />
            </div>
          </div>

          <PhoneFrame width={344} style={{ flexShrink: 0 }}>
            <MobileApp tab={tab} onTab={(t) => { setTab(t); setNav(t === 'shop' ? 'shop' : 'discover'); }}
              horse={current} ghost={ghost} onSwipe={swipe} onBuy={buy} />
          </PhoneFrame>
        </main>

        <ShopPanel onBuy={buy} />
      </div>

      {/* Match celebration overlay */}
      {match && (
        <div onClick={() => setMatch(null)} style={{ position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          background: 'rgba(6,10,21,0.72)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          animation: 'trotr-fade 220ms var(--ease-out)' }}>
          <div onClick={(e) => e.stopPropagation()}>
            <MatchToast
              title="It's a Match!"
              message={`You and ${match.horse.name} both said neigh. A horse-wedding simulation is now booking your barn…`}
              leftEmoji="🐴" rightEmoji={match.horse.emoji}
            >
              <Button variant="primary" iconLeft="messageCircle" block onClick={() => setMatch(null)}>Send the first Neigh</Button>
              <Button variant="ghost" block onClick={() => setMatch(null)}>Keep Trotting</Button>
            </MatchToast>
          </div>
        </div>
      )}

      {/* Buy toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 120,
          padding: '12px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-glass-strong)',
          border: '1px solid var(--border-strong)', color: 'var(--text-strong)', fontWeight: 600, fontSize: 14,
          backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', boxShadow: 'var(--shadow-lg)',
          display: 'flex', alignItems: 'center', gap: 10, animation: 'trotr-rise 260ms var(--ease-spring)' }}>
          <Icon name="check" size={18} style={{ color: 'var(--emerald-400)' }} /> {toast}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { App });
