export {};

declare module "obsidian" {
    interface TFolder extends TAbstractFile {
        /**
         * Returns the prefix of the folder path.
         * If the folder is in the root '/', it returns an empty string.
         * If the folder is 'a/b/c', it returns 'a/b/'.
         *
         * @returns The prefix of the folder.
         */
        getParentPrefix(): string;
    }
}
