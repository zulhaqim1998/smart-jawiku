import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Jawiku from "./screens/Jawiku";
import HomeScreen from "./screens/HomeScreen";
import MenuHurufJawi from "./screens/MenuHurufJawi";
import HurufMainScreen from "./screens/HurufMainScreen";
import HurufScreen from "./screens/HurufScreen";
import Slide4Screen from "./screens/Slide4Screen";
import Slide5Menu from "./screens/Slide5Menu";
import Slide5Video from "./screens/Slide5Video";
import Slide6Menu from "./screens/Slide6Menu";
import Slide7Screen from "./screens/Slide7Screen";
import Slide9Screen from "./screens/Slide9Screen";
import Slide11Screen from "./screens/Slide11Screen";
import Slide12Screen from "./screens/Slide12Screen";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Jawiku: {screen: Jawiku},
    MenuHurufJawi: {screen: MenuHurufJawi},
    HurufMain: {screen: HurufMainScreen},
    Huruf: {screen: HurufScreen},
    Slide4: {screen: Slide4Screen},
    Slide5Menu: {screen: Slide5Menu},
    Slide5Video: {screen: Slide5Video},
    Slide6Menu: {screen: Slide6Menu},
    Slide7: {screen: Slide7Screen},
    Slide9: {screen: Slide9Screen},
    Slide11: {screen: Slide11Screen},
    Slide12: {screen: Slide12Screen}
}, {
    initialRouteName: 'Slide12',
    headerLayoutPreset: 'center',
    // defaultNavigationOptions: {
    //   headerTintColor: '#fff',
    //   headerStyle: {
    //     backgroundColor: '#000',
    //   },
    //
    // }
});

const App = createAppContainer(MainNavigator);

export default App;

