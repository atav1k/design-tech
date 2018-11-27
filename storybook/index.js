import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from '../src/Button';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Primary', () => <Button variant="primary" onClick={action('clicked')}>Delete</Button>)
  .add('Destructive', () => <Button variant="destructive" onClick={action('clicked')}>Delete</Button>)
  .add('Link', () => <Button variant="link" onClick={action('clicked')}>Delete</Button>)
  .add('Small', () => <Button size="small" onClick={action('clicked')}>Delete</Button>);
