import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const options = {
    description: 'One Plus 7T',
    currency: 'INR',
    key: 'rzp_test_k8u92HOj1nm4dO',
    amount: '900.0',

    prefill: {
      email: 'melbinmichael555@gmail.com',
      contact: '+919746759441',
      name: 'Melbin Michael Zavier',
    },
    theme: {
      color: '#00082',
    },
  };

  const handlePay = () => {
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Payment Success! Payment ID :${data.razorpay_payment_id}`);
      })
      .catch(err => {
        alert('Payment Failed Try again later!!');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://5.imimg.com/data5/SELLER/Default/2022/3/XW/BW/XG/149641071/new-oneplus-7t-8gb-128gb-glacier-blue-500x500.jpg',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.name}>One Plus 7t </Text>
          <Text style={styles.rate}>$420.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'white'}}>
            Always One Plus
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.btnBuy}
        activeOpacity={0.5}
        onPress={handlePay}>
        <Text style={styles.btnText}>Buy Now</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardContainer: {
    width: '90%',
    height: 500,
    backgroundColor: 'grey',
    padding: 15,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  description: {
    // marginTop: 30,
    width: '100%',
  },
  reactionContainer: {
    flexDirection: 'row',
    height: 50,

    marginTop: 20,
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  name: {
    fontSize: 23,
    color: 'white',
  },
  rate: {
    fontSize: 30,
    marginTop: 15,
    color: 'white',
  },
  btnBuy: {
    width: '90%',
    height: 55,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
