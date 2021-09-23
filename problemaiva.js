let vv=parseInt(prompt("Dime el precio de venta"));

iva=vv*parseFloat(0.16);
pv=vv+iva;

document.write(`Este es el precio mas iva ${pv}`);

