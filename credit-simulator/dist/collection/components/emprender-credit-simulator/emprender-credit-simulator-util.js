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
      return `${value} DIAS`;
      // if (value <= TERM_MODULE) {
      //   return `${value} DIAS`;
      // } else {
      //   const terms = Math.ceil(value / TERM_MODULE);
      //   return `${terms} CUOTA${terms > 1 ? 'S' : ''}`;
      // }
    }
  }
];
export const DEFAULT_CURRENCY_VALUES = [
  {
    key: 'firstCapital',
    label: (config) => config === 'monthly' ? 'Capital 1a. cuota:' : 'Monto solicitado:',
    tooltip: "Si tomas un crédito a una cuota corresponde al valor de tu desembolso; si tu crédito es a dos cuotas o más, corresponde al valor que abonarás a tu préstamo al pagar la primera cuota;"
  },
  {
    key: 'interest',
    label: 'Intereses',
    subLabel: (credit) => `${credit.creditAnualEffectiverate}% EA`,
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'lifeInsurance',
    label: 'Seguro:',
    tooltip: "Valor fijo que se aplica como factor por millón sobre el monto desembolsado y se distribuye uniformemente en cada cuota según el plazo del crédito.",
  },
  {
    key: 'guarantee',
    label: 'Aval',
    subLabel: "opcional",
    tooltip: "Porcentaje fijo que se aplica sobre el monto desembolsado distribuído uniformemente en cada cuota según el plazo del crédito, que varía según el tipo de crédito y el plazo.",
    space: true
  },
  {
    key: 'admin',
    label: 'Administración:',
    tooltip: "Valor fijo distribuído uniformemente en cada cuota según el plazo del crédito, que varía según el tipo de crédito y el plazo.",
  },
  {
    key: 'platform',
    label: 'Plataforma',
    subLabel: "opcional",
    tooltip: "Valor fijo cobrado mensualmente en cada cuota que varía según el tipo de crédito y el plazo. Para créditos con plazo < 1 mes se cobra en función del número de días y para créditos con plazos >= 1 se cobra un valor mensual.",
  },
  {
    key: 'discount',
    label: 'Descuento',
    subLabel: "por inclusión financiera",
    tooltip: "Descuento por inclusión financiera",
  },
  {
    key: 'taxes',
    label: 'IVA',
    subLabel: "19%",
    space: true,
    tooltip: "Corresponde al impuesto que por ley debes pagar por el uso de nuestra plataforma y la administración de tu crédito"
  },
  // {
  //   key: 'total',
  //   label: 'Total',
  // }
];
export const CREDIT_DATA = [
  {
    key: 'interest',
    label: 'Intereses',
    subLabel: (credit) => `${credit.creditAnualEffectiverate}% EA`,
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
  },
  {
    key: 'guarantee',
    label: 'Aval',
    subLabel: "opcional",
    space: true
  },
  {
    key: 'platform',
    label: 'Plataforma',
    subLabel: "opcional",
  },
  {
    key: 'discount',
    label: 'Descuento',
    subLabel: "por inclusión financiera",
  },
  {
    key: 'taxes',
    label: 'IVA',
    subLabel: "19%",
    space: true,
  },
];
