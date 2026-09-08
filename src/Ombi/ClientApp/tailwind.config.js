// Tailwind config for the Sprint 01 coexistence phase.
// See design-system-proposal-ombiv2-final.md §8 for the reasoning behind
// every option below — nothing here is a default, each choice is deliberate:
//
// - prefix 'tw-'   → zero collision with Bootstrap/Material/PrimeNG class
//                    names (.row, .container, .btn, .card... are all in use).
//                    Revisit once Bootstrap/PrimeNG are fully retired.
// - preflight off  → Tailwind's reset would restyle button/input/table/h1-h6
//                    globally and break the 3 UI kits still in place.
// - darkMode       → driven by [data-theme="light"] on <html>, set by
//                    ThemeService (src/app/services/theme.service.ts).
// - theme.extend   → every value resolves to a CSS custom property from
//                    src/styles/tokens/, never a value hardcoded twice.

/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    darkMode: ["selector", '[data-theme="light"]'],
    content: ["./src/**/*.{html,ts}"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: "var(--ombi-font-family)",
            },
            colors: {
                canvas: "var(--ombi-bg-canvas)",
                "surface-1": "var(--ombi-bg-surface-1)",
                "surface-2": "var(--ombi-bg-surface-2)",
                "surface-3": "var(--ombi-bg-surface-3)",
                "border-subtle": "var(--ombi-border-subtle)",
                "border-strong": "var(--ombi-border-strong)",
                "text-primary": "var(--ombi-text-primary)",
                "text-secondary": "var(--ombi-text-secondary)",
                "text-tertiary": "var(--ombi-text-tertiary)",
                accent: "var(--ombi-accent)",
                "accent-strong": "var(--ombi-accent-strong)",
                "accent-subtle": "var(--ombi-accent-subtle)",
                success: "var(--ombi-success)",
                warning: "var(--ombi-warning)",
                error: "var(--ombi-error)",
            },
            borderRadius: {
                sm: "var(--ombi-radius-sm)",
                md: "var(--ombi-radius-md)",
                lg: "var(--ombi-radius-lg)",
                xl: "var(--ombi-radius-xl)",
                full: "var(--ombi-radius-full)",
            },
            boxShadow: {
                1: "var(--ombi-elevation-1)",
                2: "var(--ombi-elevation-2)",
            },
            // Spacing intentionally NOT overridden here — the token scale in
            // src/styles/tokens/_spacing.scss was chosen to match Tailwind's
            // default spacing scale value-for-value (see that file).
        },
    },
    plugins: [],
};
