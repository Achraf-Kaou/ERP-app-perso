import { IBasePerEntityType, OmitFields } from './base-entity.model';
import { IEmployeeEntityInput } from './employee.model';
export interface IEntitySubscription extends IBasePerEntityType, IEmployeeEntityInput {
    type: EntitySubscriptionTypeEnum;
}
export declare enum EntitySubscriptionTypeEnum {
    MANUAL = "manual",
    MENTION = "mention",
    ASSIGNMENT = "assignment",
    COMMENT = "comment",
    CREATED_ENTITY = "created-entity"
}
export interface IEntitySubscriptionCreateInput extends OmitFields<IEntitySubscription> {
}
export interface IEntitySubscriptionFindInput extends Partial<IEntitySubscription> {
}
//# sourceMappingURL=entity-subscription.model.d.ts.map