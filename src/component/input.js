import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      width={width}
      placeholder={placeholder}
      maxLength={50}
      // ios 에서 먹는거같은디? 이런 속성은 docs 에서 적용되는 플랫폼을 꼭 체크해야되는듯
      autoCapitalize={'none'}
      autoCorrect={false}
      returnKeyType={'done'}
      keyboardAppearance={'dark'}
      //
      onBlur={onBlur}
    ></StyledInput>
  );
};

Input.prototype = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
