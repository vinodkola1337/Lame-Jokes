import Buttons from '../components/Buttons.vue';
import '../assets/css/main.css';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Button',
    component: Buttons,
    parameters: {
      docs: {
        description: {
          component: 'Used for triggering events.',
        },
        subtitle: "Test"
      },
    },
};

const Template = (args, { argTypes}) => ({
    components: {Buttons},
    props: Object.keys(argTypes),
    template: '<Buttons v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
    kind: 'primary',
    text: 'Primary Button',
  };


export const Secondary = Template.bind({});
Secondary.args = {
    kind: 'secondary',
    text: 'Secondary Button',
  };
Secondary.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
};

export const Default = Template.bind({});
Default.args = {
    kind: '',
    text: 'Default',
  };