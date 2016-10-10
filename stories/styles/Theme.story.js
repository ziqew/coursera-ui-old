import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {theme} from 'src';
import Palette from '../support/Palette';

const colorStyles = {
  backgroundColor: theme.color.primaryColor
}

storiesOf('ui.Theme', module)
  .add('Palette', () => (
    <Palette />
  ));
