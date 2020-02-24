const configure = require('@storybook/react').configure;
import { addParameters } from '@storybook/react';
import React from 'react';

const req = require.context('../src', true, /\.stories\.tsx$/);

addParameters({
   options: {
      name: 'Components',
   },
});

function loadStories() {
   req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
