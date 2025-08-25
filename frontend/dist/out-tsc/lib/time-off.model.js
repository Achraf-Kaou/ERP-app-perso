"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTypesMapRequestApprovalEnum = exports.StatusTypesEnum = void 0;
var StatusTypesEnum;
(function (StatusTypesEnum) {
    StatusTypesEnum["REQUESTED"] = "REQUESTED";
    StatusTypesEnum["APPROVED"] = "APPROVED";
    StatusTypesEnum["DENIED"] = "DENIED";
    StatusTypesEnum["ALL"] = "ALL";
})(StatusTypesEnum || (exports.StatusTypesEnum = StatusTypesEnum = {}));
var StatusTypesMapRequestApprovalEnum;
(function (StatusTypesMapRequestApprovalEnum) {
    StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["REQUESTED"] = 1] = "REQUESTED";
    StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["APPROVED"] = 2] = "APPROVED";
    StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["DENIED"] = 3] = "DENIED";
})(StatusTypesMapRequestApprovalEnum || (exports.StatusTypesMapRequestApprovalEnum = StatusTypesMapRequestApprovalEnum = {}));
