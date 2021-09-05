import { EventEmitter } from '../../stencil-public-runtime';
import { PersonalInformation2 } from '../../module/models';
export declare class EmprenderUfPersonalInformation2 {
  model: PersonalInformation2;
  departments: {
    id: number;
    departamento: string;
    ciudades: string[];
  }[];
  requiredData: string;
  infoSaved: EventEmitter<PersonalInformation2>;
  back: EventEmitter<PersonalInformation2>;
  _setModel(field: string, value: string): void;
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
  render(): any;
}
