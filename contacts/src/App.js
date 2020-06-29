import React,{Component} from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;
    const element = (
      <ol>
        {people.map(person => (
          <li>{person.name}</li>
        ))}
      </ol>
    );
    return element;
  }
}

class App extends Component{
    render(){
        return(
            <div className = "App">
            <ContactList contacts ={[
              { name: "Tyler" }, 
              { name: "Karen" }, 
              { name: "Adams" }]}/>
            <ContactList contacts = {[
              { name: "Karan" }, 
              { name: "Sofia" }, 
              { name: "Christy" }]}/>
            </div>
        )
    }
}

export default App;