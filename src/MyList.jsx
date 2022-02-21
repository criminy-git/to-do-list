import React from 'react';
import ListItem from './ListItem';

class MyList extends React.Component {

    state = {
        toDos: this.props.initialList
    };


    render() {
        const mappedInitialList = this.state.initialList.map((item, index) =>
        <ListItem item={item} key={index}/>)

        return (
            <div className="mylist">
                <h1>To Do List</h1>
                <ul>
                   {mappedInitialList}
                </ul>
            </div>
        )
    }; // render
}; // myList

export default MyList;