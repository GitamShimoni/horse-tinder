// Right rail — the Premium Crazy Merchandise Shop.
const { ProductCard, Badge, Icon } = window.Horse_7cfa43;

function ShopPanel({ onBuy }) {
  const products = window.TROTR_DATA.products;
  return (
    <aside style={{
      width: 348, flexShrink: 0, height: '100%', display: 'flex', flexDirection: 'column',
      borderLeft: '1px solid var(--border-subtle)',
      background: 'linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))',
    }}>
      <div style={{ padding: 'var(--space-5) var(--space-5) var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="store" size={20} style={{ color: 'var(--gold-400)' }} />
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 700,
            color: 'var(--text-strong)', letterSpacing: '-0.02em',
          }}>Neigh-Premium Shop</h2>
        </div>
        <p style={{ margin: '6px 0 0', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          Absurd luxury for the modern stallion. Free stable delivery over $500.
        </p>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-5)', display: 'grid', gap: 'var(--space-4)' }}>
        {products.map((p) => (
          <ProductCard key={p.id} emoji={p.emoji} name={p.name} blurb={p.blurb}
            price={p.price} tone={p.tone} badge={p.badge} onBuy={() => onBuy(p)} />
        ))}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px',
          borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-strong)',
          color: 'var(--text-muted)', fontSize: 'var(--fs-sm)',
        }}>
          <Icon name="sparkles" size={18} style={{ color: 'var(--emerald-400)' }} />
          More drops every full moon. 🌕
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { ShopPanel });
