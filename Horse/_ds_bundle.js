/* @ds-bundle: {"format":3,"namespace":"Horse_7cfa43","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"MatchToast","sourcePath":"components/feedback/MatchToast.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"PhoneFrame","sourcePath":"components/patterns/PhoneFrame.jsx"},{"name":"ProductCard","sourcePath":"components/patterns/ProductCard.jsx"},{"name":"ProfileCard","sourcePath":"components/patterns/ProfileCard.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"fb76c22bc5a9","components/core/Button.jsx":"bac529a66bb7","components/core/Icon.jsx":"897ce0b9f64f","components/core/IconButton.jsx":"65c4a3d2fbdd","components/feedback/Badge.jsx":"334476cfc96c","components/feedback/MatchToast.jsx":"b69548e1507c","components/feedback/Tag.jsx":"b0a91b925af0","components/navigation/NavItem.jsx":"890f58096e9e","components/navigation/Tabs.jsx":"1dab21ccf684","components/patterns/PhoneFrame.jsx":"57e9ec1b96a0","components/patterns/ProductCard.jsx":"b6400c746662","components/patterns/ProfileCard.jsx":"7592f6bca837","components/surfaces/GlassCard.jsx":"7f9d49894149","ui_kits/trotr-app/App.jsx":"b1a22d2a565f","ui_kits/trotr-app/MobileApp.jsx":"48c7056e187b","ui_kits/trotr-app/ShopPanel.jsx":"5e45af8cd732","ui_kits/trotr-app/Sidebar.jsx":"6827f4825e2d","ui_kits/trotr-app/data.js":"a31faa4c27ad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Horse_7cfa43 = window.Horse_7cfa43 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 28,
  sm: 36,
  md: 48,
  lg: 64,
  xl: 88
};
const RINGS = {
  none: 'transparent',
  neon: 'var(--grad-dating)',
  gold: 'var(--grad-gold)',
  emerald: 'var(--grad-emerald)'
};

/**
 * Avatar — circular identity token. Shows an image, or falls back to an
 * emoji / initials. Optional gradient ring + online dot.
 */
function Avatar({
  src,
  emoji,
  initials,
  size = 'md',
  ring = 'none',
  online = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const ringWidth = ring === 'none' ? 0 : Math.max(2, Math.round(dim * 0.045));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      padding: ringWidth,
      background: RINGS[ring] || 'transparent',
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--surface-solid)',
      border: ring === 'none' ? '1px solid var(--border-hairline)' : '2px solid var(--bg-panel)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: dim * 0.5,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : emoji ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: dim * 0.52
    }
  }, emoji) : initials), online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(8, dim * 0.22),
      height: Math.max(8, dim * 0.22),
      borderRadius: '50%',
      background: 'var(--emerald-400)',
      border: '2px solid var(--bg-panel)',
      boxShadow: '0 0 10px var(--glow-emerald)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Curated Lucide glyph set (24×24, stroke-based) used across Trotr.
 * Paths are lifted verbatim from lucide.dev (ISC licensed).
 */
const GLYPHS = {
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  crown: '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  shoppingBag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
  messageCircle: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  wine: '<path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/>',
  gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  carrot: '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  rotateCcw: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>'
};

