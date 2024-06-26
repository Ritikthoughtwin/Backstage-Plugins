import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        width: '1em',
        height: '1em',
        pointerEvents: 'none',
      },
    }),
  { name: 'JiraIcon' },
);

const JiraIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 25 25"
    >
      <path d="M0.775,12.675C6.934,18.877,3.641,15.558,12.021,24c17.596-17.719,0.728-0.783,11.2-11.33c0.371-0.37,0.371-0.97,0-1.341v0.001C19.841,7.922,15.365,3.366,12.021,0C4.345,7.73,0.775,11.33,0.775,11.33C0.408,11.7,0.408,12.3,0.775,12.675z M12.02,8.452L15.546,12l-3.525,3.548L8.495,12L12.02,8.452z" />{' '}
    </SvgIcon>
  );
};

export default JiraIcon;
