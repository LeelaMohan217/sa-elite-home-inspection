// Magic UI-style "Avatar Circles" — a row of overlapping circular avatars
// with a trailing "+N" badge. No real client photos exist yet, so each
// avatar renders as an initials badge in a theme color rather than an <img>;
// swap in real photos later by rendering an <img> in place of the span.

const TONES = ["bg-accent text-paper", "bg-accent text-paper", "bg-ink text-paper"];

function AvatarCircles({ avatars = [], total, size = "h-9 w-9" }) {
  return (
    <div className="flex items-center">
      {avatars.map((initials, i) => (
        <span
          key={initials}
          style={{ zIndex: avatars.length - i }}
          className={`flex ${size} items-center justify-center rounded-full border-2 border-paper text-xs font-bold ${
            TONES[i % TONES.length]
          } ${i > 0 ? "-ml-3" : ""}`}
        >
          {initials}
        </span>
      ))}

      {total != null && (
        <span
          style={{ zIndex: 0 }}
          className={`-ml-3 flex ${size} items-center justify-center rounded-full border-2 border-paper bg-surface text-[11px] font-bold text-ink`}
        >
          +{total}
        </span>
      )}
    </div>
  );
}

export default AvatarCircles;
