import React, {FC, useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import {Subheading} from 'react-native-paper';
import Products from '../components/products';
import {IProduct} from '../shared/interfaces/product';

const Home: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>();

  const fetcData = async () => {
    const resp = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
    if (!resp.ok) {
      setError('Something went wrong');
    } else {
      const data = await resp.json();
      setProducts(data);
      setError(null);
    }
  };

  useEffect(() => {
    fetcData();
  }, []);

  const renderItem = useCallback(({item}) => <Products product={item} />, []);
  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {!products && <Text> Loading...</Text>}
        {products && (
          <FlatList
            data={products}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        )}
        {error && (
          <View style={styles.noProduct}>
            <Subheading>Something went wrong in API call</Subheading>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noProduct: {
    margin: 20,
  },
});

export default Home;
