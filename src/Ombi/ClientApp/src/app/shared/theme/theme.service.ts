import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { StorageService } from "../storage/storage-service";

export type OmbiTheme = "dark" | "light";

// Same storage key `my-nav.component.ts` already read/wrote before this
// service existed — no migration needed, just an actual consumer for it.
// See audit-frontend-ombiv2.md §3: previously this key had no real effect,
// the app always rendered dark regardless of its value.
const THEME_STORAGE_KEY = "theme";

/**
 * Drives the app's light/dark theme by toggling `data-theme="light"` on
 * <html>. Design tokens in src/styles/tokens/_colors.scss (and friends) key
 * off that same attribute, as does Tailwind's darkMode config.
 *
 * Dark is the default whenever nothing (or an unrecognised value) is stored,
 * matching the app's current behaviour.
 */
@Injectable({ providedIn: "root" })
export class ThemeService {

    private readonly renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2, private readonly store: StorageService) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    /** Call once on app start (e.g. from MyNavComponent.ngOnInit). */
    public init(): void {
        const stored = this.store.get(THEME_STORAGE_KEY) as OmbiTheme;
        this.apply(stored === "light" ? "light" : "dark");
    }

    public get current(): OmbiTheme {
        return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    public toggle(): void {
        this.apply(this.current === "dark" ? "light" : "dark");
    }

    public apply(theme: OmbiTheme): void {
        if (theme === "light") {
            this.renderer.setAttribute(document.documentElement, "data-theme", "light");
        } else {
            this.renderer.removeAttribute(document.documentElement, "data-theme");
        }
        this.store.save(THEME_STORAGE_KEY, theme);
    }
}
