import { EventEmitter } from '../../stencil-public-runtime';
import { PersonalInformation } from '../../module/models';
export declare class EmprenderUfPersonalInformation {
  model: PersonalInformation;
  departments: {
    id: number;
    departamento: string;
    ciudades: string[];
  }[];
  infoSaved: EventEmitter<PersonalInformation>;
  sendInfo: EventEmitter<PersonalInformation>;
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
  function(event: any): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  render(): any;
}
