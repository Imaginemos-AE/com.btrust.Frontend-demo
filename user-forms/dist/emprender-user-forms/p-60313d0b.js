const e={alfanumerico:/^[a-zA-Z0-9\_\-\#\s\.]{1,50}$/,alfanumericoOpcional:/^[a-zA-Z0-9\_\-\#\s\.]{0,50}$/,texto:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,textoOpcional:/^[a-zA-ZÀ-ÿ\s]{0,40}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,numerico:/^\d{1,14}$/,numericoOpcional:/^\d{0,14}$/,numericoSimbolo:/^[\d\>\<\-]{1,14}$/,celular:/^\d{10,10}$/,telefono:/^\d{7,7}$/},o={firstName:"texto",middleName:"textoOpcional",surName:"texto",secondSurName:"texto",documentType:"alfanumerico",documentNumber:"numerico",expeditionDate:"alfanumerico",expeditionDepartment:"texto",expeditionCity:"texto",mobilePhone:"celular",phone:"telefono",email:"correo",birthDate:"alfanumerico",nationality:"texto",cityOfBirth:"texto",departmentOfBirth:"texto",gender:"texto"},t={academicLevel:"alfanumerico",childrenNumber:"numericoSimbolo",dependents:"numericoSimbolo",civilState:"alfanumerico",cityOfResidence:"texto",departmentOfResidence:"texto",address:"alfanumerico",place:"alfanumericoOpcional",stratus:"numerico",dwellingType:"texto",rent:"numerico",residenceTime:"numericoSimbolo",employment:"texto"},n={salaryIncome:"numerico",variableSalaryIncome:"numerico",otherIncomes:"numericoOpcional",otherIncomesDescription:"textoOpcional",totalIncomes:"numerico",personalExpenses:"numerico",rentExpenses:"numerico",debtExpenses:"numerico",otherExpenses:"numericoOpcional",otherExpensesDescription:"textoOpcional",totalExpenses:"numerico",totalAssets:"numerico",totalLiabilities:"numerico"},i={familyContactName:"texto",familyContactPhone:"celular",familyContactRelationship:"texto",friendContactName:"texto",friendContactPhone:"celular",friendContactRelationship:"texto"},a={companyName:"alfanumerico",position:"texto",companyType:"texto",companySeniority:"alfanumerico",contractType:"alfanumerico",companyActivity:"alfanumerico",creditDestination:"alfanumerico",companyPhone:"celular",companyPhoneExtension:"numericoOpcional",otherPhone:"numericoOpcional"};function c(c){const r=[o,t,n,i,a].find((e=>JSON.stringify(Object.keys(c))===JSON.stringify(Object.keys(e))));return Object.entries(c).filter((o=>{const t="string"==typeof o[1]?o[1]:parseFloat(`${o[1]}`);return!1===e[r[`${o[0]}`]].test(t)})).map((e=>e[0]))}export{c}