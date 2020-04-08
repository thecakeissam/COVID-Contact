import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ContactListBox } from './ContactListBox';
import styles from './ListStyles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Regina O\'Brien',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sam MacGinty',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Luigi Coltorti',
  },
];

export class ContactList extends Component {
  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ContactListBox title={item.title} />}
        keyExtractor={item => item.id}
      />
    );
  }
}
