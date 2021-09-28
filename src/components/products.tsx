/* eslint-disable no-shadow */
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {IProduct} from '../shared/interfaces/product';
import {useNavigation} from '@react-navigation/native';

interface Props {
  product: IProduct;
}

const Products: FC<Props> = ({product}) => {
  const navigation = useNavigation();

  return (
    <Card
      style={styles.container}
      onPress={() =>
        navigation.navigate('ProductDetail', {productDetail: product})
      }>
      <Card.Cover source={{uri: product.img}} resizeMode="contain" />
      <Card.Title
        titleNumberOfLines={2}
        titleStyle={styles.title}
        title={product.name}
        subtitle={'Colour: ' + product.colour}
        right={() => <Title>£{product.price}</Title>}
        rightStyle={styles.rightStyle}
      />
    </Card>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  rightStyle: {
    paddingRight: 20,
  },
});
