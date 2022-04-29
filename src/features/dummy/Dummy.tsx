import React, { FC, ReactElement } from 'react';

type Props = {
  children?: ReactElement;
};

export const Dummy: FC<Props> = ({ children }) => {
  return (
    <>
      <span data-testid="dummy-title">Dummy Title</span>
      <div data-testid="dummy-children">{children}</div>
    </>
  );
};
