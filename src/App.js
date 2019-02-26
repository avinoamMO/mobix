import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

@observer
class App extends Component {

  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  changeLocation = e =>{
    let newLocation = prompt("enter new location")
    this.props.store.changeLocation(e.target.name,newLocation)
  }
  
  deleteItem = e =>{
    this.props.store.deleteItem(e.target.name)
  }
  addItem = e =>{
    let newName = prompt("Enter name")
    let newLocation = prompt("Enter location")
    this.props.store.addItem(newName,newLocation)

}
  render() {
    return (
      <div className="App">
      <DevTools />
      <button name="addItem" onClick={this.addItem}>Add Item</button>
      {this.props.store.list.map(i => {
          return <div><input type="checkbox" value={i.name} onClick = {this.checkItem} 
          />
                 {i.completed ? <s>{i.name}</s> : i.name} {i.location} 
                 <button name={i.name} onClick={this.changeLocation}>edit</button>
                 <button name={i.name} onClick={this.deleteItem}>X</button>
                   </div>}
          )}

      </div>
      
    );
  }
}

export default App;
