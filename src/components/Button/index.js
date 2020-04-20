import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { colors } from '~/styles';

function Button({ text, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: colors.ORANGE,
};


export default Button;
