import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

// Initial Page
import Welcome from "./pages/welcome";
import FindServer from "./pages/findServer";
import LostPassword from "./pages/lostPassword";

// Map Page
import Map from "./pages/map";

// Details Page
import Details from "./pages/details";
import Log from "./pages/log";
import ConfigIP from "./pages/configIP";
import ListWifi from "./pages/listWifi";
import AddWifi from "./pages/addWifi";

// Profile Page
import Profile from "./pages/profile";
import ChangePassword from "./pages/changePassword";

import { colors } from "./styles";

const Routes = StackNavigator(
    {
        Welcome: { screen: Welcome },
        FindServer: { screen: FindServer },
        LostPassword: { screen: LostPassword },
        ConfigIP: { screen: ConfigIP },
        Log: { screen: Log },
        ListWifi: { screen: ListWifi },
        AddWifi: { screen: AddWifi },
        ChangePassword: { screen: ChangePassword },
        User: {
            screen: TabNavigator(
                {
                    Mapa: { screen: Map },
                    Details: { screen: Details },
                    Profile: { screen: Profile }
                },
                {
                    tabBarPosition: "bottom",
                    tabBarOptions: {
                        showIcon: true,
                        showLabel: false,
                        activeTintColor: colors.white,
                        indicatorStyle: { backgroundColor: "transparent" },
                        inactiveTintColor: colors.whiteTransparent,
                        style: {
                            backgroundColor: colors.secundary
                        }
                    }
                }
            )
        }
    },
    {
        initialRouteName: "Welcome"
    }
);
export default Routes;
