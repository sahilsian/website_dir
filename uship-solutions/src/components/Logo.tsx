// TODO: swap for the official U-Ship Solutions logo file (e.g. /public/logo.svg) when supplied.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#1554D1" />
        <path d="M11 11v10a9 9 0 0 0 18 0V11h-5v10a4 4 0 0 1-8 0V11z" fill="#fff" />
        <path d="M25 5l7 6h-5z" fill="#5EC2FF" />
      </svg>
      <span className="logo__text">
        <strong>U-Ship</strong>
        <small>Solutions</small>
      </span>
    </span>
  );
}
