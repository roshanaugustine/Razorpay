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
    description: 'Nikon d5300',
    currency: 'INR',
    key: 'rzp_test_Ksp49tXKqw4zmw',
    amount: '800.0',

    prefill: {
      email: 'roshanaugustine123@gmail.com',
      contact: '+918281555428',
      name: 'Roshan Augustine',
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
            uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT07DAXptCm922fqsmRagSOB_0wzO4Dbfs9Xlbdfqv9V7__zdQcaXqib5JneiAMgJmSNPn2ZlHPZ-QCgWwTEfoEy6-_iuUgtGQo6chOUXqzcdOUbg-9FONW_7NGZ9HW&usqp=CAE',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={styles.name}>Nikon d5300</Text>
          <Text style={styles.rate}>$549.00</Text>
          <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>
            The best choice
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
    backgroundColor: 'black',
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
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'black',
  },
});
