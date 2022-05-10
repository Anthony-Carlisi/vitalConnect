<ScrollView style={styles.textWindow}>
  <View style={styles.lastText}>
    <Text style={[styles.textTitle, styles.group]}>Vincenzo</Text>
    <View style={[styles.recipientTextSection]}>
      <Image
        style={styles.textAvatar}
        source={{
          uri: 'https://picsum.photos/90',
        }}
      />
      <View style={[styles.recipientTextContainer]}>
        <View style={styles.leftArrow}></View>
        <View style={styles.leftArrowOverlap}></View>
        <Text style={[styles.text, styles.recipientText]}>Nice great news</Text>
      </View>
    </View>
    <Text style={[styles.textTitle, styles.group]}>Received 10:37 AM</Text>
  </View>
  <View style={styles.lastText}>
    <Text style={[styles.textTitle, styles.group]}>Vincenzo</Text>
    <View style={[styles.recipientTextSection]}>
      <Image
        style={styles.textAvatar}
        source={{
          uri: 'https://picsum.photos/90',
        }}
      />
      <View style={[styles.recipientTextContainer]}>
        <View style={styles.leftArrow}></View>
        <View style={styles.leftArrowOverlap}></View>
        <Text style={[styles.text, styles.recipientText]}>Nice great news</Text>
      </View>
    </View>
  </View>

  <View style={styles.lastText}>
    <View style={styles.senderTextSection}>
      <View style={styles.center}>
        {/* <View style={styles.textErrorCircle}>
        <FontAwesomeIcon
          style={styles.textError}
          icon={faExclamation}
        />
      </View> */}
      </View>
      <View style={styles.senderTextContainer}>
        <View style={styles.rightArrow}></View>
        <View style={styles.rightArrowOverlap}></View>
        <Text style={[styles.text, styles.senderText]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          doloribus rerum repellendus similique repudiandae harum fugit ullam
          dolore aliquam voluptatem?
        </Text>
      </View>
    </View>
    <Text style={[styles.textTitle, styles.end]}>Received 10:37 AM</Text>
  </View>
</ScrollView>;
