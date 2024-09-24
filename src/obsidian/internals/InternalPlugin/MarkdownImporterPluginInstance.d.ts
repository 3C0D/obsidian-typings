import type { App } from 'obsidian';
import type { InternalPluginInstance } from './InternalPluginInstance.js';

/** @public */
export interface MarkdownImporterPluginInstance extends InternalPluginInstance {
    app: App;
}
