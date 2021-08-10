function loadCSS(url, rel) {
  return new Promise(resolve => {
    const links = document.getElementsByTagName('link');
    const exist = Array.from(links).some(_link => _link.href === url);
    if (!exist) {
      const link = document.createElement('link');
      link.onload = resolve;
      link.href = url;
      link.rel = rel || 'stylesheet';
      document.head.appendChild(link);
    }
    else {
      resolve(true);
    }
  });
}
function loadScript(url, id, type) {
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

export { loadScript as a, loadCSS as l };
