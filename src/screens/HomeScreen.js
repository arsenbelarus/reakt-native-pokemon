import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Pokemon from './Pokemon';

const HomeScreen = ({navigation, pokemons, favHandler}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Pokemons List</Text>
        <Button
          title="Go to Favs"
          buttonStyle={styles.headerButton}
          onPress={() => navigation.navigate('Favourites')}
        />
      </View>
      <ScrollView>
        {pokemons &&
          pokemons.map((pok) => {
            return (
              <Pokemon
                key={pok.name}
                pokemon={pok}
                navigation={navigation}
                favHandler={favHandler}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#6200ea',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#e3f2fd',
  },
  headerButton: {
    margin: 0,
    backgroundColor: '#9d46ff',
    color: '#e3f2fd',
    minWidth: 125,
    borderRadius: 20,
  },
});

export default HomeScreen;
