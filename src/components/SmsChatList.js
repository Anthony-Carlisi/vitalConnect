import React, {useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

function SmsChatList({smsData}) {
  const [textFooter, setTextFooter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <FlatList
      style={[styles.textWindow]}
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
  );
}

const styles = StyleSheet.create({
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
  textAvatar: {
    width: 25,
    height: 25,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  recipientTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  displayNone: {
    display: 'none',
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
  lastText: {
    marginBottom: 20,
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
  marginText: {
    marginBottom: 2,
  },
});
export default SmsChatList;
