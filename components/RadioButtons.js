import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React, { Component } from 'react'; 
import {View} from 'react-native';
 
var radio_props = [
  {label: 'Wallet', value: '0xcCeAE97b9EE2f89E62367bf95d970678a5c59958' },
  {label: 'Contract', value: '0xface4F2E421aeBDc384460a331C142c1D8bD8674' }
];
 
export default class RadioButtons extends Component {
    constructor(props) {
        super(props);

    }
  
  render() {
    return (
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => console.log(value)}
        />
      </View>
    );
  }
}

