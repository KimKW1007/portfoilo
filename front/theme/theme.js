const fontSizes = {
  fz12: '12px',
  fz14: '14px',
  fz16: '16px',
  fz18: '18px',
  fz20: '20px',
  fz34: '34px',
  fz40: '40px',
  fz80: '80px'
};

const paddings = {
  p5: '5px',
  p12: '12px',
  p18: '18px',
  p24: '24px',
  p30: '30px',
  p36: '36px',
  p50: '50px',
  p90: '90px',
  p120: '120px'
};

const margins = {
  m5: '5px',
  m12: '12px',
  m18: '18px',
  m24: '24px',
  m30: '30px',
  m36: '36px',
  m50: '50px',
  m90: '90px',
  m120: '120px'
};

const colors = {
  textColor: '#232323',
  bgColor: '#F0EDE8',
  GreetingColor: 'rgba(41, 41, 41, 0.4)',
  white: '#ffffff',
  black: '#000000',
  gray : "#2c3e50",
  lineColor : "#ff8623",
  linkBtnColor1:"#FF5E7D",
  linkBtnColor2:"#007294",
};

const deviceSizes = {
  d350: '350px',
  d375: '375px',
  d480: '480px',
  d560: '560px',
  d603: '603px',
  d615: '615px',
  d650: '650px',
  d660: '660px',
  d707: '707px',
  d722: '722px',
  d768: '768px',
  d800: '800px',
  d860: '860px',
  d910: '910px',
  d1024: '1024px',
  d1064: '1064px',
  d1228: '1228px',
  d1280: '1280px',
  d1300: '1300px',
};

const device = {
  d350: `(max-width: ${deviceSizes.d350})`,
  d375: `(max-width: ${deviceSizes.d375})`,
  d480: `(max-width: ${deviceSizes.d480})`,
  d560: `(max-width: ${deviceSizes.d560})`,
  d603: `(max-width: ${deviceSizes.d603})`,
  d615: `(max-width: ${deviceSizes.d615})`,
  d650: `(max-width: ${deviceSizes.d650})`,
  d660: `(max-width: ${deviceSizes.d660})`,
  d707: `(max-width: ${deviceSizes.d707})`,
  d722: `(max-width: ${deviceSizes.d722})`,
  d768: `(max-width: ${deviceSizes.d768})`,
  d800: `(max-width: ${deviceSizes.d800})`,
  d860: `(max-width: ${deviceSizes.d860})`,
  d910: `(max-width: ${deviceSizes.d910})`,
  d1024: `(max-width: ${deviceSizes.d1024})`,
  d1064: `(max-width: ${deviceSizes.d1064})`,
  d1228: `(max-width: ${deviceSizes.d1228})`,
  d1280: `(max-width: ${deviceSizes.d1280})`,
  d1300: `(max-width: ${deviceSizes.d1300})`,
};

export const lightTheme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins
};
