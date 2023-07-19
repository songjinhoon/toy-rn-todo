import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { icons } from '../icon';

// tint-color 아이콘 색상과 글자 색상 일치를 위함

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 20px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon source={icon}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.prototype = {
  icon: PropTypes.oneOf(Object.values(icons)),
  onPress: PropTypes.func,
};

export default IconButton;
