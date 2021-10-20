import { creditInformation } from './userCreditInformation';
export const requestPayment = async () => {
  let response = await authBusinessLogin();
  console.log(response);
  if (response !== '{}') {
    const { reference, token, processingUrl, config, paymentData } = response;
    const urlPago = `${processingUrl}?metodo_pago=${config.paymentMethod}&token=${token}&nit_comercio=800114798&valor=${paymentData.amount}&iva=${paymentData.iva}&moneda=${paymentData.currency}&numero_orden=${reference}&url_retorno_comercio=${config.commerceReturnUrl}&url_notificacion_resultado=${config.resultNotificationUrl}`;
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'POST';
    form.action = urlPago;
    form.submit();
  }
};
export const authBusinessLogin = async () => {
  try {
    let error = {};
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');
    myHeaders.append('GET', 'POST');
    myHeaders.append('Content-Type', 'application/json');
    const raw = await creditInformation();
    let result = await fetch('https://credito.muii.com.co/api/Payment/', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      mode: 'cors',
      redirect: 'follow',
    });
    const response = await result.json();
    if (result.status === 200) {
      return response;
    }
    if (result.status === 400) {
      if (response.Status === 5) {
        console.log('NOT FOUND');
        return '{}';
      }
      if (response.Status === 6) {
        console.log('NOT CLOSE');
        return '{}';
      }
    }
    return error;
  }
  catch (error) {
    console.log('ERROR=>', error);
  }
};
