import {createDrawerNavigator} from 'react-navigation-drawer';
import AskLandfills from '../screens/AskLandfills';
import MyProfileScreen from '../screens/MyProfileScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    AskLandfills : {
        screen : AskLandfills
    },
    MyProfileScreen : {
        screen : MyProfileScreen
    },
},
{
    contentComponent : CustomSideBarMenu
},
{
    initialRouteName : 'MyProfileScreen'
})