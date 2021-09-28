import React, {ReactElement} from 'react';
import {
  render as rtlRender,
  RenderOptions,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from '../store';

export interface WrapperProps {
  children: ReactElement;
}

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper = ({children}: WrapperProps): ReactElement => {
    return (
      <Provider store={store}>
        <PaperProvider>{children}</PaperProvider>
      </Provider>
    );
  };
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {render};
