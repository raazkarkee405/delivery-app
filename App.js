import "react-native-url-polyfill/auto";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  BasketScreen,
  DeliveryScreen,
  HomeScreen,
  PreparingOrderScreen,
  RestaurantScreen,
} from "./screens";
import { Provider } from "react-redux";
import { store } from "./app/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen
            name="BasketScreen"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="DeliveryScreen"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
