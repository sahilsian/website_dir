// TODO: swap for the official Peppy Foods logo (e.g. /public/logo.png) when supplied.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <svg width="42" height="42" viewBox="0 0 42 42" aria-hidden="true">
        <circle cx="21" cy="21" r="21" fill="#D7261E" />
        <path
          d="M14 30c-1-6 1-12 7-14 4-1.4 7 .4 8 3 1.2 3.2-.8 6.6-4.5 7.6-2.4.6-4.4.2-6-.8"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M22 16c0-3 1.5-5 4-6" stroke="#9BD15A" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      <span className="logo__text">
        <strong>Peppy</strong>
        <small>Foods Inc.</small>
      </span>
    </span>
  );
}
