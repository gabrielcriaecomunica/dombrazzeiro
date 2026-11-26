export const BRAND = {
  name: 'Dom Brazzeiro',
  subtitle: 'Mestre Churrasqueiro',
  signature: 'O Dom da Brasa',
  masterName: 'Jossel Freitas',
  region: 'Santa Catarina',
  citiesStatus: '[PENDENTE: confirmar cidades atendidas em Santa Catarina]',
  instagramHandle: '@dom_brazzeiro',
  instagramUrl: 'https://www.instagram.com/dom_brazzeiro/',
  whatsappDisplay: '(47) 99776-7207',
  whatsappNumber: '5547997767207',
  logoPng: '/assets/logo-dom-brazzeiro.png',
  logoWebp: '/assets/logo-dom-brazzeiro.webp',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá, equipe Dom Brazzeiro! Gostaria de pedir um orçamento personalizado para o meu evento.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'O que inclui', href: '#o-que-inclui' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'O mestre', href: '#o-mestre' },
  { label: 'Dúvidas', href: '#duvidas' },
] as const;

export interface IncludedItem {
  id: string;
  iconName:
    | 'flame'
    | 'utensils'
    | 'beef'
    | 'sparkles'
    | 'wrench'
    | 'clock'
    | 'clipboard';
  title: string;
  description: string;
}

export const INCLUDED_ITEMS: IncludedItem[] = [
  {
    id: 'mestre-equipe',
    iconName: 'flame',
    title: 'Mestre churrasqueiro e equipe',
    description:
      'Jossel Freitas e nossa equipe conduzem toda a brasa com postura impecável, atenção constante e simpatia com os convidados.',
  },
  {
    id: 'selecao-carnes',
    iconName: 'beef',
    title: 'Seleção e preparo das carnes',
    description:
      'A gente escolhe cortes de procedência selecionada, faz o tempero na medida certa e entrega cada ponto no tempo exato.',
  },
  {
    id: 'costela-fogo-chao',
    iconName: 'sparkles',
    title: 'Costela fogo de chão',
    description:
      'Nosso carro-chefe assado por horas em fogo lento de lenha, com casca dourada e carne que se desmancha ao toque do garfo.',
  },
  {
    id: 'buffet-completo',
    iconName: 'utensils',
    title: 'Buffet completo',
    description:
      'Acompanhamentos frescos, saladas, guarnições quentes e molhos artesanais preparados para harmonizar com os cortes na brasa.',
  },
  {
    id: 'montagem-estrutura',
    iconName: 'wrench',
    title: 'Montagem da estrutura',
    description:
      'Levamos estacas, grelhas, utensílios de corte, estação de fogo e tudo o que a cozinha externa precisa para funcionar sem improviso.',
  },
  {
    id: 'servico-evento',
    iconName: 'clock',
    title: 'Serviço durante o evento',
    description:
      'Chegamos com antecedência para acender o fogo, servimos no ritmo da sua festa e deixamos a área de trabalho organizada ao final.',
  },
  {
    id: 'cardapio-personalizado',
    iconName: 'clipboard',
    title: 'Cardápio personalizado',
    description:
      'Ajustamos cortes, entradas e acompanhamentos de acordo com o perfil dos seus convidados e o estilo da comemoração.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Você chama no WhatsApp',
    description:
      'Envie uma mensagem contando a data prevista, a cidade em Santa Catarina e quantas pessoas você pretende receber.',
  },
  {
    step: '02',
    title: 'A gente entende seu evento e monta a proposta sob medida',
    description:
      'Conversamos sobre o estilo da festa, preferências de cortes e estrutura necessária para desenhar o cardápio ideal.',
  },
  {
    step: '03',
    title: 'Data garantida',
    description:
      'Com tudo alinhado, reservamos a agenda da nossa equipe exclusivamente para o seu evento, com clareza em cada detalhe.',
  },
  {
    step: '04',
    title: 'No dia, você só aproveita',
    description:
      'A gente chega cedo, prepara o fogo de chão e cuida do buffet inteiro. Seu único papel é brindar com quem você gosta.',
  },
] as const;

export interface EventCardData {
  id: string;
  title: string;
  microtext: string;
  image: string;
  alt: string;
  tag: string;
}

export const EVENT_TYPES: EventCardData[] = [
  {
    id: 'aniversarios',
    title: 'Aniversários',
    tag: 'Celebrações em casa ou sítio',
    microtext:
      'Para você curtir cada abraço e foto ao lado de quem ama, sem passar o dia inteiro preso à churrasqueira.',
    image: '/assets/images/evento-aniversario.webp',
    alt: 'Convidados brindando ao ar livre em festa de aniversário com churrasco servido em tábua rústica',
  },
  {
    id: 'casamentos',
    title: 'Casamentos',
    tag: 'Recepções memoráveis',
    microtext:
      'O charme do fogo de chão ao ar livre unido a um serviço elegante, pontual e inesquecível para os noivos e convidados.',
    image: '/assets/images/evento-casamento.webp',
    alt: 'Recepção de casamento ao entardecer com estação de fogo de chão e mesas iluminadas por luzes quentes',
  },
  {
    id: 'encontros-familia',
    title: 'Encontros de família',
    tag: 'Domingo sem trabalho na cozinha',
    microtext:
      'Reúna pais, filhos e amigos em torno da mesa farta enquanto a gente cuida da brasa e do serviço completo.',
    image: '/assets/images/evento-familia.webp',
    alt: 'Família reunida em mesa rústica à noite saboreando cortes assados na brasa com iluminação acolhedora',
  },
  {
    id: 'confraternizacoes',
    title: 'Confraternizações de empresa',
    tag: 'Eventos corporativos',
    microtext:
      'Organização previsível, atendimento pontual e padrão alto para quem precisa contratar com tranquilidade total.',
    image: '/assets/images/evento-corporativo.webp',
    alt: 'Evento corporativo ao entardecer com equipe aproveitando churrasco gourmet ao redor do fogo',
  },
];

