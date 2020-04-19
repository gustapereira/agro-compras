import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';


const Input = React.forwardRef(({
  mask, optionsMask, inputColor, onChangeText, value, placeholder, placeholderTextColor, title
}, ref) => {
  function teste() {

  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {mask
        ? (
          <TextInputMask
            // {...props}
            ref={ref}
            type={mask}
            optionsMask={optionsMask}
            style={[styles.input, { color: inputColor }]}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        )
        : (
          <TextInput
            // {...props}
            ref={ref}
            style={[styles.input, { color: inputColor }]}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        )}
    </View>
  );
});

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  // error: PropTypes.string,
  mask: PropTypes.string,
  optionsMask: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  // onPressClean: PropTypes.func,
  // iconName: PropTypes.string,
  // onPressIcon: PropTypes.func,
  // titleColor: PropTypes.string,
  // borderColor: PropTypes.string,
  inputColor: PropTypes.string,
  // inputBackgroundColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
};

Input.defaultProps = {
  // borderColor: '#CCC',
  inputColor: '#000',
  // inputBackgroundColor: 'transparent',
  placeholder: '',
  // error: null,
  mask: '',
  optionsMask: {},
  title: '',
  // titleColor: '#666',
  // onPressClean: () => { },
  // iconName: '',
  // onPressIcon: () => { },
  placeholderTextColor: '#CCC',
};


export default Input;
