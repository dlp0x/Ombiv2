// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { APP_BASE_HREF } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Button Component',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: {}
        },
        MatButtonModule
      ]
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  variant: 'primary',
  text: 'Primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Secondary.args = {
  variant: 'secondary',
  text: 'Secondary',
};

export const Tertiary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Tertiary.args = {
  variant: 'tertiary',
  text: 'Tertiary',
};