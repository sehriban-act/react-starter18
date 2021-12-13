import React from 'react';
import { Button } from './button/Button.styles';
import Wrapper from './wrapper/Wrapper';

const StyledComponents = () => {
  return (
    <Wrapper bgColor="wheat">
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
