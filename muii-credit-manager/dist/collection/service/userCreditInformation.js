export const creditInformation = async () => {
  //Hacemos un fetch con toda  la informaicion de creditos activos y no activos del usuario
  //creas el session storage y de ahi se alimenta los otros metodos, para no estar haciendo fetch a cada rado
  //por ahora usamos datos al azar
  var raw = JSON.stringify({
    documentId: "1001936686",
    documentType: "1",
    creditNumber: "string",
    paymentType: 0,
    billingInfo: {
      userName: "string",
      userEmail: "string",
      userDocumentType: "string",
      userDocument: "string",
      userAddress: "string",
      userDispatchAddress: "string",
      userBillingCity: "string",
      userDepartment: "string",
      userBillingCountry: "string",
      userZipCode: "string",
      userPhoneNumber: "string",
    },
  });
  return raw;
};
