import { formatNumber } from '../../utils/utils';
const TERM_MODULE = 30;
export function termFormatter(value) {
  const terms = Math.ceil(value / TERM_MODULE);
  return `${terms} cuota${terms > 1 ? 's' : ''}`;
}
/**
 * variables
 */
export const DEFAULT_SLIDER_VALUES = [
  {
    key: 'amount',
    label: '¿Cuánto dinero necesitas?',
    min: 100000,
    max: 750000,
    step: 10000,
    labelType: 'currency',
    formatter: (value) => `${formatNumber(value)}`
  },
  {
    key: 'term',
    label: '¿Cuándo podrías pagarlo?',
    min: 5,
    max: 150,
    step: (config) => config === 'monthly' ? TERM_MODULE : 1,
    labelType: 'day',
    formatter: (value) => {
      if (value <= TERM_MODULE) {
        return `${value} DIAS`;
      }
      else {
        const terms = Math.ceil(value / TERM_MODULE);
        return `${terms} CUOTA${terms > 1 ? 'S' : ''}`;
      }
    }
  }
];
export const DEFAULT_CURRENCY_VALUES = [
  {
    key: 'amount',
    label: (config) => config === 'monthly' ? 'Capital 1a. cuota:' : 'Monto solicitado:',
  },
  {
    key: 'interest',
    label: 'Intereses',
    subLabel: "25% EA",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'lifeInsurance',
    label: 'Seguro:',
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'guarantee',
    label: 'Aval',
    subLabel: "opcional",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    space: true
  },
  {
    key: 'admin',
    label: 'Administración:',
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'platform',
    label: 'Plataforma',
    subLabel: "opcional",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'discount',
    label: 'Descuento',
    subLabel: "por inclusión financiera",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'taxes',
    label: 'IVA',
    subLabel: "19%",
    space: true
  },
  // {
  //   key: 'total',
  //   label: 'Total',
  // }
];
