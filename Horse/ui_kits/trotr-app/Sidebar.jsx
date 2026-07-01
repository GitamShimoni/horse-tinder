// Left barn sidebar — brand lockup, primary nav, premium upsell, profile.
const { NavItem, Avatar, Badge, Button, Icon } = window.Horse_7cfa43;

function Sidebar({ active, onNavigate, matchCount }) {
  const nav = [
    { id: 'discover', icon: 'flame', label: 'Discover' },
    { id: 'matches', icon: 'heart', label: 'Matches', count: matchCount },
    { id: 'messages', icon: 'messageCircle', label: 'Messages', count: 2 },
    { id: 'shop', icon: 'crown', label: 'Neigh-Premium Shop' },
    { id: 'profile', icon: 'users', label: 'My Profile' },
    { id: 'settings', icon: 'settings', label: 'Barn Settings' },
  ];
  return (
    <aside style={{
      width: 264, flexShrink: 0, height: '100%', display: 'flex', flexDirection: 'column',
      padding: 'var(--space-5)', gap: 'var(--space-5)',
      borderRight: '1px solid var(--border-subtle)',
      background: 'linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))',
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px' }}>
        <img src="../../assets/trotr-mark.svg" alt="" style={{ width: 34, height: 34 }} />
        <span className="trotr-gradient-text" style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em',
        }}>Trotr</span>
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {nav.map((n) => (
          <NavItem key={n.id} icon={n.icon} label={n.label} count={n.count}
            active={active === n.id} onClick={() => onNavigate(n.id)} />
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      {/* Premium upsell */}
      <div style={{
        position: 'relative', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
        background: 'var(--grad-gold)', color: 'var(--text-on-gold)', overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(245,181,36,0.28)',
      }}>
        <Icon name="crown" size={22} strokeWidth={2.4} />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginTop: 8, letterSpacing: '-0.02em' }}>
          Go Neigh-Premium
        </div>
        <p style={{ margin: '4px 0 12px', fontSize: 12, lineHeight: 1.45, opacity: 0.82 }}>
          Unlimited neighs, see who trotted your way, and one free Hay-Champagne.
        </p>
        <button style={{
          width: '100%', padding: '9px', borderRadius: 'var(--radius-pill)', border: 'none',
          background: '#2a1c02', color: 'var(--gold-400)', fontFamily: 'var(--font-body)',
          fontWeight: 700, fontSize: 13, cursor: 'pointer',
        }}>Upgrade — $12/mo</button>
      </div>

      {/* Profile chip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 4px' }}>
        <Avatar emoji="🐴" size="md" ring="neon" online />
        <div style={{ minWidth: 0 }}>
          <div style={{ color: 'var(--text-strong)', fontWeight: 700, fontSize: 14 }}>Mr. Ed</div>
          <div style={{ color: 'var(--text-faint)', fontSize: 12 }}>Barn 12 · Free plan</div>
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { Sidebar });
