import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Pokemon from './Pokemon';

const FavouritesScreen = ({navigation, pokemons}) => {
  const favouritePokemons = pokemons.filter((pok) => pok.isFavourite);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.listHeader}>Favourites</Text>
      <ScrollView>
        {favouritePokemons.length ? (
          favouritePokemons.map((pok) => {
            return (
              <Pokemon key={pok.name} pokemon={pok} navigation={navigation} />
            );
          })
        ) : (
          <Text style={styles.text}>
            There is nothing here... Add something on Home Screen
          </Text>
        )}
      </ScrollView>
      <Button
        title="Back to Home"
        buttonStyle={styles.favButton}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#9d46ff',
  },
  listHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 20,
  },
  favButton: {
    margin: 0,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#6200ea',
    color: '#e3f2fd',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});
export default FavouritesScreen;
