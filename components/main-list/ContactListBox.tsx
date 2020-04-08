import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './ListStyles'

export function ContactListBox({title}){
  return (
    <View>
      <View style={styles.break}/>
      <Text style={styles.box}>{title}</Text>
    </View>
  );
}
