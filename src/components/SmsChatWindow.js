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
  SafeAreaView,
} from 'react-native';

function SmsChatWindow() {
  const [text, onChangeText] = useState('Useless Text');
  const [textFooter, setTextFooter] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [smsData, setSmsData] = useState([]);

  useEffect(() => {
    fetchSmsData();
  }, []);

  // Fetch smsData
  const fetchSmsData = async () => {
    const response = await fetch(
      'http://192.168.1.215:5000/smsData?_sort=SentDate&_order=asc',
    );
    const data = await response.json();
    const recipientTexts = data.filter(sms => sms.Direction === 'inbound');
    const lastRecipientText = recipientTexts[recipientTexts.length - 1];
    const senderTexts = data.filter(sms => sms.Direction !== 'inbound');
    const lastSenderText = senderTexts[senderTexts.length - 1];
    setTextFooter([lastRecipientText.Sid, lastSenderText.Sid]);
    setSmsData(data);
    setIsLoading(false);
  };

  const testFooter = id => {
    textFooter.includes(id)
      ? setTextFooter(prevState => prevState.filter(stateId => stateId !== id))
      : setTextFooter(prevState => [...prevState, id]);
  };

  return (
    <SafeAreaView style={styles.window}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  window: {
    height: '100%',
  },
  textWindow: {
    paddingHorizontal: 15,
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
  marginText: {
    marginBottom: 2,
  },
});
export default SmsChatWindow;
