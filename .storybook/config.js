import { configure } from '@storybook/vue'
import { themes } from '@storybook/theming'
import myTheme from './myTheme'

function loadStories() {
  require('../stories/index.js')
  // You can require as many stories as you need.
  // Option defaults.
  addParameters({
    options: {
      theme: myTheme
    }
  })
}

configure(loadStories, module)
