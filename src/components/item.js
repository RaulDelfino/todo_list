
class Item{
    
    static lastId = 0; // Variavel para Objeto

    constructor(text){
        this.id = Item.lastId++;
        this.text = text;
        this.done = false
    }
}
export default Item