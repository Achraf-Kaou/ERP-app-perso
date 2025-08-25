"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityType = exports.TimeLogSourceEnum = exports.ManualTimeLogAction = exports.TimeLogType = exports.TimesheetStatus = void 0;
var TimesheetStatus;
(function (TimesheetStatus) {
    TimesheetStatus["DRAFT"] = "DRAFT";
    TimesheetStatus["PENDING"] = "PENDING";
    TimesheetStatus["IN_REVIEW"] = "IN REVIEW";
    TimesheetStatus["DENIED"] = "DENIED";
    TimesheetStatus["APPROVED"] = "APPROVED";
})(TimesheetStatus || (exports.TimesheetStatus = TimesheetStatus = {}));
var TimeLogType;
(function (TimeLogType) {
    TimeLogType["TRACKED"] = "TRACKED";
    TimeLogType["MANUAL"] = "MANUAL";
    TimeLogType["IDLE"] = "IDLE";
    TimeLogType["RESUMED"] = "RESUMED";
})(TimeLogType || (exports.TimeLogType = TimeLogType = {}));
var ManualTimeLogAction;
(function (ManualTimeLogAction) {
    ManualTimeLogAction["ADDED"] = "ADDED";
    ManualTimeLogAction["EDITED"] = "EDITED";
})(ManualTimeLogAction || (exports.ManualTimeLogAction = ManualTimeLogAction = {}));
var TimeLogSourceEnum;
(function (TimeLogSourceEnum) {
    TimeLogSourceEnum["MOBILE"] = "MOBILE";
    TimeLogSourceEnum["WEB_TIMER"] = "BROWSER";
    TimeLogSourceEnum["DESKTOP"] = "DESKTOP";
    TimeLogSourceEnum["BROWSER_EXTENSION"] = "BROWSER_EXTENSION";
    TimeLogSourceEnum["HUBSTAFF"] = "HUBSTAFF";
    TimeLogSourceEnum["UPWORK"] = "UPWORK";
    TimeLogSourceEnum["TEAMS"] = "TEAMS";
    TimeLogSourceEnum["CLOC"] = "CLOC";
})(TimeLogSourceEnum || (exports.TimeLogSourceEnum = TimeLogSourceEnum = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType["URL"] = "URL";
    ActivityType["APP"] = "APP";
})(ActivityType || (exports.ActivityType = ActivityType = {}));
