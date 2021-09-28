import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

interface IChildren {
  name: string;
  categories: string[];
}
interface IMenu {
  name: string;
  img: string;
  children: IChildren[];
}

const Menu: FC = () => {
  const [menu, setMenu] = useState<IMenu[]>([]);
  const fetcData = async () => {
    const resp = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/menu',
    );
    const data = await resp.json();
    setMenu(data);
  };

  useEffect(() => {
    fetcData();
  });
  return (
    <ScrollView style={[styles.container]}>
      <List.Section>
        {menu &&
          menu[0]?.children?.map(item => {
            return (
              <List.Accordion title={item.name}>
                {item.categories?.map(submenu => {
                  return <List.Item title={submenu} />;
                })}
              </List.Accordion>
            );
          })}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
});

export default Menu;
