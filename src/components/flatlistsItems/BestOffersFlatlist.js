/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  FlatList,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';
import {icons, images, SIZES} from '../../constants';
import {Responsive} from '../../utils/layouts/Layout';
import BackButtonWhite from '../../assets/svgs/backButtonWhite.svg';
import MODALDATA from '../../assets/dummyData/overviewModal';
import MoreDetails from './MoreDetailsItems';
import AppleIcon from '../../assets/svgs/apple.svg';

export default function BestOffersFlatlist({title, subtitle, image}) {
  const [showModal, setShowModal] = useState(false);

  const renderModalItem = ({item}) => (
    <MoreDetails title={item.title} subtitle={item.subtitle} />
  );

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => setShowModal(true)}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={['#EEE5FF', '#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <ImageBackground
          source={{uri: image}}
          style={styles.imageBackgroundSize}
          imageStyle={styles.image}>
          <View style={{justifyContent: 'flex-end', flex: 1}}>
            <View style={styles.bankIconLogoOnImageContainer}>
              <Image
                source={images.axisBankWhite}
                style={styles.bankIconLogoOnImageSize}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <View style={{width: '70%'}}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
            <TouchableOpacity>
              <Text style={styles.showMoreText}>Show more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressCircleContainer}>
            <Text style={styles.daysLeftText}>
              15{'\n'}days{'\n'}left
            </Text>
            <AnimatedCircularProgress
              style={styles.animatedCircleSize}
              size={34}
              width={3}
              fill={30}
              tintColor="#CD4D78"
              // onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#b9b9b9"
            />
          </View>
        </View>
        <View />
      </LinearGradient>
      {showModal && (
        <Modal
          showModal={showModal}
          transparent={true}
          statusBarTranslucent={true}
          onRequestClose={() => setShowModal(false)}
          animationType="slide">
          {/* <OverViewScreenModal /> */}
          <View style={{justifyContent: 'flex-end'}}>
            <View style={styles.modalContainer}>
              {/* HEADER  */}
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 32,
                  borderTopRightRadius: 32,
                }}>
                {/* FLATLIST  */}
                <View>
                  <FlatList
                    data={MODALDATA}
                    renderItem={renderModalItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.modalContentContainerStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    width: Responsive.width(180),
    paddingVertical: SIZES.padding2,
    paddingHorizontal: 12,
  },
  gradientContainer: {
    elevation: 8,
    width: Responsive.width(147),
    borderRadius: 6,
  },
  imageBackgroundSize: {
    width: Responsive.width(147),
    height: Responsive.height(119),
  },
  bankIconLogoOnImageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  bankIconLogoOnImageSize: {
    width: Responsive.width(58),
    height: Responsive.height(17),
  },
  image: {
    borderRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'stretch',
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  titleText: {fontSize: 12, fontWeight: '700', color: '#454545'},
  subtitleText: {
    fontSize: 10,
    fontWeight: '400',
    paddingTop: 4,
    color: '#515151',
  },
  showMoreText: {
    fontSize: 7,
    fontWeight: '400',
    paddingTop: 4,
    color: '#4D2D8F',
    paddingBottom: 6,
  },
  progressCircleContainer: {width: '30%', flexDirection: 'row'},
  daysLeftText: {fontSize: 6, marginLeft: 10, textAlign: 'center'},
  animatedCircleSize: {marginLeft: -24, marginTop: -6},
  modalContainer: {
    paddingTop: Responsive.height(110),
    // height: '90%',
    justifyContent: 'flex-end',
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // paddingTop: SIZES.padding,
  },
  // iconContainer: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: SIZES.padding,
  //   paddingTop: SIZES.padding,
  //   paddingBottom: 10,
  //   alignItems: 'center',
  //   backgroundColor: '#291853',
  // },
  iconSizeLeft: {width: 34, height: 34},
  iconSizeRight: {width: 28, height: 28},
  modalHeaderText: {fontSize: 24, fontWeight: '700', color: '#ffffff'},
  leftIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
