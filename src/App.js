import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const App = () => {
  const [subtotal, setSubtotal] = useState('');
  const [total, setTotal] = useState('');
  const [itemPreTax, setItemPreTax] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [itemAfterTax, setItemAfterTax] = useState('');

  const calculate = () => {
    const _taxRate = parseFloat(((Number(total) - Number(subtotal)) / Number(subtotal)).toFixed(2));
    setTaxRate(_taxRate);
    setItemAfterTax(
      parseFloat((Number(itemPreTax) * (1 + _taxRate)).toFixed(2))
    );
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.title}>Single Item w/ Tax Calculator</Text>
        <Text style={styles.text}>
          Input you subtotal and total to calculate the tax rate.
        </Text>
        <Text style={styles.text}>
          Input the single item before tax to calculate the after tax price.
        </Text>
      </View>
      <TextInput style={styles.input} placeholder="Subtotal" value={subtotal} onChangeText={val => setSubtotal(val)} selectOnTextFocus={true}></TextInput>
      <TextInput style={styles.input} placeholder="Total" value={total} onChangeText={val => setTotal(val)} selectOnTextFocus={true}></TextInput>
      <TextInput style={styles.input} placeholder="Item Pre-Tax" value={itemPreTax} onChangeText={val => setItemPreTax(val)} selectOnTextFocus={true}></TextInput>
      <TouchableHighlight
        onPress={calculate}
        style={styles.button}
        underlayColor={'#0A84D0'}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableHighlight>
      {parseFloat(taxRate) > 0 && parseFloat(itemAfterTax) > 0 &&
        <View>
          <Text style={styles.highlightText}>Tax Rate: {taxRate * 100}%</Text>
          <Text style={styles.highlightText}>Item After Tax: ${itemAfterTax}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    alignItems: 'center',
    marginBottom: 32,
  },  
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  highlightText: {
    fontSize: 21,
    color: '#1B95E0',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 32,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputLabel: {
    color: '#EEEEEE',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#EEEEEE',
    minWidth: 150,
    textAlign: 'right',
    padding: 4,
    fontSize: 21,
    marginBottom: 8,
  }
});

export default App;
