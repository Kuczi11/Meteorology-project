import React from 'react';
import useStyles from './styles';

const CurrentDate = () => {
  const classes = useStyles();
  const date = new Date();
  const actualDate = date.toLocaleDateString();

  return (
    <div className={classes.currentDate}>
      <h2>
        {actualDate}
      </h2>
    </div>
  );
};

export default CurrentDate;
