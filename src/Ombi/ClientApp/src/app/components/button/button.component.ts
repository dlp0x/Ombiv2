import { OmbiCommonModules } from "../modules";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

@Component({
    standalone: true,
    selector: 'ombi-button',
    imports: [...OmbiCommonModules, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <button [id]="id" [type]="type" [class]="'ombi-button ombi-button--' + variant + (class ? ' ' + class : '')"
        [attr.data-toggle]="dataToggle" mat-raised-button [attr.data-target]="dataTarget">{{text}}</button>
    `,
    styleUrls: ['./button.component.scss']
  })
  export class ButtonComponent {

    @Input() public text: string;

    @Input() public id: string;

    /** Visual hierarchy — see design-system-proposal-ombiv2-final.md §5.
     *  Primary/secondary use radius-md, tertiary uses the more discreet
     *  radius-sm. Pill is deliberately not an option here: it's reserved
     *  for chips/tags/specific CTAs, not the default button shape. */
    @Input() public variant: ButtonVariant = "primary";

    /** Native HTML button type (button/submit/reset). Previously this input
     *  was named `type` but was actually meant to carry the visual variant —
     *  it never did anything, since nothing consumed it for styling and no
     *  usage of ombi-button existed elsewhere in the app. Fixed here rather
     *  than carried forward, with zero call sites to migrate. */
    @Input() public type: string = "button";

    @Input() public class: string;
    @Input('data-toggle') public dataToggle: string;
    @Input('data-target') public dataTarget: string;

  }
