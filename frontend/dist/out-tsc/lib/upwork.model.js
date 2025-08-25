"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUpworkProposalStatusEnum = exports.IUpworkOfferStatusEnum = void 0;
var IUpworkOfferStatusEnum;
(function (IUpworkOfferStatusEnum) {
    IUpworkOfferStatusEnum["ACCEPTED"] = "accepted";
    IUpworkOfferStatusEnum["NEW"] = "new";
    IUpworkOfferStatusEnum["DECLINED"] = "declined";
    IUpworkOfferStatusEnum["EXPIRED"] = "expired";
    IUpworkOfferStatusEnum["WITHDRAWN"] = "withdrawn";
    IUpworkOfferStatusEnum["CANCELLED"] = "cancelled";
    IUpworkOfferStatusEnum["CHANGED"] = "changed";
})(IUpworkOfferStatusEnum || (exports.IUpworkOfferStatusEnum = IUpworkOfferStatusEnum = {}));
var IUpworkProposalStatusEnum;
(function (IUpworkProposalStatusEnum) {
    IUpworkProposalStatusEnum["ACTIVE"] = "active";
    IUpworkProposalStatusEnum["SUBMITTED"] = "submitted";
    IUpworkProposalStatusEnum["ARCHIVED"] = "archived";
})(IUpworkProposalStatusEnum || (exports.IUpworkProposalStatusEnum = IUpworkProposalStatusEnum = {}));