/**
 * Icon — renders a Trotr glyph. Inherits color via `currentColor` and
 * scales with `size`. Falls back to a dot for unknown names.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style,
  className,
  ...rest
}) {
  const inner = GLYPHS[name] || '<circle cx="12" cy="12" r="2"/>';
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
const ICON_NAMES = Object.keys(GLYPHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--fs-sm)',
    gap: 6,
    icon: 15,
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--fs-body)',
    gap: 8,
    icon: 18,
    radius: 'var(--radius-md)'
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--fs-h3)',
    gap: 10,
    icon: 20,
    radius: 'var(--radius-lg)'
  }
};
function variantStyle(variant, hovered) {
  switch (variant) {
    case 'primary':
      return {
        background: 'var(--grad-dating)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent',
        boxShadow: hovered ? '0 0 0 1px rgba(255,45,120,0.6), 0 12px 40px rgba(255,45,120,0.5)' : '0 6px 22px rgba(255,45,120,0.32)'
      };
    case 'gold':
      return {
        background: 'var(--grad-gold)',
        color: 'var(--text-on-gold)',
        border: '1px solid transparent',
        boxShadow: hovered ? 'var(--glow-ring-gold)' : '0 6px 20px rgba(245,181,36,0.28)'
      };
    case 'emerald':
      return {
        background: 'var(--grad-emerald)',
        color: '#04231a',
        border: '1px solid transparent',
        boxShadow: hovered ? 'var(--glow-ring-emerald)' : '0 6px 20px rgba(52,211,153,0.26)'
      };
    case 'secondary':
      return {
        background: hovered ? 'var(--surface-raised)' : 'var(--surface-card)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-strong)',
        backdropFilter: 'blur(var(--glass-blur))',
        WebkitBackdropFilter: 'blur(var(--glass-blur))'
      };
    case 'ghost':
      return {
        background: hovered ? 'rgba(148,163,184,0.1)' : 'transparent',
        color: 'var(--text-body)',
        border: '1px solid transparent'
      };
    case 'danger':
      return {
        background: hovered ? 'rgba(239,68,68,0.16)' : 'rgba(239,68,68,0.1)',
        color: '#fca5a5',
        border: '1px solid rgba(239,68,68,0.4)'
      };
    default:
      return {};
  }
}

/**
 * Button — primary action element. Neon gradient by default, plus glass,
 * ghost, and the marketplace gold/emerald treatments.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hovered && !disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-snug)',
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: hovered && !disabled ? 'translateY(-1px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const TONES = {
  nope: {
    color: 'var(--slate-300)',
    ring: 'rgba(148,163,184,0.4)',
    glow: 'rgba(148,163,184,0.35)',
    border: 'var(--border-strong)'
  },
  like: {
    color: 'var(--neon-orange)',
    ring: 'rgba(255,122,24,0.55)',
    glow: 'var(--glow-orange)',
    border: 'rgba(255,122,24,0.4)'
  },
  love: {
    color: 'var(--neon-pink)',
    ring: 'rgba(255,45,120,0.55)',
    glow: 'var(--glow-pink)',
    border: 'rgba(255,45,120,0.4)'
  },
  super: {
    color: 'var(--accent-super)',
    ring: 'rgba(56,189,248,0.6)',
    glow: 'var(--glow-super)',
    border: 'rgba(56,189,248,0.45)'
  },
  neutral: {
    color: 'var(--text-body)',
    ring: 'rgba(148,163,184,0.35)',
    glow: 'rgba(148,163,184,0.28)',
    border: 'var(--border-hairline)'
  }
};
const SIZES = {
  sm: 40,
  md: 56,
  lg: 68
};

/**
 * IconButton — the round glass action button used for the swipe deck
 * (nope / like / love / super) and general icon-only controls.
 */
