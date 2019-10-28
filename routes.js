import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/home';
import Class1 from './components/classes/class-1';

const Routes = createStackNavigator(
  {
    Home: Home,
    Class1: Class1,
  },
  {initialRouteName: 'Home', headerMode: 'none'},
);

export default createAppContainer(Routes);
