import {createAppContainer} from 'react-navigation';
import {StatusBar} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import HomeScreen from './app/components/HomeScreen'
import Login from './app/components/Login'
import Signup from './app/components/Signup'
import SignupDetails from './app/components/SignupDetails'
import Studies from './app/components/Studies'

StatusBar.setBarStyle('light-content', true);

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: Login},
  Signup: {screen: Signup},
  SignupDetails: {screen: SignupDetails},
  Studies: {screen: Studies}
});

const App = createAppContainer(MainNavigator);

export default App;