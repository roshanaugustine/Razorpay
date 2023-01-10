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
    description: 'Rolleiflex',
    currency: 'INR',
    key: 'rzp_test_6UtFrZVXL0y11U',
    amount: '2000.0',

    prefill: {
      email: 'Shintosebastiankaruvelil30@gmail.com',
      contact: '+916282548909',
      name: 'Shinto Sebastian',
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
          <Text style={styles.name}>Rolleiflex</Text>
          <Text style={styles.rate}>$30,000.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>
          Twin-lens reflex roll-film camera
          </Text>
        </View>
      </View>
      <TouchableHighlight
        style={styles.btnBuy}
        activeOpacity={0.5}
        onPress={handlePay}>
        <Text style={styles.btnText}>Order</Text>
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
    backgroundColor: 'gray',
  },
  cardContainer: {
    width: '90%',
    height: 500,
    backgroundColor: 'white',
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
    color: 'black',
  },
  rate: {
    fontSize: 30,
    marginTop: 15,
    color: 'black',
  },
  btnBuy: {
    width: '90%',
    height: 55,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'black',
  },
});
