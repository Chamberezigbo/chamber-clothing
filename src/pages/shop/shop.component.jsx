import React from "react";
import CollectionPreview from "../../components/preview-collection-component/collection.preview";
import ShopData from "./shop.data";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className= 'shop-pages'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id}  {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default ShopPage