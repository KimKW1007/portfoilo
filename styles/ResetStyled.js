import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  samp,
  small,
  strong,
  sub,
  sup,
  var,
  a,
  b,
  button,
  i,
  input,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  textarea,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing:border-box;
  }

  ::selection{
    background: #c9c9c9;
    color: #212121;
  }

  html{
    overflow-y: scroll;
  }

  html,
  body,
  #__next{
    width: 100%;
    height: 100%;
    min-width:350px;
    position:relative;
  }

  body{
      font: normal 14px/1 'Noto Sans KR', sans-serif;;
      background: ${({theme})=> theme.colors.bgColor};
      color: ${({theme})=> theme.colors.textColor};
  }

  a{
    text-decoration: none;
    color: ${({theme})=> theme.colors.textColor};
  }

  ul,li,ol{
    list-style: none;
  }

  i,em,address{
    font-style: normal;
  }

  button{
    cursor: pointer;
  }

  main,header,footer,section,nav,article{
    display: block;
  }

  .blind{
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0,0,0,0);
    overflow: hidden;
  }

  .hide{
    display: none;
  }
  .hidden{
    overflow: hidden;
  }
`;
