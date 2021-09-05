import { g as getRenderingRef, f as forceUpdate } from './index-d5c71035.js';

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
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
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

const TERM_MODULE = 30;
function PMT(interestRate, numberOfPeriods, loanAmount) {
  const interestFactor = Math.pow(1 + interestRate, numberOfPeriods);
  const pmt = loanAmount * ((interestRate * interestFactor) / (interestFactor - 1));
  return pmt;
}
function calculateValues(creditAmount, term, config) {
  const single = term <= TERM_MODULE;
  const calcTerm = single ? 1 : Math.ceil(term / TERM_MODULE);
  const creditInterest = (creditAmount * (config.MonthlyEffectiveRate / 100));
  const creditPMT = single ? creditInterest + creditAmount : PMT(config.MonthlyEffectiveRate / 100, calcTerm, creditAmount);
  const creditFirstCapital = single ? creditAmount : creditPMT - creditInterest;
  const creditGuarantee = (creditAmount * (config.GuarateeRate / 100)) / calcTerm;
  const creditLifeInsurance = single ? ((creditAmount / 1000000) * config.LifeInsuranceRate) / (30 / term) : ((creditAmount / 1000000) * config.LifeInsuranceRate) / calcTerm;
  const creditPlatform = single ? config.PlattformUseFee * term : config.PlattformUseFee;
  const creditAdmin = config.AdministrationFee / calcTerm;
  const creditTaxes = ((creditPlatform + config.AdministrationFee) * (config.TaxesRate / 100)) / calcTerm;
  const creditTotal = creditFirstCapital + creditGuarantee + creditLifeInsurance + creditInterest + creditPlatform + creditAdmin + creditTaxes;
  const creditAnualEffectiverate = config.AnualEffectiverate;
  const creditMonthlyEffectiverate = config.MonthlyEffectiveRate;
  return {
    creditInterest,
    creditPMT,
    creditFirstCapital,
    creditGuarantee,
    creditLifeInsurance,
    creditPlatform,
    creditAdmin,
    creditTaxes,
    creditTotal,
    creditAmount,
    creditAnualEffectiverate,
    creditMonthlyEffectiverate,
  };
  // }
}
function getAmountBoundaries(creditConfig) {
  const minAmount = Math.min(...creditConfig.Rates.map(rate => rate.MinAmount));
  const maxAmount = Math.max(...creditConfig.Rates.map(rate => rate.MaxAmount));
  return { minAmount, maxAmount };
}
function getTermBoundaries(amount, creditConfig) {
  const rateConfig = creditConfig.Rates.find(_rate => amount >= _rate.MinAmount && amount <= _rate.MaxAmount);
  const minTerm = rateConfig.MinTerm;
  const maxTerm = rateConfig.Maxterm;
  const typeOfTerm = minTerm < TERM_MODULE ? 'daily' : 'monthly';
  return { minTerm, maxTerm, typeOfTerm };
}

function getCreditConfigurationsService() {
  const url = 'https://run.mocky.io/v3/a7659037-7ee8-4e2f-9b7c-65331fdd9a28';
  return fetch(url).then(result => result.json());
}

const [storageConfigKey, storageCreditKey] = ["muiiCurentCofiguration", "muiiCurrentCreditInfo"];
const { state } = createStore({
  configurations: [],
  currentCofiguration: null,
  currentCreditInfo: {
    creditTypeId: 1,
    creditAmount: 1000000,
    creditTerm: 60,
    creditTotal: 0,
  }
});
async function getCreditConfigurations() {
  try {
    state.configurations = (await getCreditConfigurationsService()).CreditLines;
  }
  catch (e) {
    state.configurations = [];
  }
}
function loadDefaultData() {
  const [storageConfig, storageCredit] = [storageConfigKey, storageCreditKey].map(key => localStorage.getItem(key));
  state.currentCofiguration = storageConfig ? JSON.parse(storageConfig) : (state.configurations.length > 0 ? state.configurations[0] : null);
  if (storageCredit) {
    state.currentCreditInfo = JSON.parse(storageCredit);
  }
  else {
    setCreditInfo({});
  }
  ;
}
function setCreditInfo(newData) {
  const initialData = Object.assign(Object.assign({}, state.currentCreditInfo), newData);
  const { creditAmount, creditTerm } = initialData;
  const rateConfig = state.currentCofiguration.Rates.find(_rate => creditAmount >= _rate.MinAmount && creditAmount <= _rate.MaxAmount);
  state.currentCreditInfo = Object.assign(Object.assign({}, initialData), calculateValues(creditAmount, creditTerm, rateConfig));
  localStorage.setItem(storageCreditKey, JSON.stringify(state.currentCreditInfo));
}
function setCurrentConfiguration(configId) {
  state.currentCofiguration = state.configurations.find(_config => _config.id === configId);
  localStorage.setItem(storageConfigKey, JSON.stringify(state.currentCofiguration));
  setCreditInfo({
    creditTypeId: state.currentCofiguration.id,
    creditTypeLabel: state.currentCofiguration.Name,
    creditAmount: state.currentCofiguration.Rates[0].MinAmount,
    creditTerm: state.currentCofiguration.Rates[0].MinTerm
  });
}
function getConfigurationById(configId) {
  return state.configurations.find(_config => _config.id === configId);
}

export { setCreditInfo as a, setCurrentConfiguration as b, getConfigurationById as c, getAmountBoundaries as d, getTermBoundaries as e, getCreditConfigurations as g, loadDefaultData as l, state as s };
