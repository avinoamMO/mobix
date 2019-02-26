import { observable, action } from 'mobx'
class Item {
    @observable name
    @observable completed = false
    @observable location = "SuperSell"
    constructor(name,location) {
        this.name = name
        this.location = location
    }
}

let potatoes = new Item("Potatoes")

class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action changeLocation = (name, newLocation) => {
        
        let item = this.list.find(i => i.name === name)
        item.location = newLocation
    } 
    @action addItem = (newName,newLocation) =>{
        this.list.push(new Item(newName, newLocation))
    }
    @action deleteItem = (name) =>{
        let index = this.list.findIndex(i => i.name === name)
        this.list.splice(index,1)
        
    }
}
let groceryList = new ShoppingList()
groceryList.list.push(potatoes)
groceryList.list.push(new Item("Corn"), new Item("Sombrero"))

export default groceryList
