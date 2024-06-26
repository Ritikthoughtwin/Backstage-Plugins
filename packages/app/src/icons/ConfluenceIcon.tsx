import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(
  () =>
    createStyles({
      icon: {
        pointerEvents: 'none',
        width: '1em',
        height: '1em',
      },
    }),
  { name: 'ConfluenceIcon' },
);

const ConfluenceIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path d="M0.364,20.339l4.965,3.048c0.361,0.219,0.83,0.112,1.05-0.247c0-0.005,0.005-0.009,0.005-0.009c3.146-5.244,3.774-4.483,13.169-0.033c0.38,0.183,0.834,0.019,1.017-0.36c0.005-0.005,0.005-0.014,0.009-0.019l2.363-5.333c0.169-0.379-0.005-0.823-0.38-0.995c-1.041-0.486-3.104-1.458-4.965-2.351C5.976,8.401,2.089,16.175,0.106,19.302v-0.001C-0.105,19.656,0.008,20.119,0.364,20.339z" />
      <path d="M23.894,4.712c0.211-0.355,0.098-0.818-0.258-1.038l-4.96-3.044c-0.352-0.233-0.825-0.145-1.059,0.205c-0.009,0.014-0.019,0.028-0.028,0.047c-3.156,5.263-3.803,4.469-13.155,0.042C4.054,0.742,3.6,0.905,3.417,1.284C3.412,1.289,3.412,1.298,3.408,1.303L1.04,6.636C0.871,7.015,1.045,7.459,1.42,7.631C2.461,8.118,4.529,9.09,6.39,9.988c11.627,5.609,15.508-2.122,17.506-5.277L23.894,4.712z" />
    </SvgIcon>
  );
};

export default ConfluenceIcon;
