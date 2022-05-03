import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faInfo,
  faUser,
  faPhone,
  faCircleArrowUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

function SmsChatWindow() {
  let margin1 = -20;

  const imageArray = [
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
  ];

  return (
    <View>
      <View style={styles.header}>
        <View style={[styles.center, {position: 'absolute', left: 0, top: 30}]}>
          <FontAwesomeIcon
            style={{position: 'absolute', left: 0}} // on left, still center vertically.
            icon={faChevronLeft}
          />
          <Text style={[styles.notificationCircle]}>21</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.rowCenter}>
            {imageArray.map((image, index) => {
              return (
                <Image
                  style={
                    index != 0
                      ? [styles.tinyLogo, {marginLeft: -20}]
                      : [styles.tinyLogo]
                  }
                  source={{
                    uri: image,
                  }}
                />
              );
            })}
          </View>
          <View style={[styles.rowCenter]}>
            <Text style={styles.titleText}>Center</Text>
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
          <View style={[styles.rowCenter, styles.displayNone]}>
            <View style={[styles.center, {marginRight: 20}]}>
              <FontAwesomeIcon icon={faPhone} />
              <Text>call</Text>
            </View>
            <View style={[styles.center, {marginRight: 20}]}>
              <FontAwesomeIcon icon={faUser} />
              <Text>profile</Text>
            </View>
            <View style={styles.center}>
              <FontAwesomeIcon icon={faInfo} />
              <Text>info</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <Text>Hello World</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationCircle: {
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#248bf5',
    color: '#f9f9f9',
    position: 'absolute',
    left: 0,
    marginLeft: 15,
  },
  header: {
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#7a7a78',
  },
  tinyLogo: {
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNone: {display: 'none'},
});
export default SmsChatWindow;