function IconButton({
  icon,
  tone = 'neutral',
  size = 'md',
  label,
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const t = TONES[tone] || TONES.neutral;
  const dim = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: hovered ? 'var(--surface-raised)' : 'var(--surface-glass-strong)',
      border: `1.5px solid ${hovered ? t.ring : t.border}`,
      color: t.color,
      cursor: 'pointer',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      boxShadow: hovered ? `0 0 0 4px ${t.glow.replace(/[\d.]+\)$/, '0.18)')}, 0 10px 30px ${t.glow}` : '0 6px 18px rgba(0,0,0,0.4)',
      transform: hovered ? 'translateY(-2px) scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(dim * 0.42),
    strokeWidth: 2.2
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neon: {
    bg: 'var(--grad-dating)',
    color: '#fff',
    border: 'transparent',
    solid: true
  },
  gold: {
    bg: 'var(--grad-gold)',
    color: 'var(--text-on-gold)',
    border: 'transparent',
    solid: true
  },
  emerald: {
    bg: 'var(--grad-emerald)',
    color: '#04231a',
    border: 'transparent',
    solid: true
  },
  super: {
    bg: 'rgba(56,189,248,0.16)',
    color: 'var(--accent-super)',
    border: 'rgba(56,189,248,0.4)'
  },
  neutral: {
    bg: 'rgba(148,163,184,0.14)',
    color: 'var(--text-body)',
    border: 'var(--border-hairline)'
  }
};

/**
 * Badge — small status pill. Solid gradient tones read as premium
 * (gold), verified (emerald) or hot (neon); soft tones for metadata.
 */
function Badge({
  children,
  tone = 'neutral',
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.color,
      border: `1px solid ${t.border}`,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      boxShadow: t.solid ? '0 4px 14px rgba(0,0,0,0.25)' : 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.4
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MatchToast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MatchToast — the celebratory "It's a Match!" card. Neon gradient
 * border-glow, two overlapping avatars, headline + subtext + actions.
 */
function MatchToast({
  title = "It's a Match!",
  message,
  leftEmoji = '🐴',
  rightEmoji = '🦄',
  leftSrc,
  rightSrc,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      position: 'relative',
      width: 340,
      maxWidth: '90vw',
      padding: 2,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--grad-dating)',
      boxShadow: '0 24px 70px rgba(255,45,120,0.4), 0 0 0 1px rgba(255,45,120,0.3)',
      animation: 'trotr-pulse-glow 2.6s var(--ease-out) infinite',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'calc(var(--radius-xl) - 2px)',
      background: 'var(--surface-glass-strong)',
      backdropFilter: 'blur(var(--glass-blur-strong))',
      WebkitBackdropFilter: 'blur(var(--glass-blur-strong))',
      padding: 'var(--space-6) var(--space-5) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: -14,
      transform: 'rotate(-8deg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    emoji: leftEmoji,
    src: leftSrc,
    size: "xl",
    ring: "neon"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: -14,
      transform: 'rotate(8deg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    emoji: rightEmoji,
    src: rightSrc,
    size: "xl",
    ring: "neon"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "trotr-gradient-text",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1.05,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 26,
    style: {
      color: 'var(--neon-orange)'
    }
  }), title), message && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)'
    }
  }, message), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gap: 10
    }
  }, children)));
}
Object.assign(__ds_scope, { MatchToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MatchToast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — glassy attribute chip used on horse profiles
 * (e.g. "🌾 Organic Hay Only"). Leading `emoji` optional.
 */
function Tag({
  children,
  emoji,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(148,163,184,0.1)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), emoji && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.05em',
      lineHeight: 1
    }
  }, emoji), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * NavItem — a row in the barn sidebar. Active state paints a soft neon
 * wash + left gradient bar; supports a trailing count badge.
 */
function NavItem({
  icon,
  label,
  active = false,
  count,
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
      color: active ? 'var(--text-strong)' : hovered ? 'var(--text-body)' : 'var(--text-muted)',
      background: active ? 'var(--grad-dating-soft)' : hovered ? 'rgba(148,163,184,0.08)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 3,
      height: 20,
      borderRadius: 3,
      background: 'var(--grad-dating)',
      boxShadow: '0 0 12px var(--glow-pink)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19,
    strokeWidth: active ? 2.4 : 2,
    style: {
      color: active ? 'var(--neon-pink)' : 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      padding: '0 6px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--grad-dating)' : 'rgba(148,163,184,0.16)',
      color: active ? '#fff' : 'var(--text-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1
    }
  }, count));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Tabs — glass segmented control. The active segment gets the neon
 * gradient pill. Controlled via `value`/`onChange` or self-managed.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-glass-strong)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '9px 18px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-snug)',
        whiteSpace: 'nowrap',
        color: on ? 'var(--text-on-accent)' : 'var(--text-muted)',
        background: on ? 'var(--grad-dating)' : 'transparent',
        boxShadow: on ? '0 6px 18px rgba(255,45,120,0.35)' : 'none',
        transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16,
      strokeWidth: 2.2
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PhoneFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PhoneFrame — a premium glass smartphone bezel. Renders children as the
 * screen; includes a dynamic-island notch and a subtle rim highlight.
 */
