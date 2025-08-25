import { IBasePerTenantAndOrganizationEntityModel } from './base-entity.model';
import { IEquipmentSharing } from './equipment-sharing.model';
export interface IEquipmentSharingPolicy extends IBasePerTenantAndOrganizationEntityModel {
    name: string;
    description: string;
    equipmentSharings?: IEquipmentSharing[];
}
export interface IEquipmentSharingPolicyFindInput extends IBasePerTenantAndOrganizationEntityModel {
    name?: string;
    description?: string;
}
//# sourceMappingURL=equipment-sharing-policy.model.d.ts.map