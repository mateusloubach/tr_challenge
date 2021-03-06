import React from 'react';
import { Container } from './styles';

const Board: React.FC = ({ children }) => {
  return (
    <Container className="board">{children}</Container>
  )
}

export default Board;