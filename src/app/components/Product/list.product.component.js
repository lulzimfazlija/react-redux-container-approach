import React from 'react';
import './product.style.scss';
import LoadingBar from "../LoadingStatus/loading.component";
import Button from "reactstrap/es/Button";
import {PRODUCT_CALLBACK_ENUMS} from "./callbacks";

class ListProductComponent extends React.Component {

    componentDidMount() {
        
    }

    render() {
        const {items, loading, error} = this.props.products;
        return (
            <div className="ListProductComponent">
                <h2>ListProductComponent</h2>
                <Button color="danger" onClick={() => this.props.callbackHandler(PRODUCT_CALLBACK_ENUMS.FETCH_PRODUCTS, 1)}>Load Products 1</Button>
                <Button color="danger" onClick={() => this.props.callbackHandler(PRODUCT_CALLBACK_ENUMS.FETCH_PRODUCTS, 2)}>Load Products 2</Button>
                <LoadingBar loading={loading}/>
                <div>
                    <ul>
                        {
                            items.map((item, index) =>
                                <li key={index}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListProductComponent
