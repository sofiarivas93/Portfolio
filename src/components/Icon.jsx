// Íconos simples en línea para los botones de contacto.
const paths = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" fill="none" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  behance: (
    <text x="0" y="17" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">
      Bē
    </text>
  ),
}

export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
