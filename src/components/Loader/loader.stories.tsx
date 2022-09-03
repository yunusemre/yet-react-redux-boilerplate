import { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader from '.';

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

export const Primary: ComponentStory<typeof Loader> = () => <Loader />;
