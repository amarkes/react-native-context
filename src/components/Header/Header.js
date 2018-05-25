import React from "react";
import { StatusBar, View } from "react-native";
import { Header, Left, Button, Title, Right, Icon, Body } from "native-base";

export default class HeaderComponent extends React.Component {

    render() {
        return (
            <View>
                {this.props.showHeader &&
                    <Header>
                        <Left>
                            {this.props.navigation &&
                                <Button
                                    transparent
                                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                                    <Icon name="menu" />
                                </Button>
                            }
                        </Left>
                        <Body>
                            <Title>{this.props.title || 'iRc'}</Title>
                        </Body>
                        <Right />
                    </Header>
                }
            </View>
        );
    }

}