import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

const Outhers = ({ navigation: { openDrawer, navigate } }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.insideContainer}>
            <Text style={styles.text}>Outros</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Outhers;
