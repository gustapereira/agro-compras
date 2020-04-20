import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';


const Input = React.forwardRef((props, ref) => (
  <View>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.content}>
      <View style={styles.offset} />
      {props.mask
        ? (
          <TextInputMask
            {...props}
            ref={ref}
            type={props.mask}
            optionsMask={props.optionsMask}
            style={[styles.input, { color: props.inputColor }]}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
          />
        )
        : (
          <TextInput
            {...props}
            ref={ref}
            style={[styles.input, { color: props.inputColor }]}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
          />
        )}
    </View>
  </View>
));

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  optionsMask: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  inputColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
};

Input.defaultProps = {
  inputColor: '#000',
  placeholder: '',
  mask: '',
  optionsMask: {},
  title: '',
  placeholderTextColor: '#909090',
};


export default Input;
