export function getCreditConfigurationsService() {
  const url = 'https://run.mocky.io/v3/a7659037-7ee8-4e2f-9b7c-65331fdd9a28';
  return fetch(url).then(result => result.json());
}
