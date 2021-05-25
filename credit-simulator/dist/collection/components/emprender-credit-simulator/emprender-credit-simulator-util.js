/**
 * variables
 */
export const DEFAULT_SLIDER_VALUES = [
  {
    key: 'amount',
    label: '¿Cuánto dinero necesitas?',
    min: 100000,
    max: 750000,
    step: 1000,
    labelType: 'currency',
    value: 380000
  },
  {
    key: 'days',
    label: '¿Cuándo podrías pagarlo?',
    min: 5,
    max: 150,
    step: 1,
    labelType: 'day',
    value: 100
  }
];
export const DEFAULT_CURRENCY_VALUES = [
  {
    key: 'amount',
    label: 'Monto solicitado:',
    value: 380000
  },
  {
    key: 'interest',
    label: 'Intereses',
    subLabel: "25% EA",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    value: 6174
  },
  {
    key: 'aval',
    label: 'Aval',
    subLabel: "opcional",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    value: 60594,
    space: true
  },
  {
    key: 'platform',
    label: 'Plataforma',
    subLabel: "opcional",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    value: 112500
  },
  {
    key: 'discount',
    label: 'Descuento',
    subLabel: "por inclusión financiera",
    tooltip: "El interés corriente aplicado a tu crédito es del 25%EA (Efectivo anual) sobre el capital adeudado. Esta tasa es inferior a la tasa de usura establecida por las autoridades nacionales Mayo/2021: 25.83%. Este interés se calcula diariamente por el plazo que escojas para pagar tu crédito.",
    value: -80000
  },
  {
    key: 'taxes',
    label: 'IVA',
    subLabel: "19%",
    value: 6175,
    space: true
  },
  {
    key: 'total',
    label: 'Total',
    value: 485443
  }
];
