import type { App } from 'obsidian';
import type { InternalPluginInstance } from './InternalPluginInstance.js';
import type { WordCountPlugin } from './WordCountPlugin.js';

/** @public */
export interface WordCountPluginInstance extends InternalPluginInstance {
    defaultOn: boolean;
    plugin: WordCountPlugin;
    app: App;
}
