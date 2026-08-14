/** @type {import('next').NextConfig} */
const nextConfig = {
  // Página única estática. Gera HTML/CSS/JS puro em ./out — sem servidor,
  // sem rota de API. Aprovado no plano.
  output: 'export',
  // next/image não roda otimização em build estático.
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
