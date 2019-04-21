import {
  configure
} from '@storybook/vue';
import {
  themes
} from '@storybook/theming';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});
