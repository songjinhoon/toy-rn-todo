import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from '../icon';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;
const Contents = styled.Text`
  flex: 1;
  font-size: 20px;
  color: ${({theme}) => theme.text};
`;

const Task = ({ text }) => {
  return (
    <Container>
      <IconButton icon={icons.unCheck}></IconButton>
      <Contents>{text}</Contents>
      <IconButton icon={icons.edit}></IconButton>
      <IconButton icon={icons.delete}></IconButton>
    </Container>
  );
};

Task.prototype = {
  text: PropTypes.string.isRequired,
};

export default Task;
