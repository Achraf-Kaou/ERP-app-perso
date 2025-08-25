import { IBasePerTenantEntityModel } from "./base-entity.model";
export interface IImportRecord extends IBasePerTenantEntityModel {
    entityType?: string;
    sourceId?: string;
    destinationId?: string;
    importDate?: Date;
    wasCreated?: boolean;
}
export interface IImportRecordFind extends IBasePerTenantEntityModel {
    entityType?: string;
    sourceId?: string;
    destinationId?: string;
}
export interface IImportHistory extends IBasePerTenantEntityModel {
    file: string;
    path: string;
    size: number;
    status: ImportStatusEnum;
    importDate?: Date;
    fullUrl?: string;
}
export interface IEntityModel {
    name: string;
    value: string;
    checked: boolean;
    isGroup: boolean;
    entities: IEntityModel[];
}
export declare enum ImportTypeEnum {
    MERGE = "merge",
    CLEAN = "clean"
}
export declare enum ImportStatusEnum {
    SUCCESS = "Success",
    FAILED = "Failed",
    CANCELLED = "Cancelled",
    IN_PROGRESS = "In Progress"
}
//# sourceMappingURL=import-export.model.d.ts.map