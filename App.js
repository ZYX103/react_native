import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import AddColor from "./src/components/AddColor";
import SquareScreen from "./src/components/SquareScreen";
import TextInputComp from "./src/components/TextInputComp";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    AddColor: AddColor,
    SquareScreen: SquareScreen,
    TextInputComp: TextInputComp,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Aplikacija",
    },
  }
);

export default createAppContainer(navigator);
