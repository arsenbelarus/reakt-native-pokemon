import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Pokemon = ({pokemon, navigation, favHandler}) => {
  const pictureURL = `https://gabbyapp.com/${pokemon.picture}`;

  return (
    <TouchableOpacity
      style={styles.pokemonPreview}
      onPress={() => {
        navigation.navigate('Details', {currentPokemon: pokemon});
      }}>
      <Image
        style={styles.pokemonPreviewImage}
        source={{
          uri: pictureURL,
        }}
      />
      <Text style={styles.pokemonPreviewText}>{pokemon.name}</Text>

      <Icon
        name={pokemon.isFavourite ? 'star' : 'star-outline'}
        size={50}
        color="yellow"
        onPress={() => favHandler(pokemon.name)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokemonPreview: {
    width: '100%',
    minHeight: 150,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#9d46ff',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderColor: '#e3f2fd',
    borderWidth: 2,
    borderRadius: 30,
  },
  pokemonPreviewImage: {
    width: 150,
    height: 150,
  },
  pokemonPreviewText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e3f2fd',
  },
});

export default Pokemon;
