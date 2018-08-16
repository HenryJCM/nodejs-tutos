
let subscriptores = 22000;

module.exports.saludar = function(){
    console.log('hello world');
};

/*
module.exports = {
    subs : subscriptores,
    saludar : function(){console.log('hello world2');}
}*/


module.exports = {
    subs : subscriptores,
    saludar : () => {console.log('hello world2');},
    sumar : (a, b) =>  a + b,
    mostrar : a => a + 10
}