export interface GalleryPhoto {
  id: string;
  src: string;
  videoSrc?: string;
  alt: string;
  caption: string;
  aspectClass: string;
  objectClass?: string;
  /* Comentário de manutenção: substituir imagem placeholder em public/assets/images/ pela foto real do acervo Dom Brazzeiro */
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    src: '/assets/images/costela-fogo-de-chao-poster.webp',
    videoSrc: '/assets/videos/costela-fogo-de-chao.mp4',
    alt: 'Costelas inteiras assando lentamente na lenha no fogo de chão',
    caption: 'Costela fogo de chão assada lentamente na lenha',
    aspectClass: 'sm:col-span-2 lg:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-auto lg:h-full',
  },
  {
    id: 'gal-2',
    src: '/assets/images/galeria-cortes.webp',
    alt: 'Jossel Freitas preparando cortes selecionados na tábua rústica com braseiro aceso ao fundo',
    caption: 'Cortes selecionados servidos no ponto ideal',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
    objectClass: 'object-[center_35%]',
  },
  {
    id: 'gal-3',
    src: '/assets/images/galeria-buffet.webp',
    alt: 'Jossel Freitas finalizando abacaxis assados no espeto para o buffet completo da Dom Brazzeiro',
    caption: 'Buffet completo com guarnições quentes e frias',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
    objectClass: 'object-[center_45%]',
  },
  {
    id: 'gal-4',
    src: '/assets/images/galeria-brasa.webp',
    alt: 'Jossel Freitas conduzindo o fogo de lenha e a brasa diante de costelas e abacaxis assando ao ar livre',
    caption: 'Controle preciso de temperatura e brasa viva',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
    objectClass: 'object-[center_52%]',
  },
  {
    id: 'gal-5',
    src: '/assets/images/fogo-editorial.webp',
    alt: 'Costela inteira dourada e crocante por fora servida suculenta sobre tábua de madeira artesanal',
    caption: 'Textura crocante por fora e suculência por dentro',
    aspectClass: 'aspect-[4/3] lg:aspect-auto lg:h-full',
    objectClass: 'object-[center_52%]',
  },
];

export interface TestimonialItem {
  id: string;
  isPending?: boolean;
  status: string;
  quote: string;
  author: string;
  eventInfo: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    isPending: false,
    status: 'Relato real via Instagram',
    quote:
      'Não posso deixar de agradecer a parceria surreal do @dom_brazzeiro e da @isbellafreitas que, além de fazer a melhor carne que já comemos, moveram o mundo pra conseguir o melhor espaço para acontecer a festa surpresa.',
    author: '@nicollegiovani',
    eventInfo: 'Festa de aniversário surpresa',
  },
  {
    id: 'dep-2',
    isPending: true,
    status: '[DEPOIMENTO REAL PENDENTE]',
    quote:
      '[DEPOIMENTO REAL PENDENTE: inserir relato verificado de cliente corporativo / RH sobre a entrega do evento]',
    author: '[NOME DO CLIENTE PENDENTE]',
    eventInfo: '[EMPRESA E CIDADE PENDENTE]',
  },
  {
    id: 'dep-3',
    isPending: true,
    status: '[DEPOIMENTO REAL PENDENTE]',
    quote:
      '[DEPOIMENTO REAL PENDENTE: inserir relato verificado de casamento ou aniversário com costela fogo de chão]',
    author: '[NOME DO CLIENTE PENDENTE]',
    eventInfo: '[TIPO DE EVENTO E CIDADE PENDENTE]',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-cidades',
    question: 'Quais cidades vocês atendem?',
    answer:
      'Atendemos eventos em Santa Catarina. [PENDENTE: confirmar lista de cidades e regiões atendidas pela Dom Brazzeiro]. Entre em contato pelo WhatsApp informando o local da sua festa para confirmarmos a logística.',
  },
  {
    id: 'faq-pessoas',
    question: 'Para quantas pessoas vocês atendem?',
    answer:
      'Atendemos desde encontros intimistas em família até grandes confraternizações corporativas e casamentos. [PENDENTE: confirmar quantidade mínima e máxima de convidados por formato de evento].',
  },
  {
    id: 'faq-inclui',
    question: 'O que está incluído no serviço?',
    answer:
      'Nossa proposta contempla mestre churrasqueiro, equipe de apoio, seleção e preparo das carnes, costela fogo de chão, buffet completo, montagem da estrutura e serviço durante todo o evento. [PENDENTE: confirmar itens detalhados de cada pacote, bebidas e descartáveis/louças].',
  },
  {
    id: 'faq-antecedencia',
    question: 'Com quanto tempo de antecedência devo reservar?',
    answer:
      'Recomendamos reservar assim que você tiver a data e o local definidos, especialmente para fins de semana e fim de ano. [PENDENTE: confirmar prazo mínimo ideal de antecedência em dias ou semanas].',
  },
  {
    id: 'faq-nota-fiscal',
    question: 'Vocês emitem nota fiscal?',
    answer:
      '[PENDENTE: confirmar emissão de nota fiscal para pessoas físicas e empresas / prazos de faturamento corporativo].',
  },
  {
    id: 'faq-orcamento',
    question: 'Como faço o orçamento?',
    answer:
      'É simples e rápido. Você preenche o formulário aqui na página ou chama direto no nosso WhatsApp (47) 99776-7207 informando data, cidade, número estimado de convidados e tipo de evento. A gente analisa sua necessidade e envia uma proposta personalizada sob medida.',
  },
];
