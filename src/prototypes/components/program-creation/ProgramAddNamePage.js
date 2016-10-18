import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';

class ProgramAddName extends React.Component {

  render() {
    const {styles, programName, onSetProgramName} = this.props;
    return (
      <div {...cssWithClass('vertical-box align-items-absolute-center', styles.ProgramAddName)}>
        <h2>Create your first Learning Program</h2>
        <input type="text"
          {...css(styles.input)}
          ref={(r) => (this.programNameRef = r)}
          placeholder="Program Name"
          defaultValue={programName}
          onChange={() => onSetProgramName(this.programNameRef.value)}
        />
      </div>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    Header: {
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  }
}

export default withStyles(({color, gradient}) => ({
  ProgramAddName: {
    minHeight: 450,
  },
  input: {
    textAlign: 'center',
    minWidth: 120,
    padding: '8px 16px',
  },

}))(ProgramAddName);
