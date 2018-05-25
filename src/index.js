import React, { Component } from "react";

// Pages
import HomeScreen from "./components/Home/HomeScreen";
import ListScreen from "./components/ListScreen/ListScreen";
// /Pages

import SideBar from "./components/SideBar/SideBar";

import { DrawerNavigator } from "react-navigation";
const AppScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        List: { screen: ListScreen }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default AppScreenRouter;

