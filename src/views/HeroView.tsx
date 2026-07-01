interface Props {
  onStart: () => void;
}

export default function HeroView({ onStart }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-8 pb-16 text-center text-white">
        <div className="mb-2 text-6xl">🐎❤️</div>
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl">
          Find Your <span className="text-rose-400">Mane</span> Match
        </h1>
        <p className="mt-3 max-w-xs text-base font-medium text-white/90">
          The dating app for horses. Swipe right on your next stable relationship.
        </p>
        <button
          onClick={onStart}
          className="mt-8 w-full max-w-xs rounded-full bg-rose-500 px-8 py-4 text-lg font-bold shadow-xl transition-transform active:scale-95 hover:bg-rose-600"
        >
          Start Swiping 🔥
        </button>
        <p className="mt-4 text-xs text-white/70">Neigh-ber · No riders allowed</p>
      </div>
    </div>
  );
}
