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
export function appendComponentStyles(host, urls, shadow = true, loadGlobal = false) {
  return new Promise(resolve => {
    urls.forEach(async (url) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      shadow ? host.shadowRoot.appendChild(link) : host.appendChild(link);
      if (loadGlobal)
        await loadCSS(url);
    });
    resolve();
  });
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
