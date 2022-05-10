import React, {useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faInfo,
  faUser,
  faPhone,
  // faCircleArrowUp,
  faChevronDown,
  // faExclamation,
} from '@fortawesome/free-solid-svg-icons';

function SmsChatWindow() {
  const [text, onChangeText] = useState('Useless Text');

  const [navDropDown, setNavDropDown] = useState(false);

  const onPress = () => {
    navDropDown === false ? setNavDropDown(true) : setNavDropDown(false);
  };

  const testObject = [
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Please take a picture of what will need repair',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMae85e9db3c4dff5b496644241365e34f',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e4558008664cb32919883d26',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e4558008664cb32919889d46',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+15163034649',
      To: '+18087935161',
      Body: 'Yeah',
      Status: 'received',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMfb98b6f06ea6db04af5bdd980299944a',
      Direction: 'inbound',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: "I didn't get that. What did you say?",
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:48Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMd3294f06f55b3df35c199fefb9cee119',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Please take a picture of what will need repair',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMae85e9db3c4dff5b456644241365e74f',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e4558008664cb32919183d46',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e2558008664cb32919883d46',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+15163034649',
      To: '+18087935161',
      Body: 'Yeah',
      Status: 'received',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMfb98b6f06ea6db04af5bdd980299943c',
      Direction: 'inbound',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: "I didn't get that. What did you say?",
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:48Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMd3294f06f55b3df35c199fefb9cee110',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Please take a picture of what will need repair',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMae85e9db3c4dff5b496644241365e74f',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e4558008664fb32919883d46',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: 'Okay lets get you an estimate',
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SM4ef1a842e4558008664cb31919883d46',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+15163034649',
      To: '+18087935161',
      Body: 'Yeah',
      Status: 'received',
      SentDate: '2021-09-21T13:36:52Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMfb98b6f06ea6db04af5bdd980299944c',
      Direction: 'inbound',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
    {
      From: '+18087935161',
      To: '+15163034649',
      Body: "I didn't get that. What did you say?",
      Status: 'delivered',
      SentDate: '2021-09-21T13:36:48Z',
      ApiVersion: '2010-04-01',
      NumSegments: 1,
      ErrorCode: 0,
      AccountSid: 'ACe6cc1e9fb822e03ff4593f00b4301639',
      Sid: 'SMd3294f06f55b3df35c199fefb9cee112',
      Direction: 'outbound-reply',
      Price: -0.0075,
      PriceUnit: 'USD',
    },
  ];
  const imageArray = [
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
  ];

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <View style={styles.headerLeftNav}>
          <FontAwesomeIcon
            style={styles.faChevronLeft}
            size={24}
            icon={faChevronLeft}
          />
          <Text style={styles.notificationCircle}>6</Text>
        </View>
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
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.rowCenter}>
              <Text style={styles.titleText}>The Family</Text>
              <FontAwesomeIcon
                size={8}
                icon={navDropDown === true ? faChevronDown : faChevronRight}
              />
            </View>
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
      </View>
      <FlatList
        style={styles.textWindow}
        data={testObject}
        scrollEnabled={true}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                index + 1 < testObject.length &&
                testObject[index + 1].From !== item.From
                  ? styles.lastText
                  : '',
                {marginBottom: 2},
              ]}>
              {/* <Text style={[styles.textTitle, styles.group]}>Vincenzo</Text> */}
              <View
                style={
                  item.Direction === 'inbound'
                    ? styles.recipientTextSection
                    : styles.senderTextSection
                }>
                {/* {item.Direction === 'inbound' ? (
                  <Image
                    style={styles.textAvatar}
                    source={{
                      uri: 'https://picsum.photos/90',
                    }}
                  />
                ) : (
                  <View />
                )} */}
                <View
                  style={
                    item.Direction === 'inbound'
                      ? styles.recipientTextContainer
                      : styles.senderTextContainer
                  }>
                  {item.Direction === 'inbound' ? (
                    <View style={styles.leftArrow} />
                  ) : (
                    <View style={styles.rightArrow} />
                  )}
                  {item.Direction === 'inbound' ? (
                    <View style={styles.leftArrowOverlap} />
                  ) : (
                    <View style={styles.rightArrowOverlap} />
                  )}
                  <Text
                    style={[
                      item.Direction === 'inbound'
                        ? styles.recipientText
                        : styles.senderText,
                      styles.text,
                    ]}>
                    {item.Body}
                  </Text>
                </View>
              </View>

              {(index + 1 < testObject.length &&
                testObject[index + 1].From !== item.From) ||
              testObject.length - 1 === index ? (
                <Text
                  style={[
                    styles.textTitle,
                    item.Direction === 'inbound' ? '' : styles.end,
                  ]}>
                  {`${
                    item.Status.charAt(0).toUpperCase() + item.Status.slice(1)
                  } ${moment(item.SentDate).format('h:mm A')}`}
                </Text>
              ) : (
                <View />
              )}
            </View>
          );
        }}
        keyExtractor={item => item.Sid}
      />

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
  header: {
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    borderBottomWidth: 0.001,
    borderBottomColor: '#7a7a78',
  },
  headerLeftNav: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 30,
  },
  faChevronLeft: {
    position: 'absolute',
    left: 0,
    color: '#248bf5',
    fontSize: 20,
  },
  textWindow: {
    paddingHorizontal: 15,
  },
  notificationCircle: {
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 1,
    backgroundColor: '#248bf5',
    color: '#f9f9f9',
    position: 'absolute',
    left: 18,
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
    flex: 1,
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

  displayNone: {display: 'none'},
  input: {
    bottom: 0,
    backgroundColor: 'pink',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
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

  lastText: {
    marginBottom: 20,
  },
  textError: {
    color: 'red',
  },
  textErrorCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 1,
    borderWidth: 2,
    borderColor: 'red',
    marginLeft: 5,
    // position: 'absolute',
  },
  textTitle: {
    paddingHorizontal: 12,
    color: '#8c8c8c',
    fontSize: 12,
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
  titleText: {
    fontSize: 12,
  },
});
export default SmsChatWindow;
