const e={alfanumerico:/^[a-zA-Z0-9\_\-\#\s\.]{1,50}$/,alfanumericoOpcional:/^[a-zA-Z0-9\_\-\#\s\.]{0,50}$/,texto:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,textoOpcional:/^[a-zA-ZÀ-ÿ\s]{0,40}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,numerico:/^\d{1,14}$/,numericoOpcional:/^[\d\.]{0,14}$/,numericoSimbolo:/^[\d\>\<\-]{1,14}$/,celular:/^\d{6,10}$/,arriendo:/^[\d\.]{5,}$/},o={firstName:"texto",middleName:"textoOpcional",surName:"texto",secondSurName:"texto",documentType:"alfanumerico",documentNumber:"numerico",expeditionDate:"alfanumerico",expeditionDepartment:"texto",expeditionCity:"texto",mobilePhone:"celular",phone:"celular",email:"correo",birthDate:"alfanumerico",nationality:"texto",cityOfBirth:"texto",departmentOfBirth:"texto",gender:"texto"},n={academicLevel:"alfanumerico",childrenNumber:"numericoSimbolo",dependents:"numericoSimbolo",civilState:"alfanumerico",cityOfResidence:"texto",departmentOfResidence:"texto",address:"alfanumerico",place:"alfanumericoOpcional",stratus:"numerico",dwellingType:"texto",rent:"arriendo",residenceTime:"numericoSimbolo",employment:"texto"},t={salaryIncome:"numerico",variableSalaryIncome:"numerico",otherIncomes:"numericoOpcional",otherIncomesDescription:"textoOpcional",totalIncomes:"numerico",personalExpenses:"numerico",rentExpenses:"numerico",debtExpenses:"numerico",otherExpenses:"numericoOpcional",otherExpensesDescription:"textoOpcional",totalExpenses:"numerico",totalAssets:"numerico",totalLiabilities:"numerico"},a={familyContactName:"texto",familyContactPhone:"celular",familyContactRelationship:"texto",friendContactName:"texto",friendContactPhone:"celular",friendContactRelationship:"texto"},i={companyName:"alfanumerico",position:"texto",companyType:"texto",companySeniority:"numericoSimbolo",contractType:"alfanumerico",companyActivity:"alfanumerico",creditDestination:"alfanumerico",companyPhone:"celular",companyPhoneExtension:"numericoOpcional",otherPhone:"numericoOpcional"},c={companyName:"alfanumerico",companyLocation:"texto",address:"alfanumerico",place:"alfanumericoOpcional",departmentOfResidence:"texto",cityOfResidence:"texto",stratus:"numerico",dwellingType:"texto",rent:"arriendo",companyType:"alfanumerico",nit:"numerico",foundatingDate:"alfanumerico",companyActivity:"alfanumerico",point:"texto",onlineShop:"texto",salePercentage:"numericoSimbolo",employees:"alfanumerico",destiny:"alfanumerico",otherDestiny:"alfanumericoOpcional"},r={firstName:"texto",middleName:"textoOpcional",surName:"texto",secondSurName:"texto",mobilePhone:"celular",email:"correo",academicLevel:"alfanumerico",childrenNumber:"numericoSimbolo",dependents:"numericoSimbolo",civilState:"alfanumerico",cityOfResidence:"texto",departmentOfResidence:"texto",address:"alfanumerico",place:"alfanumericoOpcional",stratus:"numerico",dwellingType:"texto"},m={companyName:"alfanumerico",companyLocation:"texto",address:"alfanumerico",place:"alfanumericoOpcional",departmentOfResidence:"texto",cityOfResidence:"texto",stratus:"numerico",dwellingType:"texto",companyActivity:"alfanumerico",point:"texto",onlineShop:"texto",employees:"alfanumerico"};function l(r){const m=[o,n,t,a,i,c].find((e=>JSON.stringify(Object.keys(r))===JSON.stringify(Object.keys(e))));return Object.entries(r).filter((o=>!1===e[m[`${o[0]}`]].test(null===o[1]?"":o[1]))).map((e=>e[0]))}function u(l,u){const s={personalInformation:o,personalInformation2:n,financialInformation:t,references:a,workingInformation:i,companyInformation:c,informationProfile:r,companyProfile:m}[u];return Object.entries(s).filter((o=>!1===e[s[`${o[0]}`]].test(l[`${o[0]}`]))).map((e=>e[0]))}export{u as a,l as c}