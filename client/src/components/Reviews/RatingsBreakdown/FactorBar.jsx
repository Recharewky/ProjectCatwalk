import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300
  }
}));

const marks = {
  Size: [
    {
      value: 0,
      label: 'Too small'
    },
    {
      value: 50,
      label: 'Perfect'
    },
    {
      value: 100,
      label: 'Too wide'
    }
  ],
  Width: [
    {
      value: 0,
      label: 'Too narrow'
    },
    {
      value: 50,
      label: 'Perfect'
    },
    {
      value: 100,
      label: 'Too wide'
    }
  ],
  Comfort: [
    {
      value: 0,
      label: 'Uncomfortable'
    },
    {
      value: 50,
      label: 'Ok'
    },
    {
      value: 100,
      label: 'Perfect'
    }
  ],
  Quality: [
    {
      value: 0,
      label: 'Poor'
    },
    {
      value: 50,
      label: 'What I expected'
    },
    {
      value: 100,
      label: 'Perfect'
    }
  ],
  Length: [
    {
      value: 0,
      label: 'Short'
    },
    {
      value: 50,
      label: 'Perfect'
    },
    {
      value: 100,
      label: 'Long'
    }
  ],
  Fit: [
    {
      value: 0,
      label: 'Tight'
    },
    {
      value: 50,
      label: 'Perfect'
    },
    {
      value: 100,
      label: 'Long'
    }
  ]
};

const StyleSlider = withStyles({
  root: {
    color: 'transparent'
  },
  track: {
    height: 10,
    backgroundColor: '#BBBBBB'
  },
  rail: {
    height: 10,
    backgroundColor: '#BBBBBB'
  },
  mark: {
    height: 10,
    width: 3
  },
  thumb: {
    backgroundColor: 'transparent',
    width: 0,
    height: '20px',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderRadius: '0px',
    borderTop: '16px solid #111111',
    marginTop: '0px',
    marginBottom: '0px'
  },
  markLabel: {
    fonrSize: '6px'
  }
})(Slider);

export default function FactorBar(props) {
  const classes = useStyles();
  var val = parseInt(props.characteristic[1]['value'] * 20);
  return (
    <div className={classes.root}>
      <Typography fontSize={10}>
        {props.characteristic[0]}
      </Typography>
      <StyleSlider
        defaultValue={val}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={25}
        marks={marks[props.characteristic[0]]}
        min={0}
        max={100}
        disabled
        aria-label={'label'}
      />
    </div>
  );
}