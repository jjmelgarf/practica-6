function saludar()
{
    console.log("¡Hola, mundo!");
}
saludar();
function suma()
{
    return 2+2;
}
let resultado = suma();
console.log(resultado);
console.log(suma());
let a = 3;
function sumar(a){
    return a + 2;
}
console.log(sumar(a));
function sumita(b){
    return b + 2;
}
console.log(sumita(5));
function sumas(a,b){
    return a + b;
}
console.log(sumas(4,5));
console.log(typeof sumas);
function sumas(c, d){
console.log(arguments)
    return c + d;
}
res = sumas(5, 6, 1, 2, 3);
console.log(res);
//* segunda parte de funciones *//
/**
 * segunda parte de funciones
 */
let	total	=	0;
function	sumadito(x,	y)	{
let	aux	=	x + y;
total	=	aux;
return	total;
}
console.log(sumadito(10,12));
function	resta(x,	y)	{
let	aux	=	x	-	y;
total	=	aux;
return	total;
}
console.log(resta(10,12));