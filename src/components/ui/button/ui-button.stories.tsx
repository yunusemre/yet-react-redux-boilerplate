import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UiButton, UiButtonType } from '.';

export default {
  title: 'UI/UiButton',
  component: UiButton,
  argTypes: {
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
    },
    size: { control: 'select', options: ['sm', 'lg'] },
  },
  args: {
    type: 'button',
    className: '',
    loading: false,
    icon: 'fa-solid fa-save',
    text: 'Button',
    variant: 'primary',
    disabled: false,
  },
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args: UiButtonType) => <UiButton {...args} />;
export const Proporties = Template.bind({});

Proporties.args = {
  type: 'button',
  className: '',
  loading: false,
  icon: 'fa-solid fa-save',
  text: 'Button',
  variant: 'primary',
  disabled: false,
};
