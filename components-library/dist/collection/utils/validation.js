export const expresiones = {
  alfanumerico: /^[a-zA-Z0-9\_\-\#\s\.\,\a-zA-ZÀ-ÿ]{1,150}$/,
  alfanumericoOpcional: /^[a-zA-Z0-9\_\-\#\s\.\a-zA-ZÀ-ÿ]{0,50}$/,
  texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  textoOpcional: /^[a-zA-ZÀ-ÿ\s]{0,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  numerico: /^\d{1,14}$/,
  numericoOpcional: /^\d{0,14}$/,
  numericoSimbolo: /^[\d\>\<\-]{1,14}$/,
  celular: /^\d{6,10}$/,
  celularOpcional: /^(\d{7,10})*$/,
  arriendo: /^[\d\.]{5,}$/
};
