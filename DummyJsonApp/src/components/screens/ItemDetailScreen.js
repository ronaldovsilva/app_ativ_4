import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getItemDetail } from '../api/dummyjson';

const ItemDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetail = async () => {
      const data = await getItemDetail(id);
      setItem(data);
    };
    fetchItemDetail();
  }, [id]);

  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Price: ${item.price}</Text>
    </View>
  );
};

export default ItemDetailScreen;