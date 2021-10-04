import { g as getRenderingRef, f as forceUpdate } from './index-cb4f5f75.js';
import { g as getData, s as setData } from './helper-4359d01c.js';

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

function getInformacionPersonal(data) {
  return {
    primerNombre: data['firstName'],
    segundoNombre: data['middleName'],
    primerApellido: data['surName'],
    segundoApellido: data['secondSurName'],
    tipoDocumento: data['documentType'],
    documento: data['documentNumber'],
    fechaExpedicion: data['expeditionDate'],
    fechaNacimiento: data['birthDate'],
    nacionalidad: data['nationality'],
    departamentoNacimiento: data['departmentOfBirth'],
    ciudadNacimiento: data['cityOfBirth'],
    departamentoExpedicion: data['expeditionDepartment'],
    municipioExpedicion: data['expeditionCity'],
    telefono: data['mobilePhone'],
    celular: data['phone'],
    correo: data['email'],
    genero: data['gender'],
  };
}
function getInfoSocioDemografica(data) {
  var _a, _b;
  return {
    nivelAcademico: data['academicLevel'],
    numHijos: data['childrenNumber'],
    personasACargo: data['dependents'],
    estadoCivil: data['civilState'],
    departamentoResidencia: data['departmentOfResidence'],
    municipioRecidencia: data['cityOfResidence'],
    direccion: data['address'],
    torre_Apt: data['place'],
    estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    tipoVivienda: data['dwellingType'],
    arriendo: (_b = parseFloat(data['rent'])) !== null && _b !== void 0 ? _b : 0,
    tiempo: data['residenceTime'],
    ocupacion: data['employment'],
  };
}
function getInfoLaboral(data) {
  return {
    nombreEmpresa: data['companyName'],
    cargo: data['position'],
    esPublica: data['companyType'],
    antiguedad: data['companySeniority'],
    tipoontrato: data['contractType'],
    actividad: data['companyActivity'],
    destinoPrestamo: data['creditDestination'],
    telefono: data['companyPhone'],
    otroNumero: data['otherPhone'],
    extencion: data['companyPhoneExtension'],
  };
}
function getInfoEconomica(data) {
  return {
    ingresosSalario: parseFloat(data['salaryIncome']),
    ingresosOtros: data['otherIncomes'] === '' || data['otherIncomes'] === null ? 0 : parseFloat(data['otherIncomes']),
    ingresosSalarioVariable: parseFloat(data['variableSalaryIncome']),
    descripcionIngresos: data['otherIncomesDescription'],
    egresos: parseFloat(data['personalExpenses']),
    arriendo: parseFloat(data['rentExpenses']),
    egresosDeudas: parseFloat(data['debtExpenses']),
    otrosEgresos: data['otherExpenses'] === '' || data['otherExpenses'] === null ? 0 : parseFloat(data['otherExpenses']),
    descripcionEgresos: data['otherExpensesDescription'],
    activos: parseFloat(data['totalAssets']),
    pasivos: parseFloat(data['totalLiabilities']),
    totalIngresos: parseFloat(data['totalIncomes']),
    totalGastos: parseFloat(data['totalExpenses']),
  };
}
function getCompanyInformation(data) {
  var _a, _b;
  return {
    nombreCompania: data['companyName'],
    Direccion: data['companyLocation'],
    Barrio: data['address'],
    DepartamentoResidencia: data['place'],
    CiudadResidencia: data['departmentOfResidence'],
    cityOfResidence: data['cityOfResidence'],
    Estrato: (_a = data['stratus']) !== null && _a !== void 0 ? _a : 0,
    TipoVivienda: data['dwellingType'],
    Renta: (_b = parseFloat(data['rent'])) !== null && _b !== void 0 ? _b : 0,
    TipoCompania: data['companyType'],
    Nit: data['nit'],
    FechaExposito: data['foundatingDate'],
    ActividadCompania: data['companyActivity'],
    Punto: data['point'],
    TiendaOnline: data['onlineShop'],
    PorcentajeVentas: data['salePercentage'],
    Empleado: data['employees'],
    Destino: data['destiny'],
    OtroDestino: data['otherDestiny'],
  };
}
function getReferencias(data) {
  return {
    nombreContactoFamiliar: data['familyContactName'],
    celularContactoFamiliar: data['familyContactPhone'],
    relacionContactoFamiliar: data['familyContactRelationship'],
    nombreContactoAmigo: data['friendContactName'],
    celularContactoAmigo: data['friendContactPhone'],
    relacionContactoAmigo: data['friendContactRelationship']
  };
}
function getJsonModelData(stateData, flowType) {
  let informacionPersonal = getInformacionPersonal(stateData['personalInformation']);
  let referencias = getReferencias(stateData['references']);
  let infoEconomica = getInfoEconomica(stateData['financialInformation']);
  let data;
  if (flowType === 'employee') {
    let infoSocioDemografica = getInfoSocioDemografica(stateData['personalInformation2']);
    let infoLaboral = getInfoLaboral(stateData['workingInformation']);
    data = Object.assign(Object.assign({}, informacionPersonal), { referencias, infoEconomica, infoSocioDemografica, infoLaboral });
  }
  else {
    let informacionCompania = getCompanyInformation(stateData['companyInformation']);
    data = Object.assign(Object.assign({}, informacionPersonal), { referencias, infoEconomica, informacionCompania });
  }
  console.log(data);
  var myHeaders = new Headers();
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('GET', 'POST');
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(data);
  // console.log(raw)
  fetch('https://credito.muii.com.co/api/DataManager/', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then(data => console.log(data));
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
function sendFetch(flowType) {
  getJsonModelData(state.currentUserInformation, flowType);
}

export { setUserInformation as a, sendFetch as b, loadDefaultData as l, state as s };