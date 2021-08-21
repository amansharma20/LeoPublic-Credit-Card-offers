/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View} from 'react-native';
import { Badge } from 'react-native-elements';

function BadgeIcon(props) {
const [itemCount, setiItemCount] = useState(false);
return (
    <View>
      {itemCount !== 0 &&
      <Badge
        status="error"
        value={itemCount}
        containerStyle={{position: 'absolute', width: 10, height: 10, color: '#ffffff'}}
        badgeStyle={{backgroundColor: '#ffffff'}}
        textStyle={{color: '#A46DF9'}}
      />}
    </View>
  );
}

export default BadgeIcon;


