import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { Dummy } from './Dummy';

describe('Dummy', () => {
  const MockChildren: FC = () => (
    <>
      <div>Mock first child</div>
      <div>Mock second child</div>
    </>
  );

  const doRender = () => {
    return render(
      <Dummy>
        <MockChildren />
      </Dummy>,
    );
  };

  test('Should display title properly', () => {
    const { getByTestId } = doRender();

    const title = getByTestId('dummy-title');
    expect(title).toHaveTextContent('Dummy Title');
  });

  test('Should display children properly', () => {
    const { getByTestId } = doRender();

    const container = getByTestId('dummy-children');
    expect(container.children[0]).toHaveTextContent('Mock first child');
    expect(container.children[1]).toHaveTextContent('Mock second child');
  });
});
