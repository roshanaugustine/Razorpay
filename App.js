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
    description: 'Exotic Watch',
    currency: 'INR',
    key: 'rzp_test_ha40xeXaTchX7r',
    amount: '3000.0',

    prefill: {
      email: 'emilintresia02@gmail.com',
      contact: '+919526323379',
      name: 'Emilin Treesa Joseph',
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
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfe02VTRx-YnOfPXEStwyYZbD4z4yIuKBQpg&usqp=CAU',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.name}>Vintage Telephone</Text>
          <Text style={styles.rate}>$30,000.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>
            50 years old
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
    color: 'gold',
  },
  rate: {
    fontSize: 30,
    marginTop: 15,
    color: 'gold',
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
