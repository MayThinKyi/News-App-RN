import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../routes";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SavedScreen from "../screens/SavedScreen";
import SearchScreen from "../screens/SearchScreen";
import { Entypo, Feather } from "@expo/vector-icons";
import colors from "../utils/colors";

const Tab=createBottomTabNavigator();

const AppNavigator=()=>{
    return <Tab.Navigator  screenOptions={{headerShown:false,tabBarHideOnKeyboard:true,tabBarActiveTintColor:colors.green}} >
        <Tab.Screen name={routes.HOME} component={HomeScreen} options={{
    tabBarIcon:({size,color})=><Entypo name="home" size={size} color={color} />
}} />
<Tab.Screen name={routes.DISCOVER} component={DiscoverScreen}   options={{
    tabBarIcon:({size,color})=><Entypo name="compass" size={size} color={color} />
}} />
<Tab.Screen name={routes.SAVED} component={SavedScreen}  options={{
    tabBarIcon:({size,color})=><Entypo name="bookmark" size={size} color={color} />
}} />
<Tab.Screen name={routes.SEARCH} component={SearchScreen}  options={{
    tabBarIcon:({size,color})=><Feather name="search" size={size} color={color} />
}} />
     </Tab.Navigator>
}

export default AppNavigator;

 