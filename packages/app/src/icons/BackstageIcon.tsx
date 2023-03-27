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
  { name: 'BackstageIcon' },
);

const BackstageIcon = () => {
  const classes = useStyles();
  return (
    <SvgIcon
      className={classes.icon}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 349.000000 359.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,359.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M1157 2799 c-455 -436 -827 -795 -827 -798 0 -7 844 -520 944 -574
288 -155 619 -153 883 4 30 19 88 66 128 106 97 95 146 190 153 298 6 93 -9
147 -59 226 l-39 59 28 -7 c51 -15 243 -8 312 11 130 35 232 98 332 204 110
117 161 252 139 372 -20 118 -104 239 -225 324 -73 53 -904 557 -926 563 -10
3 -316 -283 -843 -788z m1213 276 c317 -193 383 -243 423 -319 29 -57 28 -145
-3 -206 -47 -92 -185 -193 -301 -219 -75 -18 -200 -13 -273 9 -45 14 -163 79
-373 206 -170 102 -314 191 -321 198 -11 11 35 59 254 270 148 141 271 255
275 254 4 -2 147 -88 319 -193z m-408 -887 c131 -84 184 -164 176 -267 -5 -76
-40 -143 -109 -212 -60 -60 -149 -110 -229 -128 -111 -26 -258 -7 -363 45 -57
29 -677 404 -677 409 0 2 126 125 281 274 l281 269 282 -170 c154 -94 316
-193 358 -220z"
        />
        <path
          d="M3070 2239 c-130 -132 -274 -205 -455 -231 -85 -12 -86 -13 -81 -38
3 -14 9 -63 12 -108 l7 -84 54 7 c71 9 180 46 251 86 85 48 212 181 251 262
28 59 57 168 49 185 -2 4 -41 -32 -88 -79z"
        />
        <path
          d="M3103 1941 c-129 -146 -292 -230 -515 -266 l-38 -6 0 -111 0 -110 57
7 c269 33 511 255 549 503 4 23 5 42 3 42 -3 0 -28 -26 -56 -59z"
        />
        <path
          d="M320 1772 l0 -97 473 -287 c524 -318 537 -325 657 -362 313 -99 638
-23 848 198 84 89 132 180 140 269 l5 61 -69 -73 c-162 -173 -358 -258 -614
-268 -155 -6 -261 9 -393 57 -99 37 -103 39 -610 346 -230 140 -423 254 -428
254 -5 0 -9 -44 -9 -98z"
        />
        <path
          d="M3115 1627 c-76 -95 -228 -201 -350 -242 -27 -10 -86 -23 -130 -29
l-80 -12 -3 -113 -3 -113 43 7 c142 22 244 66 348 150 113 91 188 208 211 329
5 32 9 61 7 65 -2 5 -21 -14 -43 -42z"
        />
        <path
          d="M320 1452 c0 -68 4 -103 13 -110 22 -18 839 -513 927 -561 134 -75
239 -108 380 -121 253 -24 501 65 661 237 85 91 139 202 139 285 l0 40 -52
-58 c-109 -118 -269 -214 -430 -256 -120 -32 -355 -32 -482 0 -135 34 -232 85
-694 365 -233 141 -432 262 -443 267 -18 10 -19 7 -19 -88z"
        />
        <path
          d="M3060 1249 c-86 -86 -107 -102 -200 -147 -101 -48 -215 -82 -279 -82
l-31 0 0 -114 0 -115 38 6 c168 23 276 77 399 198 70 69 99 106 122 156 28 59
57 170 49 187 -2 4 -46 -36 -98 -89z"
        />
        <path
          d="M322 1118 l3 -102 450 -274 c645 -392 679 -407 950 -407 154 0 163 2
255 33 127 44 220 101 306 187 87 87 142 190 151 280 l5 60 -45 -51 c-100
-111 -281 -223 -421 -259 -226 -57 -475 -36 -677 57 -41 19 -275 157 -522 306
-246 150 -450 272 -453 272 -2 0 -3 -46 -2 -102z"
        />
        <path
          d="M320 792 l0 -100 455 -276 c250 -152 490 -293 532 -315 236 -119 499
-132 735 -37 213 86 380 276 395 447 l6 64 -36 -44 c-101 -127 -292 -242 -465
-282 -212 -48 -475 -18 -665 77 -40 20 -265 153 -500 296 -235 142 -434 262
-442 265 -13 4 -15 -12 -15 -95z"
        />
      </g>
    </SvgIcon>
  );
};

export default BackstageIcon;