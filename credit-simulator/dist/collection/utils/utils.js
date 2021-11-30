export function formatNumber(num, signSpace = false) {
  return `$${signSpace ? ' ' : ''}${num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
}
export function capitalize(s) {
  if (typeof s !== 'string')
    return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export function loadScript(url, id, type) {
  return new Promise(resolve => {
    document.body.appendChild(Object.assign(document.createElement('script'), {
      type: type,
      async: true,
      defer: true,
      id: id,
      src: url,
      onload: resolve
    }));
  });
}
export function loadCSS(url) {
  return new Promise(resolve => {
    const links = document.getElementsByTagName('link');
    const exist = Array.from(links).some(_link => _link.href === url);
    if (!exist) {
      const link = document.createElement('link');
      link.onload = resolve;
      link.href = url;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    else {
      resolve(true);
    }
  });
}
export function loadComponentCSS(host, url, shadow = true) {
  return new Promise(resolve => {
    const links = document.getElementsByTagName('link');
    const exist = Array.from(links).some(_link => _link.href === url);
    if (!exist) {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      shadow ? host.shadowRoot.insertBefore(link, host.shadowRoot.firstChild) : host.insertBefore(link, host.firstChild);
    }
    resolve();
  });
}
