import type { App } from 'obsidian';
import type { InternalPluginInstance } from './InternalPluginInstance.js';
import type { GraphPlugin } from './GraphPlugin.js';

/** @public */
export interface GraphPluginInstance extends InternalPluginInstance {
    defaultOn: boolean;
    plugin: GraphPlugin;
    app: App;
}
