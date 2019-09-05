import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {Button} from '../packages/button/src/Button';

const buttonThemes = ['default', 'primary', 'warning', 'danger'];

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('styled button', () => {
    return <Button
      appearance={select('theme', buttonThemes)}
      disabled={true}
    >
      {text('label', 'Themed button')}
    </Button>
  });