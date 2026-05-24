export const ARTICLES = [
  {
    id: 'murga-chilena',
    icon: '🎺',
    iconStyle: {},
    title: 'La murga chilena y sus raíces rioplatenses',
    desc: 'Ensayo comparativo sobre los orígenes de la murga en el Cono Sur y su adaptación a la realidad barrial santiaguina. Analiza ritmos, instrumentación y prácticas colectivas desde 1980.',
    tags: ['banda', 'historia', '2024', '22 págs.'],
    status: 'published',
  },
  {
    id: 'cuerpo-ritmo',
    icon: '💃',
    iconStyle: { background: 'linear-gradient(135deg,var(--turquesa),var(--verde))' },
    title: 'Cuerpo, ritmo y comunidad: el baile en el carnaval popular',
    desc: 'Investigación etnográfica sobre el rol del cuerpo en el carnaval callejero. Entrevistas con 30 bailarinas y bailarines sobre su experiencia y transformación personal.',
    tags: ['baile', 'figura', 'comunidad', '2023'],
    status: 'published',
  },
  {
    id: 'figura-carnavalera',
    icon: '🎭',
    iconStyle: { background: 'linear-gradient(135deg,var(--amarillo),var(--dorado))' },
    title: 'La figura carnavalera como dispositivo político',
    desc: 'Reflexión teórica sobre cómo el vestuario, la máscara y el personaje carnavalero operan como formas de crítica social y subversión cultural en el espacio público.',
    tags: ['figura', 'historia', '2022', '18 págs.'],
    status: 'published',
  },
  {
    id: 'carnaval-nono-380',
    icon: '🏘️',
    iconStyle: { background: 'linear-gradient(135deg,#8e44ad,#6c3483)' },
    title: 'Carnaval y transformación barrial: 20 años en Nono 380',
    desc: 'Estudio de caso sobre el impacto comunitario de Chinchintirapie. Mapeo de redes sociales, participación vecinal y transformación del espacio urbano.',
    tags: ['comunidad', 'historia', '2024', '35 págs.'],
    status: 'published',
  },
  {
    id: 'percusion-colectiva',
    icon: '🥁',
    iconStyle: { background: 'linear-gradient(135deg,var(--naranja),var(--rojo))' },
    title: 'Percusión colectiva: el bombo como articulador social',
    desc: 'Análisis musicológico y social del rol del bombo en la murga popular. Incluye transcripciones rítmicas y reflexiones sobre la escucha colectiva.',
    tags: ['banda', 'baile', '2021', '28 págs.'],
    status: 'published',
  },
  {
    id: 'memoria-corporal',
    icon: '📝',
    iconStyle: { background: 'linear-gradient(135deg,#2c3e50,#34495e)' },
    title: 'Memoria corporal y transmisión oral en la danza andina',
    desc: 'Investigación en desarrollo sobre cómo se transmite el conocimiento coreográfico. Metodología participante con registro en video.',
    tags: ['baile', 'figura', '2025–2026', 'En proceso'],
    status: 'in-progress',
  },
  {
    id: 'carnaval-latinoamericano',
    icon: '🌍',
    iconStyle: { background: 'linear-gradient(135deg,var(--verde),#0e6655)' },
    title: 'Carnaval latinoamericano en diáspora: redes y territorios',
    desc: 'Mapeo de escuelas carnavaleras en Chile, Argentina, Uruguay y Colombia. Análisis de intercambios e identidad latinoamericana.',
    tags: ['comunidad', 'banda', '2025', 'En proceso'],
    status: 'in-progress',
  },
];

export const TIMELINE = [
  { year: '2004', text: 'Fundación de Chinchintirapie. Primeros ensayos en Nono 380 con 12 integrantes.' },
  { year: '2007', text: 'Primer desfile callejero oficial. Nace el formato de carnaval barrial con tres cuerpos.' },
  { year: '2010', text: 'Se formaliza la escuela con talleres permanentes de percusión, danza y vestuario.' },
  { year: '2012', text: 'Primera investigación académica sobre la murga. Alianza con universidad local.' },
  { year: '2015', text: 'Décimo aniversario. Gran desfile con 200 participantes y primer cuaderno de la escuela.' },
  { year: '2018', text: 'Nace el CEDOC como espacio de documentación y reflexión sistemática.' },
  { year: '2020', text: 'Carnaval virtual durante pandemia. Adaptación digital y producción de podcasts.' },
  { year: '2022', text: 'Retorno a la calle. Primer Festival Internacional de Murga.' },
  { year: '2024', text: 'Veinte aniversario. Publicación del libro "20 años de carnaval en la calle".' },
  { year: '2026', text: 'Temporada actual. Nuevas investigaciones en curso y ampliación del archivo digital.' },
];

export const DOWNLOADS = [
  { emoji: '📗', label: 'Cuaderno de la Escuela Vol. 1', size: 'PDF · 4.2MB' },
  { emoji: '📘', label: 'Cuaderno de la Escuela Vol. 2', size: 'PDF · 5.8MB' },
  { emoji: '📙', label: 'Glosario Carnavalero',          size: 'PDF · 1.1MB', gold: true },
  { emoji: '📕', label: 'Libro 20 Aniversario',          size: 'PDF · 12MB' },
  { emoji: '🗺',  label: 'Mapa de Escuelas Latam',        size: 'PDF · 2.3MB' },
];

export const TOPICS = ['Murga', 'Percusión', 'Danza Andina', 'Vestuario', 'Teatro Callejero', 'Memoria', 'Comunidad', 'Identidad', 'Género', 'Territorio', 'Oralidad', 'Corporalidad'];
export const FILTERS = ['all', 'banda', 'baile', 'figura', 'historia', 'comunidad'];
export const STATS = [
  { num: '48', label: 'Investigaciones' },
  { num: '120', label: 'Documentos' },
  { num: '15', label: 'Autores' },
  { num: '3', label: 'Líneas temáticas' },
];
