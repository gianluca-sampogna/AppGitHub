import {NavigationContainer} from '@react-navigation/native';

import TabRoutes from './Tab.routes';
import StackRoutes from './Stack.routes'
import { useContext } from 'react';
import LoginContext from '../contexts/Login';

export default function Routes(){
    const loginContext = useContext(LoginContext)

    return(
        <NavigationContainer>
            {loginContext.auth ? <TabRoutes />: <StackRoutes /> }
        </NavigationContainer>
    )
}