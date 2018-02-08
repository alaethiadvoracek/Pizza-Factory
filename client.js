class Pizza {
    constructor(toppings = ['cheese']){
        this.toppings = toppings;
        this.basePrice = 10.00;
        this.orderTotal = this.Cost();
    }
        pizzaDescription(){
            let toppingOptions = '';
            for(var i=0;i<this.toppings.length; i++){
                toppingOptions += this.toppings[i];
            }
            return toppings;
        }   
        toppingCount(){
            return this.toppings.length;
        }
        toppingCost(){
            if(this.toppings.length <= 1){
                return 0;
            }else{
                return this.toppings.length * 0.99;
            }
            
            
        }
        Cost(){
            return this.orderTotal + this.toppingCost();
    
        }
}
let myOrder = new Pizza(['cheese','pepperoni','sausage']);

console.log(myOrder);
console.log(myOrder.toppings);
console.log(myOrder.toppingCount());
let secondPizza = new Pizza(['cheese','sausage']);
class Order {
    constructor(){
        this.orderList = [];
        this.orderTotal = this.calculateTotal();
    }
        addToOrder(pizzaOrder){
            this.orderList.push(pizzaOrder)
        }
        calculateOrder(){
            let orderCost = 0;
            for(var i = 0; i<this.orderList.length; i++){
                orderCost += this.orderList[i].orderTotal;
            }
            console.log('orderTotal', orderTotal);
            return orderTotal;
        }
    
}
// let myOrder = new Order([pepPizza, sausPizza],cost);
// console.log(myOrder);