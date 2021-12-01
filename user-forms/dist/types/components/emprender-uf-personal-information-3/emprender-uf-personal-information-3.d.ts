import { EventEmitter } from '../../stencil-public-runtime';
import { PersonalInformation, PersonalInformation2, BankInformation } from '../../module/models';
export declare class EmprenderUfPersonalInformation3 {
  model: PersonalInformation;
  model2: PersonalInformation2;
  model3: BankInformation;
  requiredData: string;
  adminZone: boolean;
  departments: {
    id: number;
    departamento: string;
    ciudades: string[];
  }[];
  infoSaved: EventEmitter<PersonalInformation>;
  upgradeInfo: EventEmitter<[PersonalInformation, PersonalInformation2, BankInformation, string]>;
  _setModel(field: string, value: string): void;
  _setModel2(field: string, value: string): void;
  _setModel3(field: string, value: string): void;
  _getSelectDepartmentOptions(): {
    id: string;
    name: string;
  }[];
  _getSelectCitiesOptions(field: string): {
    id: string;
    name: string;
  }[];
  _selectDropdownOption(field: string, value: string, clearField: string): void;
  _checkSubmitInfo(): void;
  _getTitle(): any;
  render(): any;
}
