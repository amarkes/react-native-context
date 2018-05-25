import React from 'react';
import createReactContext from 'create-react-context';

const ProductContext = createReactContext({
    products: [],
    changeProducts: () => null,
    deleteProducts: () => null,
});

export const ProductConsumer = ProductContext.Consumer;

export class ProductProvider extends React.Component {

    state = {
        products: Array.from(new Array(10), (item, index) => this.createRow(index))
    };

    createRow(index) {
        return {
            name: `teste ${index}`,
            amount: `50${index}`,
            price: `${index},55`
        }
    }

    changeProducts = (products) => {
        this.setState({ products });
    };
    deleteProducts = (product) => {
        this.setState({ products: this.state.products.filter(prod => prod != product) });
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    products: this.state.products,
                    changeProducts: this.changeProducts,
                    deleteProducts: this.deleteProducts,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
