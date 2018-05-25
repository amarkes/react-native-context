import React from "react";
import { StatusBar } from "react-native";
import { Container, Content } from "native-base";
import HeaderComponent from '../Header/Header';
export default class ListScreen extends React.Component {
    render() {
        return (
            <Container>
                <HeaderComponent
                    navigation={this.props.navigation}
                    title='List Screen'
                    showHeader={true} />
                <Content padder>

                </Content>
            </Container>
        );
    }
}

