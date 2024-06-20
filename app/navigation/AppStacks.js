import { createStackNavigator } from "@react-navigation/stack";
import routes from "../routes";
import WelcomeScreen from "../screens/WelcomeScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import AppNavigator from "./AppNavigator";

const Stack=createStackNavigator();

const AppStacks=()=>{
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={routes.MAIN} component={AppNavigator} />
         <Stack.Screen name={routes.NEWS_DETAILS} component={NewsDetailsScreen} />
     </Stack.Navigator>
}

export default AppStacks;