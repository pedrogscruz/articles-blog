import React from 'react';

type ConditionWrapperProps = {
  condition: boolean;
  wrapper: (props: { children: React.ReactNode }) => React.ReactNode;
  children: React.ReactNode;
};

const ConditionWrapper: React.FC<ConditionWrapperProps> = ({ condition, wrapper, children }) => {
  return condition ? wrapper({ children }) : <>{children}</>;
};

export default ConditionWrapper;
