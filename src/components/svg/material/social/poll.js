import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let SocialPoll = (props) => (
  <SvgIcon {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </SvgIcon>
);
SocialPoll = pure(SocialPoll);
SocialPoll.displayName = 'SocialPoll';
SocialPoll.muiName = 'SvgIcon';

export default SocialPoll;