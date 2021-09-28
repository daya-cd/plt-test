/**
 * @format
 */

import 'react-native';
import React from 'react';
import * as redux from 'react-redux';
import {Basket} from '../screens';
import {cleanup, fireEvent, render} from '../shared/utils/test-utils';

describe('renders basket view', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  afterEach(cleanup);
  useSelectorMock.mockReturnValue({
    items: [
      {
        id: 1,
        colour: 'Black',
        name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
        price: 10,
        img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
      },
    ],
  });
  it('renders correctly', () => {
    const tree = render(<Basket />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders product name correctly', async () => {
    const {findByText} = render(<Basket />);
    const productName = await findByText(
      /Black Sheet Strappy Textured Glitter Bodycon Dress/i,
    );
    expect(productName).toBeTruthy();
  });
  it('renders price information correctly', async () => {
    const {findByText} = render(<Basket />);
    const productPrice = await findByText(/10/i);
    expect(productPrice).toBeTruthy();
  });
  it('fires removeProduct dispatch action', () => {
    const removeProduct = jest.fn();
    useDispatchMock.mockReturnValue(removeProduct);
    const {getByTestId} = render(<Basket />);
    expect(removeProduct).not.toHaveBeenCalled();
    fireEvent.press(getByTestId('deleteIcon'));
    expect(removeProduct).toHaveBeenCalled();
  });
  it('renders no product text if basket is empty', async () => {
    useSelectorMock.mockReturnValue({items: []});
    const {findByText} = render(<Basket />);
    const productPrice = await findByText(
      /No products in the basket. Please select from home/i,
    );
    expect(productPrice).toBeTruthy();
  });
});
