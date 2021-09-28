/* eslint-disable no-shadow */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, List, Subheading} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../shared/store/reducers';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../shared/store';
import {IProduct} from '../shared/interfaces/product';
import {isEmpty} from '../shared/utils/objectHelpers';

const Basket = () => {
  const state = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();
  const {removeProduct} = bindActionCreators(actionCreators, dispatch);
  const removeItemFromCart = (product: IProduct): void => {
    removeProduct(product);
  };
  if (isEmpty(state.items)) {
    return (
      <View style={styles.noProduct}>
        <Subheading>
          No products in the basket. Please select from home
        </Subheading>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {state &&
          state.items.map((items, i) => (
            <List.Item
              key={i}
              title={items.name}
              titleNumberOfLines={2}
              description={
                'Price: £' + items.price + '  ' + 'Colour: ' + items.colour
              }
              left={() => (
                <Image
                  source={{uri: items.img}}
                  style={styles.imageContainer}
                  resizeMode="contain"
                />
              )}
              right={props => (
                <TouchableOpacity
                  onPress={() => removeItemFromCart(items)}
                  testID="deleteIcon">
                  <List.Icon {...props} color={Colors.redA700} icon="delete" />
                </TouchableOpacity>
              )}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  noProduct: {
    margin: 20,
  },
});

export default Basket;
