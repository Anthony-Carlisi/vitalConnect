import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faInfo,
  faUser,
  faPhone,
  faCircleArrowUp,
  faChevronDown,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

function SmsChatWindow() {
  const [text, onChangeText] = useState('Useless Text');

  const imageArray = [
    'https://picsum.photos/10',
    // 'https://picsum.photos/20',
    // 'https://picsum.photos/30',
    // 'https://picsum.photos/40',
  ];

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <View style={styles.headerLeftNav}>
          <FontAwesomeIcon style={styles.faChevronLeft} icon={faChevronLeft} />
          <Text style={styles.notificationCircle}>21</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.avatarContainer}>
            {imageArray.map((image, index) => {
              return (
                <Image
                  key={index}
                  style={
                    index != 0
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
          <View style={styles.rowCenter}>
            <Text style={styles.titleText}>Center</Text>
            <FontAwesomeIcon icon={faChevronRight} />
          </View>
          <View style={[styles.headerNavHiddenBar, styles.displayNone]}>
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
      </View>
      <ScrollView style={styles.textWindow}>
        <View style={styles.lastText}>
          <Text style={[styles.textTitle, styles.group]}>Anthony Carlisi</Text>
          <View style={styles.recipientTextSection}>
            <Image
              style={styles.textAvatar}
              source={{
                uri: 'https://picsum.photos/90',
              }}
            />
            <View style={styles.recipientTextContainer}>
              <View style={styles.leftArrow}></View>
              <View style={styles.leftArrowOverlap}></View>
              <Text style={[styles.text, styles.recipientText]}>lorem50</Text>
            </View>
          </View>
          <Text style={[styles.textTitle, styles.group]}>
            Received 10:37 AM
          </Text>
        </View>

        <View style={styles.lastText}>
          <View style={styles.senderTextSection}>
            <FontAwesomeIcon
              style={styles.textError}
              icon={faCircleExclamation}
            />
            <View style={styles.senderTextContainer}>
              <View style={styles.rightArrow}></View>
              <View style={styles.rightArrowOverlap}></View>
              <Text style={[styles.text, styles.senderText]}>Lorem50</Text>
            </View>
          </View>
          <Text style={[styles.textTitle, styles.end]}>Received 10:37 AM</Text>
        </View>
      </ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  window: {
    height: '100%',
  },
  textWindow: {paddingHorizontal: 15},
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
    borderBottomWidth: 0.001,
    borderBottomColor: '#7a7a78',
  },
  headerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  textAvatar: {
    width: 25,
    height: 25,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipientTextContainer: {
    flexDirection: 'row',
  },
  headerNavHiddenBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 160,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeftNav: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 30,
  },
  displayNone: {display: 'none'},
  input: {
    bottom: 0,
    backgroundColor: 'pink',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexWrap: 'wrap',
  },
  recipientText: {
    backgroundColor: '#e8e8ea',
  },
  senderText: {
    backgroundColor: '#248bf5',
    color: '#f9f9f9',
  },
  avatarContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftArrow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: -4,
    height: 15,
    width: 13,
    backgroundColor: '#e8e8ea',
    // backgroundColor: 'green',
    borderBottomRightRadius: 10,
  },
  leftArrowOverlap: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: -4,
    height: 15,
    width: 4,
    backgroundColor: 'white',
    // backgroundColor: 'blue',
    borderBottomRightRadius: 20,
  },
  rightArrow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -4,
    height: 15,
    width: 13,
    backgroundColor: '#248bf5',
    // backgroundColor: 'green',
    borderBottomLeftRadius: 10,
  },
  rightArrowOverlap: {
    zIndex: 0,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -5,
    height: 15,
    width: 5,
    backgroundColor: 'white',
    // backgroundColor: 'blue',
    borderBottomLeftRadius: 20,
  },
  faChevronLeft: {
    position: 'absolute',
    left: 0,
  },
  lastText: {
    marginBottom: 20,
  },
  textError: {
    marginLeft: 5,
    alignSelf: 'center',
  },
  textTitle: {
    paddingHorizontal: 8,
  },
  group: {
    marginLeft: 30,
  },
  end: {
    alignSelf: 'flex-end',
  },
  senderTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  recipientTextSection: {
    flexDirection: 'row',
    maxWidth: '75%',
  },
  senderTextSection: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    maxWidth: '75%',
  },
});
export default SmsChatWindow;
