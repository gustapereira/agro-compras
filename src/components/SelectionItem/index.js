import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import { colors } from '~/styles';

function SelectionItem({
  text, selected, id, onPress, type
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({ id, text })}
    >
      <View style={[styles.containerSelection, type === 'circle' && { borderRadius: 25 }]}>
        {selected && <Icon name="check" color={colors.GREEN} size={25} />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}


SelectionItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['square', 'circle']),
};

SelectionItem.defaultProps = {
  selected: false,
  onPress: () => { },
  type: 'square'
};


export default SelectionItem;
