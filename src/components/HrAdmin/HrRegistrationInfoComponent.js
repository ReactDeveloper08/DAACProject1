import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Styles
import basicStyles from '../../styles/BasicStyles';

const HrRegistrationInfoComponent = props => {
  const {item, backgroundColor} = props;
  const {id, name, mobile, course, branch, enrollNo, date, referBy} = item;

  const handleStudent = () => {
    // props.nav.push('SBatchDetail');
  };

  return (
    <View
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={handleStudent}>
      <View style={styles.contentContainer}>
        <View style={styles.rowStyle}>
          <Text style={styles.nameStyle}>{name} </Text>
          <Text
            style={[basicStyles.text, basicStyles.textBold, {color: '#111'}]}>
            ({enrollNo})
          </Text>
          {/* <Text style={styles.statusText}>{batchType} </Text> */}
        </View>

        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Mobile</Text>
          <Text style={styles.midText}> - </Text>
          <Text style={styles.subTitle}>{mobile}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Course</Text>
          <Text style={styles.midText}> - </Text>
          <Text style={styles.subTitle}>{course}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Branch</Text>
          <Text style={styles.midText}> - </Text>
          <Text style={styles.subTitle}>{branch}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Date</Text>
          <Text style={styles.midText}> - </Text>
          <Text style={styles.subTitle}>{date}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Referred By</Text>
          <Text style={styles.midText}> - </Text>
          <Text style={styles.subTitle}>{referBy}</Text>
        </View>
      </View>
    </View>
  );
};

export default HrRegistrationInfoComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#e7e8e9',
    borderRadius: wp(2),
    padding: wp(2),
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: hp(1.2),
  },
  userImage: {
    width: hp(10),
    aspectRatio: 1 / 1,
    borderRadius: wp(1),
  },
  statusText: {
    textAlign: 'right',
    flex: 1,
    color: '#fff',
    fontSize: wp(3),
    fontWeight: '700',
  },
  contentContainer: {
    // borderWidth: 2,
    flex: 1,
    marginHorizontal: wp(2),
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameStyle: {
    color: '#111',
    fontSize: wp(4),
    fontWeight: '700',
  },
  headText: {
    flex: 1,
    color: '#111',
    fontSize: wp(3),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  midText: {
    color: '#111',
    fontSize: wp(3),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  subTitle: {
    flex: 2,
    color: '#111',
    fontSize: wp(3),

    textAlign: 'right',
  },
});
