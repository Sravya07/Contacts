import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactList extends Component{
    render(){
        const people = [
            {name: 'Tyler'},
            {name:'Chris'}, 
            {name: 'Adam'}]
        
        const element = <ol>
            {people.map(person => <li key = {person.name}> {person.name}</li>)}
        </ol>
        
        return element;
    }
}


ReactDOM.render(<ContactList/>, document.getElementById('root'));