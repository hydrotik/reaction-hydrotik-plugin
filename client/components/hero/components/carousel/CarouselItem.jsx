import React, { Component, PropTypes } from "react";


/**
 * @class CarouselItem
 * @augments {React.Component}
 */
export class CarouselItem extends Component {

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    static defaultProps = {
        item: {
            title: "",
            description: "",
            href: "",
            src:""
        },
        height: 600
    }
    
    static propTypes = {
        item: React.PropTypes.object.isRequired,
        height: React.PropTypes.number
    }

    render() {

        const { height } = this.props;

        const divStyle = {
            backgroundImage: 'url(' + this.props.item.src + ')',
            height: height + 'px'
        };

        return (
            <div className='carouselitem' style={divStyle}>
                <div onClick={this.onItemClick} className='carouselitem__link'>
                    <div className='carouselitem__link__content'>
                        <h2 className='carouselitem__link__content__heading'>
                            {this.props.item.title}
                        </h2>
                        <p>{this.props.item.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    onItemClick(e) {
        e.preventDefault();
        window.alert('You clicked ' + this.props.item.href);
    }
}

export default CarouselItem;