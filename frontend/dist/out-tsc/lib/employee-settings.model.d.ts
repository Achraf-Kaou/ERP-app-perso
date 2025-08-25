import { IBasePerEntityType, IBasePerTenantAndOrganizationEntityModel, JsonData } from './base-entity.model';
import { IEmployee, IEmployeeEntityInput } from './employee.model';
export interface IEmployeeSetting extends IBasePerTenantAndOrganizationEntityModel, Required<IEmployeeEntityInput>, Partial<IBasePerEntityType> {
    settingType?: EmployeeSettingTypeEnum;
    data?: JsonData;
    defaultData?: JsonData;
}
export interface IEmployeeSettingCreateInput extends IEmployeeSetting {
}
export interface IEmployeeSettingUpdateInput extends Omit<IEmployeeSettingCreateInput, 'employee' | 'employeeId'> {
}
export interface IEmployeeSettingFindInput extends Partial<IBasePerEntityType> {
    employeeId?: string;
    employee?: IEmployee;
    settingType?: EmployeeSettingTypeEnum;
}
export declare enum EmployeeSettingTypeEnum {
    NORMAL = "Normal",
    TASK_VIEWS = "Task-View",
    CUSTOM = "Custom"
}
//# sourceMappingURL=employee-settings.model.d.ts.map