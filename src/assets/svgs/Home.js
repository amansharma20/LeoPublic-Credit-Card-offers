/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Home(props) {
  const {focused} = props;
  const selectedHome = (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H16C17.1046 15 18 14.1046 18 13V2C18 0.89543 17.1046 0 16 0ZM16 2V5H2V2H16ZM2 13V8H16V13H2ZM20 4V15C20 16.1046 19.1046 17 18 17H4C4 18.1046 4.89543 19 6 19H18C20.2091 19 22 17.2091 22 15V6C22 4.89543 21.1046 4 20 4Z"
        fill="#6f55a4"
      />
    </Svg>
  );
  const unselectedHome = (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H16C17.1046 15 18 14.1046 18 13V2C18 0.89543 17.1046 0 16 0ZM16 2V5H2V2H16ZM2 13V8H16V13H2ZM20 4V15C20 16.1046 19.1046 17 18 17H4C4 18.1046 4.89543 19 6 19H18C20.2091 19 22 17.2091 22 15V6C22 4.89543 21.1046 4 20 4Z"
        fill="#9296a9"
      />
    </Svg>
  );
  return focused ? selectedHome : unselectedHome;
}

export default Home;
