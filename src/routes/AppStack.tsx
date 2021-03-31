import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import NewsList from '../pages/NewsList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>  
                <Screen name="Landing" component={Landing} />
                <Screen name="NewsList" component={NewsList} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;