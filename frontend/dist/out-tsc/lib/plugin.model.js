"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginInstallationStatus = exports.PluginOSArch = exports.PluginOSType = exports.PluginSourceType = exports.PluginType = exports.PluginStatus = void 0;
/**
 * Defines the possible states of a plugin
 */
var PluginStatus;
(function (PluginStatus) {
    PluginStatus["ACTIVE"] = "ACTIVE";
    PluginStatus["INACTIVE"] = "INACTIVE";
    PluginStatus["DEPRECATED"] = "DEPRECATED";
    PluginStatus["ARCHIVED"] = "ARCHIVED"; // Plugin is no longer available for new installations
})(PluginStatus || (exports.PluginStatus = PluginStatus = {}));
/**
 * Defines the supported platform targets for plugins
 */
var PluginType;
(function (PluginType) {
    PluginType["DESKTOP"] = "DESKTOP";
    PluginType["WEB"] = "WEB";
    PluginType["MOBILE"] = "MOBILE"; // Added mobile support
})(PluginType || (exports.PluginType = PluginType = {}));
var PluginSourceType;
(function (PluginSourceType) {
    PluginSourceType["CDN"] = "CDN";
    PluginSourceType["NPM"] = "NPM";
    PluginSourceType["GAUZY"] = "GAUZY";
})(PluginSourceType || (exports.PluginSourceType = PluginSourceType = {}));
var PluginOSType;
(function (PluginOSType) {
    PluginOSType["LINUX"] = "LINUX";
    PluginOSType["MAC"] = "MAC";
    PluginOSType["WINDOWS"] = "WINDOWS";
    PluginOSType["UNIVERSAL"] = "UNIVERSAL";
})(PluginOSType || (exports.PluginOSType = PluginOSType = {}));
var PluginOSArch;
(function (PluginOSArch) {
    PluginOSArch["X64"] = "X64";
    PluginOSArch["ARM"] = "ARM";
})(PluginOSArch || (exports.PluginOSArch = PluginOSArch = {}));
var PluginInstallationStatus;
(function (PluginInstallationStatus) {
    PluginInstallationStatus["INSTALLED"] = "INSTALLED";
    PluginInstallationStatus["UNINSTALLED"] = "UNINSTALLED";
    PluginInstallationStatus["FAILED"] = "FAILED";
    PluginInstallationStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(PluginInstallationStatus || (exports.PluginInstallationStatus = PluginInstallationStatus = {}));
