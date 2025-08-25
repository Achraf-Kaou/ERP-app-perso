import { IBasePerTenantAndOrganizationEntityModel } from './base-entity.model';
export interface IApprovalPolicy extends IBasePerTenantAndOrganizationEntityModel {
    name: string;
    description: string;
    approvalType: string;
}
export interface IApprovalPolicyFindInput extends IBasePerTenantAndOrganizationEntityModel {
    name?: string;
    description?: string;
    approvalType?: string;
}
export interface IApprovalPolicyCreateInput extends IApprovalPolicyFindInput {
    name?: string;
}
export interface IApprovalPolicyUpdateInput extends IApprovalPolicyCreateInput {
    id?: string;
}
export declare enum ApprovalPolicyTypesEnum {
    TIME_OFF = 1,
    EQUIPMENT_SHARING = 2,
    BUSINESS_TRIP = 3
}
export declare enum ApprovalPolicyTypesStringEnum {
    TIME_OFF = "TIME_OFF",
    EQUIPMENT_SHARING = "EQUIPMENT_SHARING",
    BUSINESS_TRIP = "BUSINESS_TRIP"
}
//# sourceMappingURL=approval-policy.model.d.ts.map