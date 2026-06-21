// Carrega automaticamente todas as imagens de slides de cada apresentação.
// Cada projeto tem uma pasta em src/assets/slides/<chave>/slide-N.jpg
const airdropModules = import.meta.glob('../assets/slides/airdrop/*.jpg', {
  eager: true,
  import: 'default',
});
const blitzModules = import.meta.glob('../assets/slides/blitz/*.jpg', {
  eager: true,
  import: 'default',
});

function sortedSlides(modules) {
  return Object.entries(modules)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/slide-(\d+)\.jpg$/)?.[1] ?? '0', 10);
      const numB = parseInt(b.match(/slide-(\d+)\.jpg$/)?.[1] ?? '0', 10);
      return numA - numB;
    })
    .map(([, url]) => url);
}

// Mapa: chave do projeto -> array ordenado de imagens dos slides
export const presentationsData = {
  airdrop: sortedSlides(airdropModules),
  blitz: sortedSlides(blitzModules),
};
