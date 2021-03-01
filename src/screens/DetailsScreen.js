import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';

const DetailsSreen = ({route, navigation, favHandler}) => {
  const {currentPokemon} = route.params;
  const pictureURL = `https://gabbyapp.com/${currentPokemon.picture}`;
  const [button, setButton] = useState(
    !currentPokemon.isFavourite ? 'Add to Favs' : 'Remove from Favs'
  );

  const pressHandler = () => {
    favHandler(currentPokemon.name);
    if (!currentPokemon.isFavourite) {
      setButton('Remove from Favs');
    } else {
      setButton('Add to Favs');
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.detailedContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: pictureURL,
          }}
        />
        <Text style={styles.pokemonTitle}>{currentPokemon.name}</Text>
      </View>
      <Text style={styles.description}>{currentPokemon.description}</Text>
      <View style={styles.specifications}>
        <Text style={styles.specificationsItem}>
          Height: {currentPokemon.height}
        </Text>
        <Text style={styles.specificationsItem}>
          Weight: {currentPokemon.weight}
        </Text>
        <Text style={styles.specificationsItem}>
          Type: {currentPokemon.type}
        </Text>
      </View>
      <Button
        buttonStyle={styles.detailsButton}
        title={button}
        onPress={pressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailedContainer: {
    flex: 1,
    backgroundColor: '#9d46ff',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pokemonTitle: {
    fontSize: 28,
    color: '#e3f2fd',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 210,
    height: 210,
  },
  description: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#e3f2fd',
  },
  specifications: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  specificationsItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e3f2fd',
  },
  detailsButton: {
    margin: 0,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#6200ea',
    color: '#e3f2fd',
  },
});

export default DetailsSreen;
