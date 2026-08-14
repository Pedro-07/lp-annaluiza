import type { Config } from 'tailwindcss';

// Tokens = paleta aprovada em docs/design/paleta-contraste.md.
// Nenhuma cor entra aqui sem uma linha naquela tabela.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        petroleo: '#002F4A', // texto + ação
        'petroleo-hover': '#013A5C', // estado hover do botão sólido
        'petroleo-muted': '#4D6D80', // texto secundário sobre branco (5.5:1)
        ciano: '#00C9D1', // ACENTO. nunca texto sobre branco (2.0:1)
      },
      fontFamily: {
        // Comfortaa: display only — marca, títulos, números grandes.
        display: ['var(--font-comfortaa)', 'system-ui', 'sans-serif'],
        // Manrope: corpo e rótulos. Legível em tamanho pequeno, com estrutura
        // que tira do padrão casual sem competir com o Comfortaa.
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        cta: '1rem', // raio generoso do botão — destaque por forma, não por cor
      },
      maxWidth: {
        content: '34rem', // coluna mobile-first
      },
    },
  },
  plugins: [],
};

export default config;
