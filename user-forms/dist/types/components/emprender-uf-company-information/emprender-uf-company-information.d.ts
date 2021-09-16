import { EventEmitter } from '../../stencil-public-runtime';
import { CompanyInformation } from '../../module/models';
export declare class EmprenderUfConpanyInformation {
  model: CompanyInformation;
  departments: {
    id: number;
    departamento: string;
    ciudades: string[];
  }[];
  requiredData: string;
  infoSaved: EventEmitter<CompanyInformation>;
  back: EventEmitter<CompanyInformation>;
  host: HTMLElement;
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
