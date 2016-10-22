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
        type: "",
        height: 600,
        backgroundColor: ""
    }
    
    static propTypes = {
        item: React.PropTypes.object.isRequired,
        type: React.PropTypes.string.isRequired,
        backgroundColor: React.PropTypes.string,
        height: React.PropTypes.number
    }

    /*
        Clean this up!
    */

    render() {

        const { height, type, item, backgroundColor} = this.props;

        const divStyle = {
            height: height + 'px'
        };

        if(item.hasOwnProperty('src') && item.src != ""){
            divStyle.backgroundImage = 'url(' + this.props.item.src + ')';
        }

        if(backgroundColor != ""){
            divStyle.backgroundColor = backgroundColor;
        }

        return (
            <div className='carouselitem' style={divStyle}>
                {this.renderContents(type)}
            </div>
        );
    }

    onItemClick(e) {
        e.preventDefault();
        // window.alert('You clicked ' + this.props.item.href);

        location.replace(this.props.item.href);
    }

    renderContents(type) {
        switch(type){
            case 'hero':
                return (
                  <div onClick={this.onItemClick} className='carouselitem__link'>
                    <div className='carouselitem__link__content'>
                        {this.renderHeader(this.props.item.title)}
                        {this.renderDescription(this.props.item.description)}
                        {this.renderCTA(this.props.item.cta)}
                    </div>
                </div>
                );
                break;
            case 'promo':
                return (
                  <div onClick={this.onItemClick} className='carouselitem__link'>
                    <p className='carouselitem__link__promo'>{this.props.item.description}</p>
                </div>
                );
                break;
        }
    }

    renderHeader(prop){
        if(prop != undefined && prop != ''){
            return <h2 className='carouselitem__link__content__heading'>{prop}</h2>;
        }else{
            return '';
        }
    }

    renderDescription(prop){
        if(prop != undefined && prop != ''){
            return <p>{prop}</p>;
        }else{
            return '';
        }
    }

    renderCTA(prop){
        if(prop != undefined && prop != ''){
            return <button type="button" className="btn btn-hero">{prop}</button>;
        }else{
            return '';
        }
    }

    /*
        /Clean this up!
    */
}

export default CarouselItem;