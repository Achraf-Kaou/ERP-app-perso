/**
 * Base interface for tenant and organization-scoped entities
 */
import { IBasePerTenantAndOrganizationEntityModel, ID } from './base-entity.model';
import { IEmployee } from './employee.model';
/**
 * Defines the possible states of a plugin
 */
export declare enum PluginStatus {
    ACTIVE = "ACTIVE",// Plugin is available for use
    INACTIVE = "INACTIVE",// Plugin is not available for use
    DEPRECATED = "DEPRECATED",// Plugin is supported but will be removed in future
    ARCHIVED = "ARCHIVED"
}
/**
 * Defines the supported platform targets for plugins
 */
export declare enum PluginType {
    DESKTOP = "DESKTOP",// Native desktop application plugin
    WEB = "WEB",// Browser-based plugin
    MOBILE = "MOBILE"
}
export declare enum PluginSourceType {
    CDN = "CDN",
    NPM = "NPM",
    GAUZY = "GAUZY"
}
export declare enum PluginOSType {
    LINUX = "LINUX",
    MAC = "MAC",
    WINDOWS = "WINDOWS",
    UNIVERSAL = "UNIVERSAL"
}
export declare enum PluginOSArch {
    X64 = "X64",
    ARM = "ARM"
}
/**
 * CDN-hosted plugin source configuration
 */
export interface ICDNSource extends IPluginSource {
    type: PluginSourceType.CDN;
    url: string;
}
/**
 * NPM-hosted plugin source configuration
 */
export interface INPMSource extends IPluginSource {
    type: PluginSourceType.NPM;
    name: string;
}
/**
 * Gauzy-hosted plugin source configuration
 */
export interface IGauzySource extends IPluginSource {
    type: PluginSourceType.GAUZY;
    url?: string;
    file?: File;
    fileName?: string;
}
/**
 * Main plugin interface definition
 */
export interface IPlugin extends IBasePerTenantAndOrganizationEntityModel {
    name: string;
    description?: string;
    type: PluginType;
    status: PluginStatus;
    versions: IPluginVersion[];
    version?: IPluginVersion;
    installed: boolean;
    author?: string;
    license?: string;
    homepage?: string;
    repository?: string;
    uploadedBy?: IEmployee;
    uploadedById?: ID;
    uploadedAt?: Date;
    source?: IPluginSource;
    downloadCount: number;
    lastDownloadedAt?: Date;
}
/**
 * Interface for creating a new plugin
 */
export interface ICreatePlugin extends Omit<IPlugin, 'id' | 'downloadCount' | 'uploadedAt' | 'lastDownloadedAt' | 'versions'> {
}
/**
 * Interface for updating an existing plugin
 */
export interface IUpdatePlugin extends Partial<ICreatePlugin> {
}
export interface IPluginVersion extends IBasePerTenantAndOrganizationEntityModel {
    number: string;
    changelog: string;
    releaseDate?: Date;
    downloadCount?: number;
    sources?: IPluginSource[];
    installations?: IPluginInstallation[];
    plugin?: IPlugin;
    pluginId?: ID;
    checksum?: string;
    signature?: string;
}
/**
 * Common interface for all plugin source types
 */
export interface IPluginSource extends IBasePerTenantAndOrganizationEntityModel {
    type: PluginSourceType;
    fullName?: string;
    operatingSystem: PluginOSType;
    architecture: PluginOSArch;
    url?: string;
    integrity?: string;
    crossOrigin?: string;
    name?: string;
    registry?: string;
    private?: boolean;
    scope?: string;
    file?: File;
    filePath?: string;
    fileName?: string;
    fileSize?: number;
    mimeType?: string;
    fileKey?: string;
    version?: IPluginVersion;
    versionId?: ID;
}
export declare enum PluginInstallationStatus {
    INSTALLED = "INSTALLED",
    UNINSTALLED = "UNINSTALLED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS"
}
/**
 * Plugin installation record
 */
export interface IPluginInstallation extends IBasePerTenantAndOrganizationEntityModel {
    plugin: IPlugin;
    pluginId?: ID;
    version: IPluginVersion;
    versionId?: ID;
    installedBy?: IEmployee;
    installedById?: ID;
    installedAt?: Date;
    uninstalledAt?: Date;
    status: PluginInstallationStatus;
}
//# sourceMappingURL=plugin.model.d.ts.map