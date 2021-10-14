import { creditInformation } from './userCreditInformation';
export const requestPayment = async () => {
  let response = await authBusinessLogin();
  if (response !== '{}') {
    const { token, processingUrl, config, paymentData } = response;
    const red = 'https://credito.muii.com.co/zona-privada';
    const orderNumber = Math.floor((Math.random() * (1000000 - 10000)) + 10000);
    const urlPago = `${processingUrl}?metodo_pago=${config.paymentMethod}&token=${token}&nit_comercio=800114798&valor=200000&iva=${paymentData.iva}&moneda=${paymentData.currency}&numero_orden=${orderNumber}&url_retorno_comercio=${red}&url_notificacion_resultado=${red}`;
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
    let result = await fetch('https://localhost:44339/Payment', {
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
