import 'react-native';
import React from 'react';
import * as redux from 'react-redux';
import {ProductDetail} from '../screens';
import {fireEvent, render} from '../shared/utils/test-utils';

const defaultProps = {
  params: {
    productDetail: {
      id: 2,
      colour: 'Stone',
      name: 'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
      price: 4,
      img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024',
    },
  },
};
const setup = () => {
  return render(<ProductDetail route={defaultProps} />);
};

describe('renders product detail view', () => {
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useDispatchMock.mockClear();
  });
  it('renders correctly', () => {
    const tree = setup().toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders product detail name correctly', async () => {
    const {findByText} = setup();
    const productName = await findByText(
      /Stone Ribbed Strappy Cut Out Detail Bodycon Dress/i,
    );
    expect(productName).toBeTruthy();
  });

  it('fires addProduct dispatch action', () => {
    const addProduct = jest.fn();
    useDispatchMock.mockReturnValue(addProduct);
    const {getByTestId} = setup();
    expect(addProduct).not.toHaveBeenCalled();
    fireEvent.press(getByTestId('addCartButton'));
    expect(addProduct).toHaveBeenCalled();
  });
});
