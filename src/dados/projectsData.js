import capaAirdrop from '../assets/imagens/capa-airdrop.png';
import capaSensibilidade from '../assets/imagens/capa-sensibilidade.png';
import capaBlitz from '../assets/imagens/capa-blitz.png';

export const projectsData = [
  {
    id: 1,
    featured: true,
    tagPt: 'Sistema de Airdrop',
    tagEn: 'Airdrop System',
    title: 'Sistema de Airdrop Profissional',
    datePt: 'Maio 2026',
    dateEn: 'May 2026',
    descPt:
      'Sistema de Airdrop Profissional voltado para servidores FiveM, com foco em algo que muitos ignoram: engajamento inteligente da comunidade.',
    descEn:
      'Professional Airdrop System for FiveM servers, focused on something many overlook: smart community engagement.',
    tags: ['Python', 'Lua', 'JavaScript'],
    coverImage: capaAirdrop,
    demoUrl: '',    //  link da demonstração/aplicação
    repoUrl: '',    //  link do repositório GitHub
    videoUrl: 'https://youtu.be/oIOa1PbiZII',
    pptUrl: '',     //  link do PPT de apresentação
    pptKey: 'airdrop', //  chave da apresentação em src/dados/presentationsData.js
  },
  {
    id: 2,
    featured: false,
    titlePt: 'Sistema - Painel de Sensibilidade',
    titleEn: 'System - Sensitivity Panel',
    datePt: 'Maio 2026',
    dateEn: 'May 2026',
    descPt:
      'Uma solução desenvolvida para otimizar a experiência no FiveM com ajustes rápidos, intuitivos e focados em performance.',
    descEn:
      'A solution designed to optimize the FiveM experience with fast, intuitive, performance-focused adjustments.',
    tags: ['Lua'],
    coverImage: capaSensibilidade,
    demoUrl: '',    //  link da demonstração/aplicação
    repoUrl: '',    //  link do repositório GitHub
    videoUrl: 'https://youtu.be/6uAqbX5OrCQ',
    pptUrl: '',     //  link do PPT de apresentação
  },
  {
    id: 3,
    featured: false,
    titlePt: 'Painel Blitz',
    titleEn: 'Blitz Panel',
    datePt: 'Junho 2026',
    dateEn: 'June 2026',
    descPt:
      'Sistema de blitz que eu sempre quis usar na cidade que trabalho como freelance. Foquei muito na usabilidade: você abre o /blitz, escolhe o item e monta um bloqueio perfeito em segundos usando as setas e o SHIFT para ajuste fino. O Spike não deleta sozinho, o que dá muito mais realismo para a cena depois da perseguição.',
    descEn:
      'Panel built for FiveM, combining Lua, HTML, CSS and JavaScript to deliver a fast, functional interface.',
    tags: ['HTML', 'CSS', 'Lua', 'JavaScript'],
    coverImage: capaBlitz,
    demoUrl: '',    // link da demonstração/aplicação
    repoUrl: '',    // link do repositório GitHub
    videoUrl: 'https://youtu.be/V1VvdRP7aDk',
    pptUrl: '',     // link do PPT de apresentação
    pptKey: 'blitz', // chave da apresentação em src/dados/presentationsData.js
  },
];
