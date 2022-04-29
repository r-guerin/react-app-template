import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { applyFunctionMock } from './mocks';

jest.mock('react-dom/client');

describe('container', () => {
  test('Should render application content in app element', async () => {
    const mockRender = jest.fn();
    const mockElement = { foo: 'bar' } as unknown as HTMLElement;

    jest.spyOn(document, 'getElementById').mockReturnValueOnce(mockElement);
    applyFunctionMock(createRoot).mockReturnValue({ render: mockRender } as unknown as Root);

    await import('./index');

    expect(createRoot).toHaveBeenCalledTimes(1);
    expect(createRoot).toHaveBeenCalledWith(mockElement);
    expect(mockRender).toHaveBeenCalledTimes(1);
    expect(mockRender).toHaveBeenCalledWith(<h1>This is my React template app</h1>);
  });
});
