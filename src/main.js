import * as THREE from 'three';
import './styles.css';

const songs = [
  { id: 0, album: 'S.K.A.T.E.', title: 'Stir', artist: 'Rylo Rodriguez', genre: 'Hip-Hop/Rap', cover: '/covers/01-skate.jpg', accent: '#c461ff', rgb: '196,97,255', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/af/f3/cfaff3c8-9b84-2e0f-63d7-bfa12f5ecc8d/mzaf_14687665660213802930.plus.aac.p.m4a' },
  { id: 1, album: 'ICEMAN', title: 'Make Them Cry', artist: 'Drake', genre: 'Hip-Hop/Rap', cover: '/covers/02-iceman.jpg', accent: '#62dfff', rgb: '98,223,255', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/25/bf/fb/25bffb67-3e21-5072-f3d8-e42e85dc6d45/mzaf_9872388116614738549.plus.aac.p.m4a' },
  { id: 2, album: 'you seem pretty sad for a girl so in love', title: 'drop dead', artist: 'Olivia Rodrigo', genre: 'Pop', cover: '/covers/03-pretty-sad.jpg', accent: '#ff668f', rgb: '255,102,143', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/89/57/ad/8957adf6-1862-4e4e-bcb5-810d6cf79cc4/mzaf_7752581374620577831.plus.aac.p.m4a' },
  { id: 3, album: 'xperiment', title: 'wheredoistart', artist: 'Ken Carson', genre: 'Hip-Hop/Rap', cover: '/covers/04-xperiment.jpg', accent: '#ff493d', rgb: '255,73,61', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/c8/93/42c893e2-2087-1130-3b1f-908d22b86264/mzaf_12870525892948573084.plus.aac.p.m4a' },
  { id: 4, album: 'HABIBTI', title: 'Rusty Intro', artist: 'Drake', genre: 'R&B/Soul', cover: '/covers/05-habibti.jpg', accent: '#fa9a4b', rgb: '250,154,75', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/c8/d6/6ac8d61d-3c7a-c32b-2f48-c4f499a0a55c/mzaf_9256688444839749491.plus.aac.p.m4a' },
  { id: 5, album: 'The Great Divide: The Last Of The Bugs', title: 'End of August', artist: 'Noah Kahan', genre: 'Alternative', cover: '/covers/06-great-divide.jpg', accent: '#ffbd5b', rgb: '255,189,91', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/5e/e9/115ee9d4-ed93-b259-3a97-e5a501153074/mzaf_16772257583889191291.plus.aac.p.m4a' },
  { id: 6, album: 'CONFESSIONS II', title: 'I Feel So Free', artist: 'Madonna', genre: 'Pop', cover: '/covers/07-confessions.jpg', accent: '#ff4edb', rgb: '255,78,219', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/8d/10/318d1098-e403-a15a-761b-7cb70f5e2e06/mzaf_9984440707239979.plus.aac.p.m4a' },
  { id: 7, album: 'ML2', title: 'Ganja', artist: 'YoungBoy Never Broke Again', genre: 'Hip-Hop/Rap', cover: '/covers/08-ml2.jpg', accent: '#9aff53', rgb: '154,255,83', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/cb/4c/5dcb4c6e-d38b-a3e4-6921-480c67c9b674/mzaf_3989855488784830993.plus.aac.p.m4a' },
  { id: 8, album: 'I’m The Problem', title: "I'm The Problem", artist: 'Morgan Wallen', genre: 'Country', cover: '/covers/09-problem.jpg', accent: '#f5d375', rgb: '245,211,117', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/ca/26/4dca2667-33de-a871-7b3f-4a6b28558109/mzaf_8581491301158910393.plus.aac.p.m4a' },
  { id: 9, album: 'Dandelion', title: "Froggy Went A Courtin'", artist: 'Ella Langley', genre: 'Country', cover: '/covers/10-dandelion.jpg', accent: '#f09b74', rgb: '240,155,116', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/28/ee/2328eea5-8cff-9dea-19d6-b835a5c5b4cf/mzaf_14190879362410067925.plus.aac.p.m4a' },
  { id: 10, album: 'OCTANE', title: 'E85', artist: 'Don Toliver', genre: 'Hip-Hop/Rap', cover: '/covers/11-octane.jpg', accent: '#55f5cb', rgb: '85,245,203', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/62/22/b1/6222b1cd-8d2b-f310-4529-aed80063d877/mzaf_13809479701156828516.plus.aac.p.m4a' },
  { id: 11, album: 'Visitor (Deluxe)', title: 'This Is My House', artist: 'SIENNA SPIRO', genre: 'Pop', cover: '/covers/12-visitor.jpg', accent: '#7995ff', rgb: '121,149,255', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/59/d1/1a59d1a9-b3f4-eced-7123-243123411c9c/mzaf_12692764356363571469.plus.aac.p.m4a' },
  { id: 12, album: 'Big Mama', title: 'Business & Personal', artist: 'Latto', genre: 'Hip-Hop/Rap', cover: '/covers/13-big-mama.jpg', accent: '#ff815a', rgb: '255,129,90', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a4/0c/17/a40c17c4-3cce-63d0-8fef-d444ee6b36e8/mzaf_9372570659213093434.plus.aac.p.m4a' },
  { id: 13, album: 'MAID OF HONOUR', title: 'Hoe Phase', artist: 'Drake', genre: 'Hip-Hop/Rap', cover: '/covers/14-maid-honour.jpg', accent: '#f1b36c', rgb: '241,179,108', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/71/ab/fb71ab58-5268-8baf-f322-08b9b71c7ea2/mzaf_8986505924247142519.plus.aac.p.m4a' },
  { id: 14, album: 'KPop Demon Hunters', title: 'TAKEDOWN', artist: 'TWICE', genre: 'K-Pop', cover: '/covers/15-kpop-demon.jpg', accent: '#ff4fa6', rgb: '255,79,166', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/b4/69/cbb469fa-3cf8-2ab1-1cfa-03334179f1e9/mzaf_8961451398364908651.plus.aac.p.m4a' },
  { id: 15, album: 'BROWN (The Chocolate Edition)', title: 'Loose', artist: 'Chris Brown', genre: 'R&B/Soul', cover: '/covers/16-brown.jpg', accent: '#e89a5b', rgb: '232,154,91', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/27/9b/52279bee-7683-1025-fde2-d034968de069/mzaf_15747748208527473742.plus.aac.p.m4a' },
  { id: 16, album: 'and all pride aside', title: 'all fours', artist: 'kwn feat. DESTIN CONRAD', genre: 'R&B/Soul', cover: '/covers/17-pride-aside.jpg', accent: '#e86488', rgb: '232,100,136', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/50/ed/b050ede0-c249-d627-051b-1a97898ceb43/mzaf_6576934157672305188.plus.aac.p.m4a' },
  { id: 17, album: 'PROJECT X', title: 'MANNISH', artist: 'Key Glock', genre: 'Hip-Hop/Rap', cover: '/covers/18-project-x.jpg', accent: '#fdcd42', rgb: '253,205,66', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/23/ce/6123cee7-7fc8-6ab9-f212-d3b08cebc25e/mzaf_8397381352056448836.plus.aac.p.m4a' },
  { id: 18, album: 'KILL THE KING', title: "A KING'S THOUGHT", artist: 'T.I. & Heiress Harris', genre: 'Hip-Hop/Rap', cover: '/covers/19-kill-king.jpg', accent: '#e5ac67', rgb: '229,172,103', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/2c/6b/862c6bfe-472f-7cd4-c81c-eac8bb8e5be5/mzaf_2947551846814599150.plus.aac.p.m4a' },
  { id: 19, album: 'The Art of Loving', title: 'The Art of Loving', artist: 'Olivia Dean', genre: 'Pop', cover: '/covers/20-art-loving.jpg', accent: '#b88bff', rgb: '184,139,255', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/47/30/764730b9-d557-9461-6df5-a39a9fe82bf3/mzaf_17486685486372164821.plus.aac.p.m4a' },
  { id: 20, album: 'V8', title: 'Friend', artist: 'THE 8 & VERNON', genre: 'K-Pop', cover: '/covers/21-v8.jpg', accent: '#8ee8ff', rgb: '142,232,255', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6f/b8/44/6fb84456-54ec-cfee-547b-652109f6e835/mzaf_15246872730107055151.plus.aac.p.m4a' },
  { id: 21, album: '安泊猜想', title: '粗糙', artist: '许嵩', genre: 'Mandopop', cover: '/covers/22-anbo.jpg', accent: '#8fcfb2', rgb: '143,207,178', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/ee/28/3fee28e7-caa9-5df7-7acc-77e21b77fef4/mzaf_13520900451727556354.plus.aac.p.m4a' },
  { id: 22, album: 'Lover', title: 'I Forgot That You Existed', artist: 'Taylor Swift', genre: 'Pop', cover: '/covers/23-lover.jpg', accent: '#f6a6c5', rgb: '246,166,197', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/e2/97/9ce2976a-b1c8-aa80-3e94-f4562cbad53e/mzaf_11906958635430192793.plus.aac.p.m4a' },
  { id: 23, album: 'Ruby', title: 'Intro: JANE with FKJ', artist: 'JENNIE & FKJ', genre: 'Pop', cover: '/covers/24-ruby.jpg', accent: '#ec4f65', rgb: '236,79,101', preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a5/eb/fa/a5ebfa19-6417-d65c-14a7-74487c88a342/mzaf_7918904435465310237.plus.aac.p.m4a' },
];

function assetUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

const CONSTELLATION_SIZE = 23;

function createSeededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function wrapAngle(angle) {
  return ((angle + 180) % 360 + 360) % 360 - 180;
}

function angularDistance(a, b) {
  const elevationFactor = Math.cos(THREE.MathUtils.degToRad((a.elevation + b.elevation) * .5));
  const horizontal = wrapAngle(a.azimuth - b.azimuth) * elevationFactor;
  return Math.hypot(horizontal, a.elevation - b.elevation);
}

// Layout is random per song world but deterministic across revisits. Rejection
// sampling prevents overlaps and reserves the exact center for the reticle.
function createConstellationSlots(worldId) {
  const random = createSeededRandom((worldId + 1) * 0x9e3779b1);
  const slots = [];

  function addCluster(count, centerAzimuth, spreadAzimuth, spreadElevation, layers, isFront = false) {
    const clusterSlots = [];
    let attempts = 0;
    while (clusterSlots.length < count && attempts < 500) {
      attempts += 1;
      const candidate = {
        azimuth: wrapAngle(centerAzimuth + (random() - .5) * spreadAzimuth),
        elevation: (random() - .5) * spreadElevation + (random() - .5) * 5,
      };
      if (isFront && Math.hypot(candidate.azimuth, candidate.elevation) < 11) continue;
      const minimumDistance = attempts > 300 ? 13 : attempts > 180 ? 15 : 17;
      if (clusterSlots.some((slot) => angularDistance(slot, candidate) < minimumDistance)) continue;

      const layer = layers[clusterSlots.length];
      const depth = layer === 'primary' ? 0 : layer === 'secondary' ? 1 : 2;
      const scaleRange = layer === 'primary' ? [.86, 1.04] : layer === 'secondary' ? [.62, .78] : [.44, .6];
      clusterSlots.push({
        ...candidate,
        radius: 7 + depth * .8 + random() * (1 + depth * .35),
        scale: THREE.MathUtils.lerp(scaleRange[0], scaleRange[1], random()),
        tilt: (random() - .5) * 13,
        layer,
      });
    }
    slots.push(...clusterSlots);
  }

  addCluster(8, 0, 76, 60, ['primary', 'primary', 'secondary', 'secondary', 'secondary', 'distant', 'distant', 'distant'], true);
  addCluster(5, 92, 68, 64, ['primary', 'secondary', 'secondary', 'distant', 'distant']);
  addCluster(5, -92, 68, 64, ['primary', 'secondary', 'secondary', 'distant', 'distant']);
  addCluster(5, 180, 76, 66, ['secondary', 'secondary', 'distant', 'distant', 'distant']);
  return slots;
}

const canvas = document.querySelector('#world');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.autoClear = false;
renderer.setClearColor('#05020d', 1);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2('#090316', 0.035);
const camera = new THREE.PerspectiveCamera(66, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 0.01);

const root = new THREE.Group();
scene.add(root);
const cardLayer = new THREE.Group();
root.add(cardLayer);

const textureLoader = new THREE.TextureLoader();
const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const center = new THREE.Vector2(0, 0);
const cameraDirection = new THREE.Vector3();
const cardDirection = new THREE.Vector3();
const targetCardPosition = new THREE.Vector3();
const targetCardScale = new THREE.Vector3();
const cards = [];
const history = [];

const auroraScene = new THREE.Scene();
const auroraCamera = new THREE.Camera();
const auroraCurrentStops = [new THREE.Color(), new THREE.Color(), new THREE.Color()];
const auroraTargetStops = [new THREE.Color(), new THREE.Color(), new THREE.Color()];
const auroraUniforms = {
  uTime: { value: 0 },
  uAmplitude: { value: 1.05 },
  uColorStops: { value: auroraCurrentStops },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uBlend: { value: .48 },
};
const auroraMaterial = new THREE.ShaderMaterial({
  uniforms: auroraUniforms,
  transparent: true,
  depthTest: false,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;

    uniform float uTime;
    uniform float uAmplitude;
    uniform vec3 uColorStops[3];
    uniform vec2 uResolution;
    uniform float uBlend;
    varying vec2 vUv;

    vec3 permute(vec3 x) {
      return mod(((x * 34.0) + 1.0) * x, 289.0);
    }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec3 colorRamp(float factor) {
      vec3 first = mix(uColorStops[0], uColorStops[1], smoothstep(0.0, 0.55, factor));
      vec3 second = mix(uColorStops[1], uColorStops[2], smoothstep(0.45, 1.0, factor));
      return mix(first, second, smoothstep(0.36, 0.72, factor));
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / max(uResolution.y, 1.0);
      float t = uTime;
      float horizon = 0.54 + snoise(vec2(uv.x * 1.85 + t * 0.035, t * 0.12)) * 0.15 * uAmplitude;
      float curtain = smoothstep(0.48 * uBlend, 0.0, abs(uv.y - horizon));
      float lowerFade = smoothstep(0.04, 0.32, uv.y);
      float upperFade = 1.0 - smoothstep(0.88, 1.0, uv.y);
      float rays = snoise(vec2(uv.x * 9.0 * aspect + t * 0.10, uv.y * 2.2 - t * 0.04));
      rays = pow(max(rays * 0.5 + 0.5, 0.0), 2.25);
      float secondary = smoothstep(0.38, 0.0, abs(uv.y - horizon - 0.16)) * 0.22;
      float intensity = (curtain * (0.24 + rays * 0.62) + secondary) * lowerFade * upperFade;
      intensity *= 0.36;
      vec3 auroraColor = colorRamp(clamp(uv.x + snoise(vec2(uv.x * 1.4, t * 0.05)) * 0.08, 0.0, 1.0));
      vec2 centered = uv - 0.5;
      float vignette = 1.0 - smoothstep(0.56, 0.92, dot(centered, centered) * 1.65);
      vec3 color = auroraColor * intensity * vignette;
      gl_FragColor = vec4(color, intensity * 0.82 * vignette);
    }
  `,
});
auroraScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), auroraMaterial));

let currentSong = songs[0];
let hoveredCard = null;
let dwellStarted = 0;
let transitioning = false;
let entered = false;
let isPaused = false;
let yaw = 0;
let pitch = 0;
let targetYaw = 0;
let targetPitch = 0;
let pointerDown = false;
let lastPointer = { x: 0, y: 0 };
let deviceMotion = false;
let journeyDepth = 1;
let worldBuiltAt = performance.now();
let themeInitialized = false;

const ui = {
  entry: document.querySelector('#entry'),
  enterButton: document.querySelector('#enterButton'),
  reticle: document.querySelector('#reticle'),
  targetCopy: document.querySelector('#targetCopy'),
  targetTitle: document.querySelector('#targetTitle'),
  targetArtist: document.querySelector('#targetArtist'),
  nowCover: document.querySelector('#nowCover'),
  nowTitle: document.querySelector('#nowTitle'),
  nowArtist: document.querySelector('#nowArtist'),
  pauseButton: document.querySelector('#pauseButton'),
  backButton: document.querySelector('#backButton'),
  motionButton: document.querySelector('#motionButton'),
  journey: document.querySelector('#journey'),
  warp: document.querySelector('#warp'),
  transitionCopy: document.querySelector('#transitionCopy'),
  hint: document.querySelector('#hint'),
};

const audioA = new Audio();
const audioB = new Audio();
audioA.preload = audioB.preload = 'metadata';
audioA.crossOrigin = audioB.crossOrigin = 'anonymous';
let activeAudio = audioA;

const coverPaletteCache = new Map();
const paletteCanvas = document.createElement('canvas');
const paletteContext = paletteCanvas.getContext('2d', { willReadFrequently: true });
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > .5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h, s, l };
}

function hueDistance(a, b) {
  const d = Math.abs(a - b);
  return Math.min(d, 1 - d);
}

function fallbackAuroraStops(song) {
  const base = new THREE.Color(song.accent);
  return [
    base.clone().offsetHSL(-.10, .08, .08),
    base.clone().offsetHSL(.03, .14, .18),
    base.clone().offsetHSL(.16, .10, .04),
  ];
}

function polishAuroraColor(source, role) {
  const { h, s, l } = source;
  const targetS = role === 1 ? .78 : role === 0 ? .66 : .70;
  const targetL = role === 1 ? .66 : role === 0 ? .50 : .56;
  const polished = new THREE.Color();
  polished.setHSL(
    h,
    clamp(s * .62 + targetS * .38, .46, .88),
    clamp(l * .36 + targetL * .64, .40, .72)
  );
  return polished;
}

function selectAuroraSwatches(swatches, song) {
  if (!swatches.length) return fallbackAuroraStops(song);
  const primary = swatches[0];
  const secondary = swatches.find((item) => hueDistance(item.h, primary.h) > .08) || swatches[1] || {
    ...primary,
    h: (primary.h + .10) % 1,
    s: clamp(primary.s * 1.08, .35, .9),
    l: clamp(primary.l + .08, .2, .78),
  };
  const tertiary = swatches.find((item) => hueDistance(item.h, primary.h) > .18 && hueDistance(item.h, secondary.h) > .08) || swatches[2] || {
    ...primary,
    h: (primary.h + .82) % 1,
    s: clamp(primary.s * .95, .35, .88),
    l: clamp(primary.l - .02, .2, .72),
  };
  return [
    polishAuroraColor(secondary, 0),
    polishAuroraColor(primary, 1),
    polishAuroraColor(tertiary, 2),
  ];
}

function extractAuroraPaletteFromCover(song) {
  if (coverPaletteCache.has(song.cover)) return coverPaletteCache.get(song.cover);
  const promise = new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      try {
        const size = 56;
        paletteCanvas.width = size;
        paletteCanvas.height = size;
        paletteContext.clearRect(0, 0, size, size);
        paletteContext.drawImage(image, 0, 0, size, size);
        const pixels = paletteContext.getImageData(0, 0, size, size).data;
        const bins = Array.from({ length: 36 }, () => ({ r: 0, g: 0, b: 0, weight: 0, count: 0 }));
        for (let i = 0; i < pixels.length; i += 4) {
          const alpha = pixels[i + 3];
          if (alpha < 200) continue;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const hsl = rgbToHsl(r, g, b);
          if (hsl.l < .07 || hsl.l > .92 || hsl.s < .10) continue;
          const lightBalance = 1 - Math.min(1, Math.abs(hsl.l - .56) / .56);
          const chromaWeight = Math.pow(hsl.s, 1.35);
          const weight = chromaWeight * (.55 + lightBalance) * (hsl.l > .22 && hsl.l < .80 ? 1.25 : .75);
          const bin = bins[Math.floor(hsl.h * bins.length) % bins.length];
          bin.r += r * weight;
          bin.g += g * weight;
          bin.b += b * weight;
          bin.weight += weight;
          bin.count += 1;
        }
        const swatches = bins
          .filter((bin) => bin.weight > 0)
          .map((bin) => {
            const r = bin.r / bin.weight;
            const g = bin.g / bin.weight;
            const b = bin.b / bin.weight;
            const hsl = rgbToHsl(r, g, b);
            const lightBalance = 1 - Math.min(1, Math.abs(hsl.l - .58) / .58);
            return {
              ...hsl,
              score: Math.pow(bin.weight, .72) * (.4 + hsl.s * 1.55) * (.65 + lightBalance),
            };
          })
          .sort((a, b) => b.score - a.score);
        resolve(selectAuroraSwatches(swatches, song));
      } catch {
        resolve(fallbackAuroraStops(song));
      }
    };
    image.onerror = () => resolve(fallbackAuroraStops(song));
    image.src = assetUrl(song.cover);
  });
  coverPaletteCache.set(song.cover, promise);
  return promise;
}

function createGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(.16, 'rgba(190,130,255,.55)');
  gradient.addColorStop(.5, 'rgba(100,50,200,.15)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

function buildAtmosphere() {
  const starCount = window.innerWidth < 600 ? 900 : 1500;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const radius = 11 + Math.random() * 35;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi);
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const brightness = .45 + Math.random() * .55;
    colors.set([brightness * .78, brightness * .64, brightness], i * 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ size: .045, vertexColors: true, transparent: true, opacity: .8, sizeAttenuation: true }));
  points.name = 'stars';
  root.add(points);

  const glowMap = createGlowTexture();
  for (let i = 0; i < 10; i++) {
    const material = new THREE.SpriteMaterial({ map: glowMap, color: i % 2 ? '#7d39e6' : '#183d92', transparent: true, opacity: .11, blending: THREE.AdditiveBlending, depthWrite: false });
    const sprite = new THREE.Sprite(material);
    const angle = (i / 10) * Math.PI * 2;
    sprite.position.set(Math.sin(angle) * 14, (Math.random() - .5) * 8, Math.cos(angle) * 14);
    sprite.scale.setScalar(11 + Math.random() * 8);
    sprite.userData.phase = Math.random() * 6;
    sprite.name = 'nebula';
    root.add(sprite);
  }
}

function createCard(song, index, slot) {
  const group = new THREE.Group();
  const azimuth = THREE.MathUtils.degToRad(slot.azimuth);
  const elevation = THREE.MathUtils.degToRad(slot.elevation);
  group.position.set(
    Math.sin(azimuth) * Math.cos(elevation) * slot.radius,
    Math.sin(elevation) * slot.radius,
    -Math.cos(azimuth) * Math.cos(elevation) * slot.radius,
  );
  group.lookAt(0, 0, 0);
  group.userData.basePosition = group.position.clone();
  group.userData.phase = index * .72;
  group.userData.song = song;
  group.userData.baseScale = slot.scale;
  group.userData.layer = slot.layer;
  group.userData.isHovered = false;
  group.userData.baseTilt = THREE.MathUtils.degToRad(slot.tilt);

  const halo = new THREE.Mesh(
    new THREE.PlaneGeometry(2.34, 2.34),
    new THREE.MeshBasicMaterial({ color: song.accent, transparent: true, opacity: .09, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  halo.position.z = -.035;
  group.add(halo);

  const frame = new THREE.Mesh(
    new THREE.PlaneGeometry(2.06, 2.06),
    new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: .28 })
  );
  group.add(frame);

  const texture = textureLoader.load(assetUrl(song.cover));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;
  const cover = new THREE.Mesh(
    new THREE.PlaneGeometry(1.92, 1.92),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: .96 })
  );
  cover.position.z = .018;
  cover.userData.card = group;
  group.userData.cover = cover;
  group.userData.halo = halo;
  group.userData.baseOpacity = slot.layer === 'primary' ? .98 : slot.layer === 'secondary' ? .78 : .52;
  cover.material.opacity = group.userData.baseOpacity;
  group.add(cover);

  const orb = new THREE.Mesh(
    new THREE.RingGeometry(1.24, 1.255, 64),
    new THREE.MeshBasicMaterial({ color: song.accent, transparent: true, opacity: .28, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
  );
  orb.position.z = -.06;
  group.add(orb);

  group.scale.setScalar(.001);
  cardLayer.add(group);
  cards.push(group);
}

function getRelatedSongs(song) {
  const others = songs.filter((item) => item.id !== song.id);
  const byVariety = (a, b) => ((b.id * 7 + song.id * 3) % 17) - ((a.id * 7 + song.id * 3) % 17);
  const closeMatches = others.filter((item) => item.genre === song.genre).sort(byVariety);
  const discoveries = others.filter((item) => item.genre !== song.genre).sort(byVariety);
  return [...closeMatches.slice(0, 4), ...discoveries, ...closeMatches.slice(4)].slice(0, CONSTELLATION_SIZE);
}

function clearCards() {
  while (cardLayer.children.length) {
    const object = cardLayer.children.pop();
    object.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    });
  }
  cards.length = 0;
}

function buildWorld(song) {
  clearCards();
  worldBuiltAt = performance.now();
  const related = getRelatedSongs(song);
  const slots = createConstellationSlots(song.id);
  related.forEach((item, index) => createCard(item, index, slots[index]));
  hoveredCard = null;
  dwellStarted = 0;
  document.documentElement.style.setProperty('--dwell', 0);
  ui.targetCopy.classList.remove('visible');
}

function colorToRgbString(color) {
  return `${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)}`;
}

function applyAuroraStops(stops, immediate = false) {
  stops.forEach((color, index) => {
    auroraTargetStops[index].copy(color);
    if (immediate) auroraCurrentStops[index].copy(color);
  });
}

function syncSceneAccent(stops) {
  const accent = stops[1] || stops[0];
  document.documentElement.style.setProperty('--accent', `#${accent.getHexString()}`);
  document.documentElement.style.setProperty('--accent-rgb', colorToRgbString(accent));
  scene.fog.color.copy(accent).multiplyScalar(.085);
  renderer.setClearColor(accent.clone().multiplyScalar(.025), 1);
  root.children.filter((child) => child.name === 'nebula').forEach((sprite, index) => {
    sprite.material.color.copy(stops[index % stops.length]);
  });
}

function setAuroraPalette(song, immediate = false) {
  const fallbackStops = fallbackAuroraStops(song);
  applyAuroraStops(fallbackStops, immediate);
  syncSceneAccent(fallbackStops);
  extractAuroraPaletteFromCover(song).then((coverStops) => {
    if (currentSong.id !== song.id) return;
    applyAuroraStops(coverStops, false);
    syncSceneAccent(coverStops);
  });
}

function applyTheme(song) {
  document.documentElement.style.setProperty('--accent', song.accent);
  document.documentElement.style.setProperty('--accent-rgb', song.rgb);
  scene.fog.color.set(song.accent).multiplyScalar(.085);
  renderer.setClearColor(new THREE.Color(song.accent).multiplyScalar(.025), 1);
  setAuroraPalette(song, !themeInitialized);
  themeInitialized = true;
}

function updateNowPlaying(song) {
  ui.nowCover.src = assetUrl(song.cover);
  ui.nowTitle.textContent = song.title;
  ui.nowArtist.textContent = `${song.artist} · ${song.genre}`;
  ui.journey.textContent = `WORLD ${String(journeyDepth).padStart(2, '0')} · ${song.genre.toUpperCase()}`;
  ui.backButton.disabled = history.length === 0;
}

function playPreview(song, immediate = false) {
  const nextAudio = activeAudio === audioA ? audioB : audioA;
  nextAudio.src = song.preview;
  nextAudio.volume = immediate ? .72 : 0;
  nextAudio.currentTime = 0;
  nextAudio.play().catch(() => {});
  if (immediate) {
    activeAudio.pause();
    activeAudio = nextAudio;
    return;
  }
  const oldAudio = activeAudio;
  const startedAt = performance.now();
  const fade = () => {
    const progress = Math.min(1, (performance.now() - startedAt) / 900);
    nextAudio.volume = progress * .72;
    oldAudio.volume = (1 - progress) * .72;
    if (progress < 1) requestAnimationFrame(fade);
    else {
      oldAudio.pause();
      activeAudio = nextAudio;
    }
  };
  fade();
}

function travelTo(song, fromHistory = false) {
  if (transitioning || song.id === currentSong.id) return;
  transitioning = true;
  if (!fromHistory) history.push(currentSong);
  ui.transitionCopy.querySelector('strong').textContent = song.title;
  ui.transitionCopy.classList.remove('visible');
  void ui.transitionCopy.offsetWidth;
  ui.transitionCopy.classList.add('visible');
  ui.warp.classList.remove('active');
  void ui.warp.offsetWidth;
  ui.warp.classList.add('active');
  cards.forEach((card, index) => {
    card.userData.departAt = performance.now() + index * 18;
    card.userData.departureScale = card.scale.x;
  });
  setTimeout(() => {
    currentSong = song;
    journeyDepth = Math.max(1, fromHistory ? journeyDepth - 1 : journeyDepth + 1);
    applyTheme(song);
    updateNowPlaying(song);
    buildWorld(song);
    playPreview(song);
  }, 650);
  setTimeout(() => {
    transitioning = false;
    ui.transitionCopy.classList.remove('visible');
  }, 1500);
}

function setHover(card, now) {
  if (card !== hoveredCard) {
    hoveredCard = card;
    dwellStarted = now;
    document.documentElement.style.setProperty('--dwell', 0);
  }
  cards.forEach((item) => {
    const active = item === hoveredCard;
    item.userData.isHovered = active;
    item.userData.halo.material.opacity = active ? .34 : .09;
  });
  if (!card) {
    ui.targetCopy.classList.remove('visible');
    ui.reticle.classList.remove('locked');
    return;
  }
  const song = card.userData.song;
  ui.targetTitle.textContent = song.title;
  ui.targetArtist.textContent = `${song.artist} · Hold to enter`;
  ui.targetCopy.classList.add('visible');
  ui.reticle.classList.add('locked');
  const progress = Math.min(1, (now - dwellStarted) / 1050);
  document.documentElement.style.setProperty('--dwell', progress.toFixed(3));
  if (progress >= 1) travelTo(song);
}

function updateInteraction(now) {
  if (!entered || transitioning) return;
  raycaster.setFromCamera(center, camera);
  const hits = raycaster.intersectObjects(cards.map((card) => card.userData.cover), false);
  setHover(hits.length ? hits[0].object.userData.card : null, now);
}

function updateCards(elapsed, now) {
  camera.getWorldDirection(cameraDirection);
  cards.forEach((card, index) => {
    if (card.userData.departAt) {
      const p = Math.min(1, (now - card.userData.departAt) / 440);
      card.scale.setScalar(Math.max(.001, card.userData.departureScale * (1 - p)));
      card.position.multiplyScalar(1 + .018 * p);
      return;
    }
    cardDirection.copy(card.userData.basePosition).normalize();
    const alignment = cameraDirection.dot(cardDirection);
    const viewFocus = THREE.MathUtils.clamp((alignment - .68) / .32, 0, 1);
    const reveal = THREE.MathUtils.clamp(((now - worldBuiltAt) / 1000) * 1.75 - index * .035, 0, 1);
    const focusScale = 1 + viewFocus * .22;
    const hoverScale = card.userData.isHovered ? 1.16 : 1;
    const scale = card.userData.baseScale * focusScale * hoverScale * Math.max(.001, reveal);
    targetCardScale.setScalar(scale);
    card.scale.lerp(targetCardScale, .09);

    targetCardPosition.copy(card.userData.basePosition).multiplyScalar(1 - viewFocus * .055);
    targetCardPosition.y += Math.sin(elapsed * .55 + card.userData.phase) * .13;
    card.position.lerp(targetCardPosition, .065);
    card.userData.cover.material.opacity = THREE.MathUtils.lerp(card.userData.baseOpacity, .98, viewFocus);
    card.rotation.z = card.userData.baseTilt + Math.sin(elapsed * .35 + card.userData.phase) * .025;
  });
}

function onPointerDown(event) {
  pointerDown = true;
  lastPointer = { x: event.clientX, y: event.clientY };
  canvas.setPointerCapture?.(event.pointerId);
}
function onPointerMove(event) {
  if (!pointerDown || deviceMotion) return;
  const dx = event.clientX - lastPointer.x;
  const dy = event.clientY - lastPointer.y;
  targetYaw -= dx * .0042;
  targetPitch -= dy * .0038;
  targetPitch = THREE.MathUtils.clamp(targetPitch, -1.18, 1.18);
  lastPointer = { x: event.clientX, y: event.clientY };
  dwellStarted = performance.now();
}
function onPointerUp() { pointerDown = false; }

function onDeviceOrientation(event) {
  if (!deviceMotion || event.alpha == null) return;
  const orientation = screen.orientation?.angle || window.orientation || 0;
  const alpha = THREE.MathUtils.degToRad(event.alpha);
  const beta = THREE.MathUtils.degToRad(event.beta || 0);
  targetYaw = -alpha + THREE.MathUtils.degToRad(orientation);
  targetPitch = THREE.MathUtils.clamp(beta - Math.PI / 2, -1.2, 1.2);
}

async function enableMotion() {
  try {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== 'granted') return;
    }
    deviceMotion = !deviceMotion;
    ui.motionButton.classList.toggle('active', deviceMotion);
    ui.motionButton.querySelector('.motion-label').textContent = deviceMotion ? 'ON' : 'MOTION';
  } catch {
    deviceMotion = false;
  }
}

ui.enterButton.addEventListener('click', async () => {
  entered = true;
  ui.entry.classList.add('hidden');
  buildWorld(currentSong);
  applyTheme(currentSong);
  updateNowPlaying(currentSong);
  playPreview(currentSong, true);
  setTimeout(() => ui.hint.style.opacity = '.12', 4500);
});

ui.motionButton.addEventListener('click', enableMotion);
ui.pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) activeAudio.pause(); else activeAudio.play().catch(() => {});
  ui.pauseButton.textContent = isPaused ? '▶' : 'Ⅱ';
  document.querySelector('.playing-bars').style.display = isPaused ? 'none' : 'flex';
});
ui.backButton.addEventListener('click', () => {
  const previous = history.pop();
  if (previous) travelTo(previous, true);
});

canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointercancel', onPointerUp);
window.addEventListener('deviceorientation', onDeviceOrientation, true);
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  auroraUniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
});
window.addEventListener('blur', () => { pointerDown = false; });

renderer.domElement.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  ui.hint.textContent = 'VISUAL SIGNAL LOST · RELOAD TO RECONNECT';
});

buildAtmosphere();
buildWorld(currentSong);
applyTheme(currentSong);

renderer.setAnimationLoop((time) => {
  const elapsed = clock.getElapsedTime();
  yaw += (targetYaw - yaw) * .075;
  pitch += (targetPitch - pitch) * .075;
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
  root.getObjectByName('stars').rotation.y = elapsed * .006;
  root.children.filter((child) => child.name === 'nebula').forEach((sprite) => {
    sprite.material.opacity = .08 + Math.sin(elapsed * .22 + sprite.userData.phase) * .025;
  });
  auroraUniforms.uTime.value = elapsed;
  auroraUniforms.uAmplitude.value = 1.0 + Math.sin(elapsed * .18) * .08;
  auroraCurrentStops.forEach((color, index) => color.lerp(auroraTargetStops[index], .035));
  updateCards(elapsed, time);
  updateInteraction(time);
  renderer.clear();
  renderer.render(auroraScene, auroraCamera);
  renderer.clearDepth();
  renderer.render(scene, camera);
});