function PhoneFrame({
  children,
  width = 320,
  style,
  screenStyle,
  ...rest
}) {
  const radius = Math.round(width * 0.16);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width,
      borderRadius: radius,
      padding: 10,
      background: 'linear-gradient(160deg, #2b3446 0%, #10141f 46%, #05070d 100%)',
      boxShadow: 'var(--shadow-phone), inset 0 0 0 1px rgba(255,255,255,0.06)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      padding: 1.5,
      background: 'linear-gradient(160deg, rgba(255,255,255,0.28), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.12))',
      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: radius - 10,
      overflow: 'hidden',
      background: 'var(--bg-app)',
      aspectRatio: '9 / 19.5',
      ...screenStyle
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '32%',
      height: 24,
      borderRadius: 999,
      background: '#05070d',
      zIndex: 30,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)'
    }
  }), children));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProfileCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProfileCard — the horse dating card shown in the phone. Full-bleed
 * hero with protection gradient, name/age, distance, trait tags + bio.
 */
function ProfileCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-solid)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? `center/cover no-repeat url(${src})` : 'radial-gradient(130% 100% at 50% 15%, rgba(255,45,120,0.35), rgba(255,122,24,0.16) 45%, rgba(11,17,32,0.9) 80%)',
      fontSize: 128
    }
  }, !src && /*#__PURE__*/React.createElement("span", {
    style: {
      filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.5))'
    }
  }, emoji), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "emerald",
    icon: "shieldCheck"
  }, "Verified Stud")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(6,10,21,0.96) 4%, rgba(6,10,21,0.55) 32%, rgba(6,10,21,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--white)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1
    }
  }, name, age != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-regular)',
      color: 'var(--slate-200)'
    }
  }, " ", age)), horseAge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--slate-300)',
      fontWeight: 'var(--fw-medium)'
    }
  }, "(", horseAge, " in horse years)")), (distance || location) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 7,
      color: 'var(--slate-300)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mapPin",
    size: 14,
    style: {
      color: 'var(--neon-orange)'
    }
  }), distance, location && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate-400)'
    }
  }, "\xB7 ", location)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: bio ? 'var(--space-4)' : 0
    }
  }, tags.map((tg, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    emoji: tg.emoji
  }, tg.label))), bio && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)',
      fontStyle: 'italic'
    }
  }, "\u201C", bio, "\u201D")));
}
Object.assign(__ds_scope, { ProfileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProfileCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const GLOWS = {
  none: 'none',
  pink: '0 0 60px -18px rgba(255,45,120,0.55)',
  orange: '0 0 60px -18px rgba(255,122,24,0.5)',
  gold: '0 0 60px -18px rgba(245,181,36,0.5)',
  emerald: '0 0 60px -18px rgba(52,211,153,0.45)'
};

/**
 * GlassCard — the signature frosted surface. Blurred translucent fill,
 * hairline border, optional colored bloom + hover lift.
 */
function GlassCard({
  children,
  glow = 'none',
  strong = false,
  interactive = false,
  padding = 'var(--space-5)',
  radius = 'var(--radius-lg)',
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const lift = interactive && hovered;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHovered(true),
    onMouseLeave: () => interactive && setHovered(false),
    style: {
      position: 'relative',
      background: strong ? 'var(--surface-glass-strong)' : 'var(--surface-card)',
      border: `1px solid ${lift ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
      borderRadius: radius,
      padding,
      backdropFilter: `blur(${strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)'})`,
      WebkitBackdropFilter: `blur(${strong ? 'var(--glass-blur-strong)' : 'var(--glass-blur)'})`,
      boxShadow: lift ? `var(--shadow-lg), ${GLOWS[glow]}` : `var(--shadow-md), ${GLOWS[glow]}`,
      transform: lift ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProductCard.jsx
try { (() => {
const TONE = {
  gold: {
    glow: 'gold',
    price: 'var(--gold-400)',
    badge: 'gold',
    icon: 'crown',
    chip: 'PREMIUM'
  },
  emerald: {
    glow: 'emerald',
    price: 'var(--emerald-300)',
    badge: 'emerald',
    icon: 'gem',
    chip: 'NEW'
  },
  neon: {
    glow: 'pink',
    price: 'var(--neon-rose)',
    badge: 'neon',
    icon: 'flame',
    chip: 'HOT'
  }
};

/**
 * ProductCard — a tile in the Neigh-Premium merchandise shop. Emoji/glyph
 * hero, tone-tinted price, buy action. Absurd luxury horse goods.
 */
function ProductCard({
  emoji = '🛍️',
  name,
  blurb,
  price,
  tone = 'gold',
  badge,
  onBuy,
  style
}) {
  const t = TONE[tone] || TONE.gold;
  return /*#__PURE__*/React.createElement(__ds_scope.GlassCard, {
    interactive: true,
    glow: t.glow,
    padding: "var(--space-4)",
    radius: "var(--radius-lg)",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 92,
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 44,
      marginBottom: 'var(--space-3)',
      background: tone === 'gold' ? 'radial-gradient(120% 120% at 50% 0%, rgba(245,181,36,0.22), rgba(15,23,42,0.2))' : tone === 'emerald' ? 'radial-gradient(120% 120% at 50% 0%, rgba(52,211,153,0.2), rgba(15,23,42,0.2))' : 'radial-gradient(120% 120% at 50% 0%, rgba(255,45,120,0.2), rgba(15,23,42,0.2))',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null, emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: t.badge,
    icon: t.icon
  }, badge || t.chip))), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-title)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--ls-snug)',
      lineHeight: 1.2
    }
  }, name), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: t.price
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBuy,
    "aria-label": `Buy ${name}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-raised)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-bold)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shoppingBag",
    size: 15
  }), "Buy")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trotr-app/App.jsx
try { (() => {
// Dashboard orchestration: sidebar + centered phone + merch rail, with
// swipe animation, match celebration, and buy toasts.
const {
  PhoneFrame,
  MatchToast,
  Button,
  Badge,
  Icon,
  GlassCard
} = window.Horse_7cfa43;
function CenterStat({
  icon,
  value,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 11,
      marginTop: 2
    }
  }, label)));
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
  const swipe = dir => {
    if (busy.current) return;
    busy.current = true;
    const horse = current;
    setGhost(dir);
    setTimeout(() => {
      setIdx(i => i + 1);
      setGhost(null);
      busy.current = false;
      if (dir === 'like' || dir === 'super') {
        setMatches(m => m + 1);
        setMatch({
          horse,
          dir
        });
      }
    }, 360);
  };
  const buy = p => {
    setToast(`Added “${p.name}” to your stable 🛒`);
    clearTimeout(buy._t);
    buy._t = setTimeout(() => setToast(null), 2600);
  };
  const onNavigate = id => {
    setNav(id);
    if (id === 'shop') setTab('shop');
    if (id === 'discover' || id === 'matches') setTab('feed');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "trotr-root",
    style: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(60% 80% at 15% 0%, rgba(255,45,120,0.16), rgba(6,10,21,0) 60%),' + 'radial-gradient(55% 75% at 90% 100%, rgba(255,122,24,0.14), rgba(6,10,21,0) 55%),' + 'radial-gradient(50% 60% at 85% 5%, rgba(245,181,36,0.1), rgba(6,10,21,0) 55%),' + 'var(--slate-950)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNavigate: onNavigate,
    matchCount: matches
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'var(--space-6)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 560,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "trotr-eyebrow"
  }, "Discover"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.03em'
    }
  }, "Good evening, Ed \uD83C\uDF19")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CenterStat, {
    icon: "heart",
    value: matches,
    label: "Matches",
    color: "var(--neon-pink)"
  }), /*#__PURE__*/React.createElement(CenterStat, {
    icon: "zap",
    value: "3",
    label: "Neighs left",
    color: "var(--accent-super)"
  }))), /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 344,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(MobileApp, {
    tab: tab,
    onTab: t => {
      setTab(t);
      setNav(t === 'shop' ? 'shop' : 'discover');
    },
    horse: current,
    ghost: ghost,
    onSwipe: swipe,
    onBuy: buy
  }))), /*#__PURE__*/React.createElement(ShopPanel, {
    onBuy: buy
  })), match && /*#__PURE__*/React.createElement("div", {
    onClick: () => setMatch(null),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(6,10,21,0.72)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      animation: 'trotr-fade 220ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(MatchToast, {
    title: "It's a Match!",
    message: `You and ${match.horse.name} both said neigh. A horse-wedding simulation is now booking your barn…`,
    leftEmoji: "\uD83D\uDC34",
    rightEmoji: match.horse.emoji
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "messageCircle",
    block: true,
    onClick: () => setMatch(null)
  }, "Send the first Neigh"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    block: true,
    onClick: () => setMatch(null)
  }, "Keep Trotting")))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 120,
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-glass-strong)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-strong)',
      fontWeight: 600,
      fontSize: 14,
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'trotr-rise 260ms var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    style: {
      color: 'var(--emerald-400)'
    }
  }), " ", toast));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trotr-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trotr-app/MobileApp.jsx
try { (() => {
// Phone screen content — Dating Feed + in-app Shop, switched by Tabs.
const {
  Tabs,
  ProfileCard,
  IconButton,
  Icon,
  Badge,
  Avatar
} = window.Horse_7cfa43;
function DatingFeed({
  horse,
  ghost,
  onSwipe
}) {
  const [superHover, setSuperHover] = React.useState(false);
  if (!horse) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '60px 24px',
        textAlign: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 52
      }
    }, "\uD83C\uDF3E"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        color: 'var(--text-strong)',
        fontSize: 18,
        marginTop: 12
      }
    }, "You've trotted through everyone"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        lineHeight: 1.5,
        marginTop: 6
      }
    }, "Check back after the next hay delivery for fresh stallions & mares."));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transition: 'transform 340ms var(--ease-spring), opacity 300ms var(--ease-out)',
      transform: ghost === 'like' ? 'translateX(120%) rotate(18deg)' : ghost === 'nope' ? 'translateX(-120%) rotate(-18deg)' : ghost === 'super' ? 'translateY(-130%) scale(0.9)' : 'none',
      opacity: ghost ? 0 : 1
    }
  }, /*#__PURE__*/React.createElement(ProfileCard, horse)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    tone: "nope",
    size: "lg",
    label: "Nope",
    onClick: () => onSwipe('nope')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setSuperHover(true),
    onMouseLeave: () => setSuperHover(false)
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "zap",
    tone: "super",
    label: "Super Neigh",
    onClick: () => onSwipe('super')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: `translateX(-50%) scale(${superHover ? 1 : 0.7})`,
      padding: '5px 10px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      background: 'var(--accent-super)',
      color: '#04222e',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      boxShadow: '0 8px 22px var(--glow-super)',
      opacity: superHover ? 1 : 0,
      transition: 'all 200ms var(--ease-spring)',
      pointerEvents: 'none'
    }
  }, "*NEIGHHH!*")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    tone: "love",
    size: "lg",
    label: "Like",
    onClick: () => onSwipe('like')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 11,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, "Nope \xB7 Super Neigh \xB7 Like"));
}
function MobileShop({
  onBuy
}) {
  const products = window.TROTR_DATA.products;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 16px 20px',
      display: 'grid',
      gap: 10
    }
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onBuy(p),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 10,
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      background: 'rgba(148,163,184,0.1)'
    }
  }, p.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 1.2
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 11,
      marginTop: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, p.blurb)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      color: p.tone === 'gold' ? 'var(--gold-400)' : p.tone === 'emerald' ? 'var(--emerald-300)' : 'var(--neon-rose)'
    }
  }, p.price))));
}
function MobileApp({
  tab,
  onTab,
  horse,
  ghost,
  onSwipe,
  onBuy
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--grad-app-glow), var(--bg-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2px 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "trotr-gradient-text",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.03em'
    }
  }, "Trotr"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: onTab,
    items: [{
      id: 'feed',
      label: 'Dating',
      icon: 'flame'
    }, {
      id: 'shop',
      label: 'Shop',
      icon: 'store'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, tab === 'feed' ? /*#__PURE__*/React.createElement(DatingFeed, {
    horse: horse,
    ghost: ghost,
    onSwipe: onSwipe
  }) : /*#__PURE__*/React.createElement(MobileShop, {
    onBuy: onBuy
  })));
}
Object.assign(window, {
  MobileApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trotr-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trotr-app/ShopPanel.jsx
try { (() => {
// Right rail — the Premium Crazy Merchandise Shop.
const {
  ProductCard,
  Badge,
  Icon
} = window.Horse_7cfa43;
function ShopPanel({
  onBuy
}) {
  const products = window.TROTR_DATA.products;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 348,
      flexShrink: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid var(--border-subtle)',
      background: 'linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-5) var(--space-4)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 20,
    style: {
      color: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, "Neigh-Premium Shop")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, "Absurd luxury for the modern stallion. Free stable delivery over $500.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    emoji: p.emoji,
    name: p.name,
    blurb: p.blurb,
    price: p.price,
    tone: p.tone,
    badge: p.badge,
    onBuy: () => onBuy(p)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-strong)',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    style: {
      color: 'var(--emerald-400)'
    }
  }), "More drops every full moon. \uD83C\uDF15")));
}
Object.assign(window, {
  ShopPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trotr-app/ShopPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trotr-app/Sidebar.jsx
try { (() => {
// Left barn sidebar — brand lockup, primary nav, premium upsell, profile.
const {
  NavItem,
  Avatar,
  Badge,
  Button,
  Icon
} = window.Horse_7cfa43;
function Sidebar({
  active,
  onNavigate,
  matchCount
}) {
  const nav = [{
    id: 'discover',
    icon: 'flame',
    label: 'Discover'
  }, {
    id: 'matches',
    icon: 'heart',
    label: 'Matches',
    count: matchCount
  }, {
    id: 'messages',
    icon: 'messageCircle',
    label: 'Messages',
    count: 2
  }, {
    id: 'shop',
    icon: 'crown',
    label: 'Neigh-Premium Shop'
  }, {
    id: 'profile',
    icon: 'users',
    label: 'My Profile'
  }, {
    id: 'settings',
    icon: 'settings',
    label: 'Barn Settings'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flexShrink: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-5)',
      gap: 'var(--space-5)',
      borderRight: '1px solid var(--border-subtle)',
      background: 'linear-gradient(180deg, rgba(15,23,42,0.5), rgba(6,10,21,0.2))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 6px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/trotr-mark.svg",
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "trotr-gradient-text",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.03em'
    }
  }, "Trotr")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: n.icon,
    label: n.label,
    count: n.count,
    active: active === n.id,
    onClick: () => onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4)',
      background: 'var(--grad-gold)',
      color: 'var(--text-on-gold)',
      overflow: 'hidden',
      boxShadow: '0 12px 30px rgba(245,181,36,0.28)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crown",
    size: 22,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      marginTop: 8,
      letterSpacing: '-0.02em'
    }
  }, "Go Neigh-Premium"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 12px',
      fontSize: 12,
      lineHeight: 1.45,
      opacity: 0.82
    }
  }, "Unlimited neighs, see who trotted your way, and one free Hay-Champagne."), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      padding: '9px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: '#2a1c02',
      color: 'var(--gold-400)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Upgrade \u2014 $12/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 4px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    emoji: "\uD83D\uDC34",
    size: "md",
    ring: "neon",
    online: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Mr. Ed"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-faint)',
      fontSize: 12
    }
  }, "Barn 12 \xB7 Free plan"))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trotr-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trotr-app/data.js
try { (() => {
// Trotr sample content — horses in the deck + Neigh-Premium merch.
window.TROTR_DATA = {
  horses: [{
    id: 'storm',
    emoji: '🐴',
    name: 'Storm',
    age: 6,
    horseAge: 42,
    distance: '2 miles away',
    location: 'Next Barn Over',
    verified: true,
    tags: [{
      emoji: '🌾',
      label: 'Organic Hay Only'
    }, {
      emoji: '🏎️',
      label: '1 HP (Literally)'
    }, {
      emoji: '🚫',
      label: 'Hates Flies'
    }, {
      emoji: '🧼',
      label: 'Freshly Hoof-Manicured'
    }],
    bio: 'Looking for a stable relationship. No horsing around. Must love long trots on the beach.'
  }, {
    id: 'bella',
    emoji: '🦄',
    name: 'Bella',
    age: 4,
    horseAge: 28,
    distance: '1 mile away',
    location: 'Sunny Meadow Stables',
    verified: true,
    tags: [{
      emoji: '✨',
      label: 'Certified Unicorn-Adjacent'
    }, {
      emoji: '🥕',
      label: 'Carrot Cake Enthusiast'
    }, {
      emoji: '🎠',
      label: 'Ex-Carousel Pro'
    }],
    bio: 'Free spirit, fully vaccinated, allergic to drama and low-grade oats. Swipe right if you can keep up at a canter.'
  }, {
    id: 'duke',
    emoji: '🐎',
    name: 'Duke',
    age: 9,
    horseAge: 63,
    distance: '5 miles away',
    location: 'Thunder Ridge Ranch',
    verified: false,
    tags: [{
      emoji: '💪',
      label: 'Retired Racehorse'
    }, {
      emoji: '🥃',
      label: 'Enjoys Aged Hay'
    }, {
      emoji: '🌅',
      label: 'Sunset Gallops Only'
    }],
    bio: 'Silver mane, silver-fox energy. Been around the paddock a few times. Looking for something long-term and grassy.'
  }],
  products: [{
    id: 'shoe',
    emoji: '🐴',
    name: 'The Smart Horseshoe Pro',
    price: '$399',
    tone: 'gold',
    badge: 'PREMIUM',
    blurb: 'Bluetooth step tracking + heart-rate monitor for when they spot an attractive mare.'
  }, {
    id: 'glow',
    emoji: '💇',
    name: 'HorseGlow Premium AI',
    price: '$29/mo',
    tone: 'emerald',
    badge: 'AI',
    blurb: "Automatically brushes their mane digitally in other horses' feeds. Always photo-ready."
  }, {
    id: 'champagne',
    emoji: '🍾',
    name: 'First-Date Hay-Champagne',
    price: '$88',
    tone: 'gold',
    badge: 'LUXE',
    blurb: 'Organic bubbling hay extract for romantic stable dinners. Pairs with moonlight.'
  }, {
    id: 'icebreaker',
    emoji: '💬',
    name: 'AI Ice-Breaker Generator',
    price: '$19',
    tone: 'neon',
    badge: 'HOT',
    blurb: '"Are you from this stable? Because you just kicked my heart into a gallop."'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trotr-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MatchToast = __ds_scope.MatchToast;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProfileCard = __ds_scope.ProfileCard;

__ds_ns.GlassCard = __ds_scope.GlassCard;

})();
