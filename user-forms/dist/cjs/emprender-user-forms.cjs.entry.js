'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-203dfa5e.js');

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof index.getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = index.getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(index.forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(index.forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

const USER_FORM_DATA_KEY = "muiiUserFormInfo";
function getData() {
  const data = sessionStorage.getItem(USER_FORM_DATA_KEY);
  return JSON.parse(data);
}
function setData(newData) {
  const currentData = getData();
  const newUserForm = Object.assign(Object.assign({}, currentData), newData);
  sessionStorage.setItem(USER_FORM_DATA_KEY, JSON.stringify(newUserForm));
}

const { state } = createStore({
  currentUserInformation: {}
});
function loadDefaultData() {
  state.currentUserInformation = getData();
}
function setUserInformation(field, newData) {
  state.currentUserInformation = Object.assign(Object.assign({}, state.currentUserInformation), { [field]: newData });
  setData(state.currentUserInformation);
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

const emprenderUserFormsCss = ":host{display:block}";

const EMPLOYEE_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' }
];
const INDEPENDENT_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' }
];
const EmprenderUserForms = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.infoSaved = index.createEvent(this, "infoSaved", 7);
    this.flowType = 'employee';
    this.step = 0;
    this._getFlow = () => this.flowType === 'employee' ? EMPLOYEE_FLOW : INDEPENDENT_FLOW;
    this._getData = (field) => { var _a; return ((_a = state.currentUserInformation) !== null && _a !== void 0 ? _a : {})[field]; };
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    loadDefaultData();
  }
  _renderCurrentStep() {
    if (this.step >= 0 && this.step < this._getFlow().length) {
      const { tag, field } = this._getFlow()[this.step];
      const _tag = `emprender-uf-${tag}`;
      return index.h(_tag, { model: this._getData(field), onInfoSaved: (ev) => this.saveInfo(field, ev.detail) });
    }
  }
  saveInfo(field, data) {
    setUserInformation(field, data);
    this.step = this.step + 1;
    this.infoSaved.emit(state.currentUserInformation);
  }
  render() {
    return (index.h(index.Host, null, this._renderCurrentStep()));
  }
};
EmprenderUserForms.style = emprenderUserFormsCss;

exports.emprender_user_forms = EmprenderUserForms;
