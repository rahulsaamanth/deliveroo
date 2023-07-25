import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import store from './store';
import BasketScreen from './screens/BasketScreen';
import { Easing } from 'react-native';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';



// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator()

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

// const closeConfig = {
//   animation: "timing",
//   config:{
//     duration: "200",
//     easing: Easing.linear, 
//   }
// }

const customTransition = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	transitionSpec: {
		open: TransitionSpecs.TransitionIOSSpec,
		close: TransitionSpecs.TransitionIOSSpec,
	},
	cardStyleInterpolator : ({current, next, layouts}) => {
		return{
			cardStyle:{
				transform:[
				 {
					translateX: current.progress.interpolate({
						inputRange: [0, 1],
						outputRange: [layouts.screen.width, 0],	
					}),
				  },
				  {
					rotate: current.progress.interpolate({
						inputRange: [0, 1],
						outputRange:["180deg", "0deg"],
					}),
				   },
				  {
					scale: next ?
						next.progress.interpolate({
							inputRange: [0,1],
							outputRange: [1, 0.7],
						}) : 1,
				  },
				]
			}
		}
	}
}

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator >
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown: false}}/>
            
            {/* screenOptions={{ 
              transitionSpec:{
                 open:config,
                 close:closeConfig,
              },
              cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
              ...TransitionPresets.ModalPresentationIOS,
              gestureEnabled: true,
              gestureDirection: 'vertical',
              ...customTransition
            }} */}
           
              <Stack.Screen 
                name="Basket" component={BasketScreen}  
                options={{headerShown: false, gestureEnabled: true, gestureDirection:'vertical', ...TransitionPresets.ModalPresentationIOS,}}
              />
			<Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS}}/>
			<Stack.Screen name="Delivery" component={DeliveryScreen} options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;