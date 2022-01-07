import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import colors from '../theme/Colors';
import {normalize} from '../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(5),
    marginBottom: normalize(5),
  },
  containerImg: {
    flex: 0.4,
    height: 80,
    borderRadius: 7,
    aspectRatio: 1.0,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginLeft: normalize(5),
  },
  containerTxt: {
    width: '100%',
    textAlignVertical: 'center',
    padding: normalize(5),
  },
});

const FlatlistCardComponent = React.memo(props => {
  let {item, color} = props;
  return (
    <Pressable
      android_ripple={{color: colors.silver}}
      onPress={() => {
        props.navigateTo();
      }}
      style={styles.container}
    >
      <Image
        source={{uri: item.imageurl}}
        style={styles.containerImg}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={{flex: 0.6, paddingLeft: normalize(6), alignSelf: 'center'}}>
        <Text style={[styles.containerTxt, {color: color}]}>{item.name}</Text>
        <Text style={[styles.containerTxt, {color: color}]}>
          {item.createdby}
        </Text>
        <Text style={[styles.containerTxt, {color: color}]}>
          {item.firstappearance}
        </Text>
      </View>
    </Pressable>
  );
});

export default FlatlistCardComponent;
