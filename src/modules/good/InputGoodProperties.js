import React from 'react';
import PropTypes from 'prop-types';
import GoodPropertyItem from "./GoodPropertyItem";

class InputGoodProperties extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.setValue = this.setValue.bind(this);
        this.setUnit = this.setUnit.bind(this);
    }

    setUnit(name, unit) {
        let goodPropertiesOutput = {...this.props.goodPropertiesOutput};
        goodPropertiesOutput[name].unit = unit;
        this.props.updateGoodPropertiesOutput(goodPropertiesOutput);
    }

    setValue(name, value) {
        let goodPropertiesOutput = {...this.props.goodPropertiesOutput};
        goodPropertiesOutput[name].value = value;
        this.props.updateGoodPropertiesOutput(goodPropertiesOutput);
    }

    render() {
        return (
            <div>
                {
                    this.props.goodProperties.map((property) => {
                        return (
                            <GoodPropertyItem
                                setValue={this.setValue}
                                setUnit={this.setUnit}
                                key={property.id}
                                property={property}/>
                        );
                    })
                }
            </div>
        );
    }
}

InputGoodProperties.propTypes = {
    goodPropertiesOutput: PropTypes.object.isRequired,
    goodProperties: PropTypes.array.isRequired,
    updateGoodPropertiesOutput: PropTypes.func.isRequired
};

export default InputGoodProperties;