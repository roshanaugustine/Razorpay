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
    description: 'Iphone 14 pro max',
    currency: 'INR',
    key: 'rzp_test_9N9EuXZK1BVLVK',
    amount: '2000.0',

    prefill: {
      email: 'norajohn0909@gmail.com',
      contact: '+917994444920',
      name: 'Nora John',
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
            uri: 'data:image/jpeg;base64,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',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.name}>Iphone 14 pro max </Text>
          <Text style={styles.rate}>$1,099.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'white'}}>
            Always Iphone
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
    backgroundColor: 'black',
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
    backgroundColor: 'black',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
