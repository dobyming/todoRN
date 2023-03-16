import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator(); //Screen, Navigator 속성 객체 반환 함수

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options = {{ headerShown: false}} name="Login" component={LoginScreen}/>
          <Stack.Screen options = {{ headerShown: false}} name="Main" component={MainScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}