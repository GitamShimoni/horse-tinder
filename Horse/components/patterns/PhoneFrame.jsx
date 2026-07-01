import React from 'react';

/**
 * PhoneFrame — a premium glass smartphone bezel. Renders children as the
 * screen; includes a dynamic-island notch and a subtle rim highlight.
 */
export function PhoneFrame({ children, width = 320, style, screenStyle, ...rest }) {
  const radius = Math.round(width * 0.16);
  return (
    <div
      style={{
        position: 'relative',
        width,
        borderRadius: radius,
        padding: 10,
        background: 'linear-gradient(160deg, #2b3446 0%, #10141f 46%, #05070d 100%)',
        boxShadow: 'var(--shadow-phone), inset 0 0 0 1px rgba(255,255,255,0.06)',
        ...style,
      }}
      {...rest}
    >
      {/* rim highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: radius,
          padding: 1.5,
          background: 'linear-gradient(160deg, rgba(255,255,255,0.28), rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.12))',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          borderRadius: radius - 10,
          overflow: 'hidden',
          background: 'var(--bg-app)',
          aspectRatio: '9 / 19.5',
          ...screenStyle,
        }}
      >
        {/* dynamic island */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '32%',
            height: 24,
            borderRadius: 999,
            background: '#05070d',
            zIndex: 30,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
          }}
        />
        {children}
      </div>
    </div>
  );
}
