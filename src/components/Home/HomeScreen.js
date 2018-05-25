import React from "react";
import { StatusBar } from "react-native";
import { ListView } from 'react-native';
import { Container, Content, Text, View, SwipeRow, Icon, Button, List, ListItem } from "native-base";
import HeaderComponent from '../Header/Header';
import { ProductConsumer } from '../../core/providers/Products/Products';
import { StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  handlePressDelete(product, secId, rowId, rowMap, deleteProducts) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    deleteProducts(product);
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <ProductConsumer>
        {({ products, deleteProducts }) => (
          <Container>
            <HeaderComponent
              navigation={this.props.navigation}
              title='Home Screen'
              showHeader={true} />
            <Content padder>
              <List
                dataSource={this.ds.cloneWithRows(products)}
                renderRow={data =>
                  <ListItem>
                    <Text> {data.name} </Text>
                  </ListItem>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.handlePressDelete(data, secId, rowId, rowMap, deleteProducts)}>
                    <Icon active name="trash" />
                  </Button>}
                disableRightSwipe={true}
                rightOpenValue={-75}
                closeOnRowBeginSwipe={true}
              />
              {/* {
                products.map((item, key) => (
                  <SwipeRow
                    key={key}
                    rightOpenValue={-75}
                    body={
                      <View style={styles.itens}>
                        <View>
                          <Text style={styles.title}>{item.name}</Text>
                          <Text style={styles.subtitle}>{item.amount} - {item.price}</Text>
                        </View>

                        <Icon active name="arrow-forward" />
                      </View>
                    }
                    right={
                      <Button danger onPress={() => this.handlePressDelete(item, deleteProducts)}>
                        <Icon active name="trash" />
                      </Button>
                    }
                  />
                ))
              } */}
            </Content>
          </Container>
        )}
      </ProductConsumer>

    );
  }
}

const styles = StyleSheet.create({
  fullPage: {
    width: '100%'
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 13,
  },
  itens: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  }
});