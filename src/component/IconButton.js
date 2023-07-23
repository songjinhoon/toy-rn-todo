import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { icons } from '../icon';

// tint-color 아이콘 색상과 글자 색상 일치를 위함

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 20px;
  tint-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.done : theme.text};
`;

const IconButton = ({ icon, item, onPress }) => {
  const _onPress = () => onPress(item.id);

  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} isCompleted={item.isCompleted}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  item: { isCompleted: false },
};

IconButton.prototype = {
  icon: PropTypes.oneOf(Object.values(icons)),
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default IconButton;
