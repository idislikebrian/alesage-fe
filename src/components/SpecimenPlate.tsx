import { RegistrationMarks } from "./RegistrationMarks";
import styles from "./site.module.css";

export function SpecimenPlate() {
  return (
    <div className={styles.plate} aria-label="Exploded specimen plate">
      <RegistrationMarks />
      <div className={styles.plateCap}>
        <span className={styles.label}>Plate 01 — 911 Carrera 3.2, in pieces</span>
        <span className={styles.label}>Components, knolled · not to scale</span>
      </div>
      <svg
        viewBox="0 0 1200 360"
        role="img"
        aria-label="Disassembled air-cooled Porsche components, arranged and numbered"
      >
        <defs>
          <style>
            {`
              .bp{ stroke:#17150f; stroke-width:1.4; fill:none; }
              .bpf{ fill:#e6e2d8; stroke:#17150f; stroke-width:1.4; }
              .gh{ stroke:rgba(23,21,15,.12); stroke-width:1; fill:none; }
              .lab2{ font-family:var(--font-plex-mono), ui-monospace, monospace; font-size:13px; fill:#8a877d; letter-spacing:1px;}
              .cr{ stroke:#bf2a2e; stroke-width:1.2; }
            `}
          </style>
        </defs>
        <line className="gh" x1="0" y1="60" x2="1200" y2="60" />
        <line className="gh" x1="0" y1="300" x2="1200" y2="300" />
        <g transform="translate(140,180)">
          <circle className="bpf" r="62" />
          <circle className="bp" r="44" />
          <circle className="bp" r="20" />
          <g className="cr">
            <line x1="-78" y1="0" x2="78" y2="0" />
            <line x1="0" y1="-78" x2="0" y2="78" />
          </g>
          <circle className="bp" cx="0" cy="-44" r="7" />
          <circle className="bp" cx="38" cy="-22" r="7" />
          <circle className="bp" cx="38" cy="22" r="7" />
          <circle className="bp" cx="0" cy="44" r="7" />
          <circle className="bp" cx="-38" cy="22" r="7" />
          <circle className="bp" cx="-38" cy="-22" r="7" />
        </g>
        <text className="lab2" x="140" y="332" textAnchor="middle">
          01 · FLAT-SIX
        </text>
        <g transform="translate(370,180)">
          <rect className="bpf" x="-30" y="-58" width="60" height="74" rx="3" />
          <line className="bp" x1="-30" y1="-40" x2="30" y2="-40" />
          <line className="bp" x1="-30" y1="-30" x2="30" y2="-30" />
          <line className="bp" x1="-30" y1="-20" x2="30" y2="-20" />
          <path className="bp" d="M0,16 L0,52 M-14,52 a14,14 0 0 0 28,0" />
          <circle className="bp" cx="0" cy="-2" r="6" />
          <line className="cr" x1="-50" y1="-2" x2="50" y2="-2" />
        </g>
        <text className="lab2" x="370" y="332" textAnchor="middle">
          02 · PISTON
        </text>
        <g transform="translate(620,180)">
          <circle className="bpf" r="66" />
          <circle className="bp" r="52" />
          <circle className="bp" r="14" />
          <g className="bp">
            <path d="M0,-52 L7,-16 L-7,-16 Z" />
            <path d="M45,26 L13,8 L20,20 Z" />
            <path d="M-45,26 L-13,8 L-20,20 Z" />
            <path d="M0,52 L-7,16 L7,16 Z" transform="rotate(60)" />
            <path d="M0,52 L-7,16 L7,16 Z" transform="rotate(180)" />
            <path d="M0,52 L-7,16 L7,16 Z" transform="rotate(300)" />
          </g>
          <circle className="bp" cx="0" cy="-30" r="4" />
          <circle className="bp" cx="26" cy="15" r="4" />
          <circle className="bp" cx="-26" cy="15" r="4" />
        </g>
        <text className="lab2" x="620" y="332" textAnchor="middle">
          03 · FUCHS 16″
        </text>
        <g transform="translate(860,180)">
          <circle className="bpf" r="56" />
          <circle className="bp" r="44" />
          <g className="bp">
            <line x1="0" y1="-44" x2="0" y2="-34" />
            <line x1="31" y1="-31" x2="24" y2="-24" />
            <line x1="44" y1="0" x2="34" y2="0" />
            <line x1="-31" y1="-31" x2="-24" y2="-24" />
            <line x1="-44" y1="0" x2="-34" y2="0" />
          </g>
          <line className="bp" x1="0" y1="0" x2="22" y2="-26" />
          <circle className="bpf" r="5" />
        </g>
        <text className="lab2" x="860" y="332" textAnchor="middle">
          04 · TACHOMETER
        </text>
        <g transform="translate(1075,180)">
          <g className="bp">
            <circle cx="-26" cy="-30" r="11" />
            <line x1="-26" y1="-30" x2="-26" y2="6" />
            <circle cx="14" cy="-30" r="11" />
            <line x1="14" y1="-30" x2="14" y2="-2" />
            <rect x="-40" y="24" width="22" height="9" />
            <rect x="2" y="24" width="30" height="9" />
            <circle cx="-26" cy="-30" r="4" />
            <circle cx="14" cy="-30" r="4" />
          </g>
        </g>
        <text className="lab2" x="1075" y="332" textAnchor="middle">
          05 · FASTENERS
        </text>
      </svg>
    </div>
  );
}
