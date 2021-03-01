import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';

const Stack = createStackNavigator();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const favHandler = (name) => {
    setPokemons((prevState) =>
      prevState.map((pok) =>
        pok.name === name ? {...pok, isFavourite: !pok.isFavourite} : pok,
      ),
    );
  };

  useEffect(() => {
    fetch('https://gabbyapp.com/pockemons/data.json')
      .then((response) => response.json())
      .then((data) => {
        const finalData = data.map((pok) => {
          return {...pok, isFavourite: false};
        });
        setPokemons([...finalData]);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  if (errorMessage)
    return (
      <Text style={styles.errorMessage}>
        Ooops, something went wrong... Try again
      </Text>
    );

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0a00b6',
          },
          headerTintColor: '#e3f2fd',
          headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        }}>
        <Stack.Screen name="Home" options={{title: 'Home'}}>
          {(props) => (
            <HomeScreen
              {...props}
              pokemons={pokemons}
              favHandler={favHandler}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details" options={{title: 'Details'}}>
          {(props) => <DetailsScreen {...props} favHandler={favHandler} />}
        </Stack.Screen>
        <Stack.Screen name="Favourites" options={{title: 'Favourites'}}>
          {(props) => <FavouritesScreen {...props} pokemons={pokemons} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    flex: 1,
    backgroundColor: 'red',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    paddingTop: 100,
  },
});

export default App;
