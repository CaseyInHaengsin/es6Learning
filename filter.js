
var products = [

    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'}
];

var vegetables = [];

var result = products.filter((product) => {

    return product.type === 'fruit';

});
console.log(result);


