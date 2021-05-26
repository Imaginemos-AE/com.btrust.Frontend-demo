import { formatNumber } from '../../utils/utils';
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
    step: 1,
    labelType: 'day',
    formatter: (value) => {
      const module = 30;
      if (value <= module) {
        return `${value} DIAS`;
      }
      else {
        const terms = Math.floor(value / module);
        return `${terms} CUOTA${terms > 1 ? 'S' : ''}`;
      }
    }
  }
];
export const DEFAULT_CURRENCY_VALUES = [
  {
    key: 'firstCapital',
    label: 'Monto solicitado:',
  },
  {
    key: 'interest',
    label: 'Intereses',
    subLabel: "25% EA",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  // {
  //   key: 'lifeInsurance',
  //   label: 'Seguro:',
  // },
  {
    key: 'guarantee',
    label: 'Aval',
    subLabel: "opcional",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    space: true
  },
  // {
  //   key: 'admin',
  //   label: 'Administración:',
  // },
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
  {
    key: 'total',
    label: 'Total',
  }
];
