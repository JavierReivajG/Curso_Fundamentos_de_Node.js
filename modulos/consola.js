console.log('algo')
console.info('algo')
console.warn('algo')




var tabla = [
{
    a: 1,
    b: 'z',
},
{
    a: 2,
    b: 'otra'
}
]
console.table(tabla)



console.log('Conversacion:')
console.group('conver')
console.log('hola')
console.log('blablabla')
console.group('conver')
console.log('hola')
console.log('blablabla')
console.log('Adios')
console.groupEnd('conver')
console.group('conver')
console.log('hola')
console.log('blablabla')
console.log('Adios')
console.groupEnd('conver')
console.log('Adios')
console.groupEnd('conver')

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')