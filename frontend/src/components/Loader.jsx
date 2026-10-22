import { Backdrop } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
`;

const Cube = styled("svg")({
  width: 120,
  height: 120,
  display: "block",
  margin: "auto",
  "& .cube": { animation: `${float} 2s ease-in-out infinite` },
});

// Vértice frontal do topo e vetores das arestas
const F = [70, 54];
const H = [0, 34];        // altura de uma aresta vertical
const GAP = 0.09;         // espaço entre os quadrados

// Cada face: origem, eixo "a", eixo "b" e cor
const FACES = [
  { origin: F, a: [-30, -17], b: [30, -17], color: "#fdd835" }, // topo (amarelo)
  { origin: F, a: [-30, -17], b: H,         color: "#2196f3" }, // esquerda (azul)
  { origin: F, a: [30, -17],  b: H,         color: "#e53935" }, // direita (vermelho)
];

// Gera o losango de um quadrado (i, j) dentro de uma face 3x3
const tilePoints = (origin, a, b, i, j) => {
  const s0 = i / 3 + GAP / 2, s1 = (i + 1) / 3 - GAP / 2;
  const t0 = j / 3 + GAP / 2, t1 = (j + 1) / 3 - GAP / 2;
  const p = (s, t) => [
    origin[0] + s * a[0] + t * b[0],
    origin[1] + s * a[1] + t * b[1],
  ];
  return [p(s0, t0), p(s1, t0), p(s1, t1), p(s0, t1)]
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
};

const CELLS = [0, 1, 2].flatMap((i) => [0, 1, 2].map((j) => [i, j]));

export default function Loader({ open }) {
  return (
    <Backdrop
      open={open}
      transitionDuration={{ enter: 0, exit: 300 }}
      sx={{ zIndex: (theme) => theme.zIndex.modal + 1, bgcolor: "#1e1e1e" }}
    >
      <Cube viewBox="30 10 80 90">
        <g className="cube" fill="none" strokeWidth="0.8" strokeLinejoin="miter">
          {FACES.map((face) =>
            CELLS.map(([i, j]) => (
              <polygon
                key={`${face.color}-${i}-${j}`}
                points={tilePoints(face.origin, face.a, face.b, i, j)}
                stroke={face.color}
              />
            ))
          )}
        </g>
      </Cube>
    </Backdrop>
  );
}