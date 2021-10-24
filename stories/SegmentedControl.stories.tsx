import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SegmentControlProps, SegmentedControl } from '../src/SegmentedControl';
const meta: Meta = {
  title: 'Segmented Control',
  component: SegmentedControl,
  argTypes: {
    onChangeSegment: {
      action: 'new segment value',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SegmentControlProps> = (args) => (
  <SegmentedControl {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithDisabled = Template.bind({});
export const WithDefault = Template.bind({});

Default.args = {
  segments: [
    { label: 'Single', value: 'sigle' },
    { label: 'Recursive', value: 'recursive' },
  ],
  onChangeSegment: action('segment changed'),
};

WithDisabled.args = {
  segments: [
    { label: 'Single', value: 'sigle' },
    { label: 'Recursive', value: 'recursive' },
    { label: 'Disabled', value: 'disabled', disabled: true },
  ],
  onChangeSegment: action('segment changed'),
};

WithDefault.args = {
  segments: [
    { label: 'Single', value: 'sigle' },
    { label: 'Recursive', value: 'recursive', default: true },
  ],
  onChangeSegment: action('segment changed'),
};
