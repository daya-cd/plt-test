import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {
  Card,
  Title,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../shared/store';
import {IProduct} from '../shared/interfaces/product';

const ProductDetail = ({route}) => {
  const dispatch = useDispatch();
  const {addProduct} = bindActionCreators(actionCreators, dispatch);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const addToCart = (product: IProduct): void => {
    addProduct(product);
    setVisible(true);
  };
  const {productDetail} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{uri: productDetail.img}}
          style={styles.imageContainer}
          resizeMode="center"
        />
        <Card.Title
          titleNumberOfLines={2}
          titleStyle={styles.title}
          title={productDetail.name}
          subtitle={'Colour: ' + productDetail.colour}
          right={() => <Title>£{productDetail.price}</Title>}
          rightStyle={styles.rightStyle}
        />
        <Button
          mode="contained"
          testID="addCartButton"
          onPress={() => addToCart(productDetail)}>
          ADD TO CART
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Update:</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Item has been added to your basket.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  imageContainer: {
    height: 400,
  },
  title: {
    fontSize: 14,
  },
  rightStyle: {
    paddingRight: 20,
  },
});
