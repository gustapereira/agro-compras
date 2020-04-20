import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

function Button({ text, backgroundColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: colors.ORANGE,
  onPress: () => { }
};


export default Button;
