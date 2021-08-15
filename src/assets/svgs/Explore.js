/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Explore(props) {
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
        d="M18.7336 3.22228C16.6533 1.14198 13.9002 0 10.9709 0C8.0415 0 5.25862 1.14198 3.20808 3.22228C-1.06936 7.49972 -1.06936 14.4704 3.20808 18.7777C5.28838 20.858 8.0415 22 10.9709 22C13.9002 22 16.6831 20.858 18.7336 18.7777C20.8139 16.6974 21.9559 13.9443 21.9559 11.0149C21.9559 8.08559 20.8128 5.30271 18.7336 3.22228ZM17.2976 17.313C15.5983 19.0112 13.3728 19.9197 10.9708 19.9197C8.56893 19.9197 6.3421 18.9825 4.64278 17.313C1.15744 13.8277 1.15744 8.14388 4.64278 4.65854C6.34204 2.95929 8.56753 2.05189 10.9708 2.05189C13.3726 2.05189 15.5994 2.98905 17.2987 4.65854C18.998 6.3578 19.9054 8.58329 19.9054 10.9865C19.9054 13.3872 18.9968 15.614 17.2976 17.3133L17.2976 17.313ZM7.77698 10.1944L5.40374 16.5508L11.7601 14.1776C12.8735 13.7679 13.7523 12.8891 14.162 11.7758L16.5352 5.41935L10.1788 7.7926C9.06657 8.20224 8.18777 9.08104 7.77698 10.1944ZM11.0291 12.2736L8.8619 13.0643L9.65259 10.897C9.7693 10.5743 9.97528 10.3112 10.2385 10.0766L11.8198 11.658C11.6436 11.952 11.3507 12.1569 11.0291 12.2736Z"
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
        d="M18.7336 3.22228C16.6533 1.14198 13.9002 0 10.9709 0C8.0415 0 5.25862 1.14198 3.20808 3.22228C-1.06936 7.49972 -1.06936 14.4704 3.20808 18.7777C5.28838 20.858 8.0415 22 10.9709 22C13.9002 22 16.6831 20.858 18.7336 18.7777C20.8139 16.6974 21.9559 13.9443 21.9559 11.0149C21.9559 8.08559 20.8128 5.30271 18.7336 3.22228ZM17.2976 17.313C15.5983 19.0112 13.3728 19.9197 10.9708 19.9197C8.56893 19.9197 6.3421 18.9825 4.64278 17.313C1.15744 13.8277 1.15744 8.14388 4.64278 4.65854C6.34204 2.95929 8.56753 2.05189 10.9708 2.05189C13.3726 2.05189 15.5994 2.98905 17.2987 4.65854C18.998 6.3578 19.9054 8.58329 19.9054 10.9865C19.9054 13.3872 18.9968 15.614 17.2976 17.3133L17.2976 17.313ZM7.77698 10.1944L5.40374 16.5508L11.7601 14.1776C12.8735 13.7679 13.7523 12.8891 14.162 11.7758L16.5352 5.41935L10.1788 7.7926C9.06657 8.20224 8.18777 9.08104 7.77698 10.1944ZM11.0291 12.2736L8.8619 13.0643L9.65259 10.897C9.7693 10.5743 9.97528 10.3112 10.2385 10.0766L11.8198 11.658C11.6436 11.952 11.3507 12.1569 11.0291 12.2736Z"
        fill="#9296a9"
      />
    </Svg>
  );
  return focused ? selectedHome : unselectedHome;
}

export default Explore;
