import { r as registerInstance, h, e as Host, g as getElement } from './index-8e91f2a7.js';

function loadCSS(url) {
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
function appendComponentStyles(host, urls, shadow = true, loadGlobal = false) {
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

const emprenderClIconCss = "";

const EmprenderClIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.path = 0;
  }
  async componentWillLoad() {
    await appendComponentStyles(this.host, ["https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/common-assets/emprender-icons.css"], true, true);
  }
  renderPaths() {
    const paths = [];
    for (let index = 0; index < this.path; index++) {
      paths.push(h("span", { class: `path${index + 1}` }));
    }
    return paths;
  }
  render() {
    return (h(Host, null, h("span", { class: `icon-${this.icon}` }, this.renderPaths())));
  }
  get host() { return getElement(this); }
};
EmprenderClIcon.style = emprenderClIconCss;

export { EmprenderClIcon as emprender_cl_icon };
