import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/home';
import Class from './components/class/';

const Routes = createStackNavigator(
  {
    Home: Home,
    Class: Class,
  },
  {initialRouteName: 'Home', headerMode: 'none'},
);

export default createAppContainer(Routes);
