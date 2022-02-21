import React from 'react';

class ListItem extends React.Component {

    state = {
        checked : false
    }

    // add checkbox in ListItem to every item
    // onclick of checkbox make checked true instead of false
    // in order to do so, save it into state first as currently a props
    // then change it onclick to true
    // put item inside a span and change the style of span with a ternary
    handleCheckboxClick = () => {
       this.setState({ checked: true})
    }


    render() {
        return (
            <li>
                <span style={
                    this.state.checked ?
                        { textDecoration: 'line-through' }
                        :
                        {textDecoration: 'none'}
                    }>
                    
                    {this.props.item.text}
                </span>
        
                <input type="checkbox" onClick={this.handleCheckboxClick}></input>
            </li>
        )
    };
};

export default ListItem;