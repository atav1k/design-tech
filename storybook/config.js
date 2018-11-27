import React from 'react'
import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('./');
}

configure(loadStories, module);
