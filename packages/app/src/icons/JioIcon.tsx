import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        height: 30,
        width: 30,
        filter: 'grayscale(1)'
      },
    }),
  { name: 'JioIcon' },
);

const JioIcon = () => {
  const classes = useStyles();
  return (
<SvgIcon className={classes.icon} viewBox="0 0 64 64">
<path fill="#ee2736" d="M33.033 5.446c13.767 0 24.934 11.167 24.934 24.934S46.8 55.301 33.033 55.301c-13.767 0-24.934-11.167-24.934-24.934S19.266 5.446 33.033 5.446"/><path fill="#fff" d="M21.151 21.839c.195-2.652 5.356-3.185 5.98 0v9.945c0 12.727-20.293 7.124-12.064.585 1.924 2.665 5.616 2.496 6.019-.143l.065-10.387zm23.01 2.002c4.381 0 7.943 3.471 7.943 7.735 0 4.277-3.549 7.748-7.943 7.748-4.381 0-7.943-3.471-7.943-7.748 0-4.264 3.549-7.735 7.943-7.735zm0 4.459c1.716 0 3.12 1.469 3.12 3.289s-1.391 3.289-3.12 3.289c-1.716 0-3.107-1.469-3.107-3.289-.013-1.82 1.378-3.289 3.107-3.289zM31.213 17.38h1.118a2.37 2.37 0 0 1 2.353 2.353v.585a2.37 2.37 0 0 1-2.353 2.353h-1.118a2.352 2.352 0 0 1-2.353-2.353v-.585a2.36 2.36 0 0 1 2.353-2.353zm.039 6.825h1.04a2.402 2.402 0 0 1 2.392 2.392V36.62a2.402 2.402 0 0 1-2.392 2.392h-1.04a2.402 2.402 0 0 1-2.392-2.392V26.597a2.394 2.394 0 0 1 2.392-2.392"/></SvgIcon>
  );
};

export default JioIcon;
