import React, {useState, useEffect} from 'react';
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
  const [textFooter, setTextFooter] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [smsData, setSmsData] = useState([]);

  useEffect(() => {
    fetchSmsData();
  }, []);

  // Fetch smsData
  const fetchSmsData = async () => {
    const response = await fetch(
      'http://192.168.1.215:5000/smsData?_sort=SentDate&_order=desc',
    );
    const data = await response.json();
    setSmsData(data);
    setIsLoading(false);
  };

  const onPress = () => {
    navDropDown === false ? setNavDropDown(true) : setNavDropDown(false);
  };

  const testFooter = id => {
    textFooter.includes(id)
      ? setTextFooter(prevState => prevState.filter(stateId => stateId !== id))
      : setTextFooter(prevState => [...prevState, id]);
  };

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
      </View>
      <FlatList
        style={[styles.textWindow, {position: 'absolute', width: '100%'}]}
        data={smsData}
        scrollEnabled={true}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback onPress={() => testFooter(item.Sid)}>
              <View
                style={[
                  index + 1 < smsData.length &&
                  smsData[index + 1].From !== item.From
                    ? styles.lastText
                    : styles.marginText,
                  styles.marginText,
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

                {(index + 1 < smsData.length &&
                  smsData[index + 1].From !== item.From) ||
                smsData.length - 1 === index ? (
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
                  <Text
                    style={[
                      styles.textTitle,
                      item.Direction === 'inbound' ? '' : styles.end,
                      textFooter.includes(item.Sid) ? '' : styles.displayNone,
                    ]}>
                    {`${
                      item.Status.charAt(0).toUpperCase() + item.Status.slice(1)
                    } ${moment(item.SentDate).format('h:mm A')}`}
                  </Text>
                )}
              </View>
            </TouchableWithoutFeedback>
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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(249,249,249, 0.9)',
    borderBottomWidth: 0.001,
    borderBottomColor: '#7a7a78',
    // position: 'absolute',
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
    borderBottomRightRadius: 10,
  },
  leftArrowOverlap: {
    alignSelf: 'flex-end',
    position: 'absolute',
    left: -4,
    height: 15,
    width: 4,
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
  },
  rightArrow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -4,
    height: 15,
    width: 13,
    backgroundColor: '#248bf5',
    borderBottomLeftRadius: 10,
  },
  rightArrowOverlap: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: -5,
    height: 15,
    width: 5,
    backgroundColor: 'white',
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
  marginText: {
    marginBottom: 2,
  },
});
export default SmsChatWindow;
