import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faInfo,
  faUser,
  faPhone,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

function SmsChatHeader() {
  const [navDropDown, setNavDropDown] = useState(false);

  const onPress = () => {
    navDropDown === false ? setNavDropDown(true) : setNavDropDown(false);
  };

  const imageArray = [
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
  ];

  return (
    <View style={styles.center}>
      <View style={styles.avatarContainer}>
        {imageArray.map((image, index) => {
          return (
            <Image
              key={index}
              style={
                index !== 0
                  ? [styles.headerAvatar, {marginRight: -20}]
                  : [styles.headerAvatar]
              }
              source={{
                uri: image,
              }}
            />
          );
        })}
      </View>
      <TouchableWithoutFeedback style={styles.rowCenter} onPress={onPress}>
        <Text style={styles.titleText}>
          The Family
          <FontAwesomeIcon
            size={8}
            icon={navDropDown === true ? faChevronDown : faChevronRight}
          />
        </Text>
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.headerNavHiddenBar,
          navDropDown === true ? '' : styles.displayNone,
        ]}>
        <View style={styles.center}>
          <FontAwesomeIcon icon={faPhone} />
          <Text>call</Text>
        </View>
        <View style={styles.center}>
          <FontAwesomeIcon icon={faUser} />
          <Text>profile</Text>
        </View>
        <View style={styles.center}>
          <FontAwesomeIcon icon={faInfo} />
          <Text>info</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 12,
  },
  headerNavHiddenBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 160,
  },
  displayNone: {
    display: 'none',
  },
});
export default SmsChatHeader;
