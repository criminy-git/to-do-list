import React from 'react';
import ListItem from './ListItem';

class MyList extends React.Component {

    state = {
        toDos: this.props.initialList,
        newItem: ''
    };

    handleInputUpdate = (event) => {
        // start state above
        // set state here with event and the value we find in it
        //console log it to see every letter in state, and print out below in h3 for fun
        this.setState({ newItem: event.target.value })
        console.log(event.target.value)
    }; 

    handleAddItem = (event) => {
        // make a copy of the array existing in state, add new Item existing in state
        //set State with the above (will cause re-render)
        // change the map function! so it maps through state list now (change props to state,
        // AND change from initialList to toDos, which is our current state array)
        event.preventDefault();
        this.setState({
            toDos: [...this.state.toDos,
                { text: this.state.newItem, checked: false }
            ]
        })
    };

    render() {
        const mappedList = this.state.toDos?.map((item, index) =>
            (<ListItem item={item} key={index} completed={false} />)
        )

        return (
            <div className="mylist">
                <h1>To Do List</h1>
                <ul>
                   {mappedList}
                </ul>
                <br />
                <form>
                    <label><strong>Add To Do:</strong></label>
                    <br /><br />
                    <input type="text" onChange={this.handleInputUpdate} />
                    <button onClick={this.handleAddItem}>Add to list</button>
                </form>
                <h3>{this.state.newItem}</h3>
            </div>
        )
    }; // render
}; // myList

export default MyList;