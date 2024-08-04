import type { InfoFileView } from "../views/InfoFileView.js";

/** @todo Documentation incomplete */
export interface BacklinkView extends InfoFileView {
    /**
     * Get the current view type
     */
    getViewType(): "backlink";
    /**
     * Shows the search
     */
    showSearch(): void;
    /** @todo Documentation incomplete */
    update(): void;
}
