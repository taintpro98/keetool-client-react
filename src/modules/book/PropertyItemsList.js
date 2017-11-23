import React from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class PropertyItemsList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.isInited = false;
        this.updatePropertyItemsOrder = this.updatePropertyItemsOrder.bind(this);
    }

    componentDidUpdate() {
        const containers = Array.prototype.slice.call(document.querySelectorAll(".property-items-container"));

        if (!this.isInited) {
            this.isInited = true;

            this.boardDrake = Dragula(containers);
            this.boardDrake.on('drop', function (el, target, source, sibling) {
                // this.boardDrake.cancel();

                let siblingOrder = -1;
                if (sibling) {
                    siblingOrder = Number(sibling.dataset.order);
                }
                let elOrder = -1;
                if (el) {
                    elOrder = Number(el.dataset.order);
                }
                console.log(sibling);
                console.log(el);
                this.updatePropertyItemsOrder(siblingOrder, elOrder);
                return true;
            }.bind(this));
        }

    }

    updatePropertyItemsOrder(siblingOrder, elOrder) {
        // let goodPropertyItems = this.props.task.good_property_items;
        console.log(siblingOrder);
        console.log(elOrder);
        // goodPropertyItems = goodPropertyItems.filter((item) => {
        //     return item.order !== siblingOrder;
        // });
        // console.log(goodPropertyItems);


    }

    render() {
        const {selectedGoodPropertyItems} = this.props;
        return (
            <ListGroup className="property-items-container">
                {
                    selectedGoodPropertyItems &&
                    selectedGoodPropertyItems.map((goodPropertyItem, index) => (
                        <ListGroupItem
                            data-order={goodPropertyItem.order}
                            key={index}>
                            <div style={{position: "relative"}}>
                                {goodPropertyItem.name}
                                <a style={{position: "absolute", right: 10}}
                                   className="text-rose"
                                   onClick={() => this.props.removeProperty(goodPropertyItem)}>
                                    &times;
                                </a>
                            </div>
                        </ListGroupItem>
                    ))
                }

            </ListGroup>
        );
    }
}

PropertyItemsList.propTypes = {
    selectedGoodPropertyItems: PropTypes.array.isRequired,
    removeProperty: PropTypes.func.isRequired
};

export default PropertyItemsList;