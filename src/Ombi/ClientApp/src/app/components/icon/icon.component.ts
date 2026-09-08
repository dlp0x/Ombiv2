import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

/**
 * Thin wrapper around lucide-angular so the rest of the app depends on a
 * single, local icon API rather than importing lucide-angular directly
 * everywhere. This is also the seam where FontAwesome/PrimeIcons usages get
 * converged one at a time — see design-system-proposal-ombiv2-final.md, §7/§12.
 *
 * Sprint 01 scope: only the icons actually touched by the Discover pilot use
 * this component. The rest of the app keeps its existing icons for now.
 */
@Component({
    standalone: true,
    selector: "ombi-icon",
    imports: [LucideAngularModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<lucide-icon [name]="name" [size]="size" [strokeWidth]="strokeWidth"></lucide-icon>`,
    styles: [`
        :host {
            display: inline-flex;
            line-height: 0;
            color: currentColor;
        }
    `]
})
export class IconComponent {
    @Input() public name: string;
    @Input() public size: number = 16;
    @Input() public strokeWidth: number = 1.75;
}
