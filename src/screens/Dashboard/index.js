import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/reducers/authentication';

import Button from '../../components/Button/index';

import styles from './styles';

const Dashboard = ({ navigation: { openDrawer, navigate } }) => {
  const dispatch = useDispatch();

  const { data }  = useSelector((state) => (state.authentication))

  console.log(['data',data])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.insideContainer}>
            <Text style={styles.text}>Bem Vindo</Text>
          </View>
          <Button
            title="TESTE"
            linearGradient={false}
            style={styles.modalBtn}
            onPress={() => {
              dispatch(AuthActions.loginRequest({testando:'algo'}));
            }}
          />
          <Button
            title="TESTE"
            loading={false}
            linearGradient={true}
            gradientColors={['#92A3FD', '#9DCEFF']}
          
            onPress={() => {
              dispatch(AuthActions.loginRequest({testando:'algo'}));
            }}
          />
          <View style={styles.insideContainer}>
            {
              data && 
              data?.results?.map((item, i) => (
                <View key={i}>
                  <Text>{JSON.stringify(item)}</Text>
                </View>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
