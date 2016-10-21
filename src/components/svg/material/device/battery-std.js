import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let DeviceBatteryStd = props => (
  <SvgIcon {...props}>
    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
  </SvgIcon>
);
DeviceBatteryStd = pure(DeviceBatteryStd);
DeviceBatteryStd.displayName = 'DeviceBatteryStd';
DeviceBatteryStd.muiName = 'SvgIcon';

export default DeviceBatteryStd;
