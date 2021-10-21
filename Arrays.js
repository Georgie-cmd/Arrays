const chalk = require('chalk')




/* Just Array */
let array1 = ['Mango', 'Pineapple', 'Avocado']

let array2 = []

console.log(chalk.cyan(array1))

console.log(array1)

console.log(chalk.cyanBright(array1.length))

console.log(chalk.yellowBright(array1[0]) + ' and ' + chalk.yellow(array1[1]))

console.log(chalk.yellow(array1[array1.length - 2]) + ' is sweetie')


array1.forEach((item, index) => {
    console.log(chalk.greenBright(item), '-', index)
})


array1.forEach(elem => {
    array2.push(elem)
})

console.log(array2)


console.log(chalk.green(array2.pop()) + ' - the last element was deleted', array2) //removing the last element

console.log(chalk.yellowBright(array2.shift()) + ' - the first element was deleted', array2) //removing the first element

array2.unshift('Watermelon') //adding a new alement to the beginning of the array

console.log(array2)


console.log(chalk.red(array2.indexOf('Watermelon')) + ' - Watermelon\'s index')

array2.push('Banana') //adding an element to the end of the array
console.log(array2)

const pos = array2.indexOf('Watermelon')
array2.splice(pos, 1)
console.log(array2)

console.log(array2.splice(1))


let array3 = ['Potato', ' Carrot', 'apple']

console.log(array3)

const deleteSome = 0, n = 2

const removing = array3.slice(deleteSome, n)

console.log(removing)


const copy = removing.slice()

console.log(chalk.red(copy))




/* Methods */



/*

Array.concat()

*/
const array4 = ['main array']
const array5 = ['sourced array']
const arr = ['zzz']

const arr1 = array4.concat(array5, arr, ['sss'])
console.log(arr1)



/*

array.copyWithin()

*/
let array6 = ['apple', 'pineapple', 'mango', 'watermelon']

array6.copyWithin(0, 2, 3) //target, start, end
console.log(array6)



/*

array.entries()

*/
const array7 = ['one', 'two', 'three']

const it = array7.entries()

console.log(it.next().value) //next return next element with props: done & value
console.log(it.next().value)
console.log(it.next().value)



/*

array.every()

*/

const array8 = ['mango', 'mango']

const array9 = ['apple', 'mango']

console.log(array8.every(elem => elem === 'mango'))

console.log(array9.every(elem => elem === 'apple'))


//Another one example
const array10 = [1, 2, 3]

function isEqualsTo(elem) {
    return elem <= 18
}

console.log(chalk.greenBright(array10.every(isEqualsTo)))



/*

array.fill()

*/
const array11 = [3, 3, 1, 1, 1]

console.log(array11.fill('mango', 2, 3)) //value, start, end
console.log(array11.fill('pineapple', 4, 5))



/*

array.filter()

*/
const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 13]

function clearSome(element) {
    return element >= 13
}

console.log(array12.filter(clearSome))

console.log(array12.filter(elem => elem >= 13))



/*

array.find()

*/
const array13 = [
    {
        name: 'Vanya',
        email: 'prodbypalmary@mail.ru'
    },

    {
        name: 'Grisha',
        email: 'gringosb@gmail.com'
    },

    {   
        name: 'Danil',
        email: 'norkin@mail.ru'
    }
]

function findEmail(elem) {
    return elem.name === 'Vanya'
}

console.log(array13.find(findEmail).email)



/*

array.findIndex()

*/
const array14 = [1, 2, 3, 13, 19]

function looking(elem) {
    return elem === 13
}

console.log(array14.findIndex(looking))



/*

array.flat()

*/
const array15 = [
    ['array'],
    'array1',
    [
        'array2', 
        ['array3']
    ]
]

console.log(array15.flat(2))



/*

array.flatMap()

*/
const array16 = [19]
console.log(array16.flatMap(elem => [[elem * 13]]))



/*

array.forEach()

*/
const array17 = [
    {
        name: 'Vanya',
        email: 'prodbypalmary@gmail.com',
        isOnline: true
    },

    {
        name: 'Grisha',
        email: 'gringosb@gmail.com',
        isOnline: true
    },

    {
        name: 'Danil',
        email: 'norkin@mail.ru',
        isOnline: true
    }
]

const mainInfo = []

array17.forEach(elem => {
    mainInfo.push(elem.name + ': (' + elem.email + ')')
})

console.log(mainInfo)



/*

array.from()

*/
console.log(Array.from('foo'));

const array18 = [1, 2, 3, 3, 13, 13, 19, 13, 19, 3, 1, 2]

//const res = new Set(array18)

const res = Array.from(new Set(array18))

console.log(res)



/*

array.includes()

*/
const array19 = ['mango', 'pineapple']

console.log(array19.includes('mango'))



/*

array.indexOf()

*/
const array20 = [1, 2, 3, 4, 7, 8, 9, 'mango', 12]

console.log(array20.indexOf('mango', 3))



/*

array.isArray()

*/
const obj1 = {
    value: ['pineapple']
}

const array21 = ['apple']

console.log(Array.isArray(obj1))

console.log(Array.isArray(array21))



/*

array.join()

*/
const array22 = ['mango', ' watermelon', ' pineapple']

console.log(array22.join())



/*

array.keys()

*/
const smth = ['a', 'b', 'c']

const iterator = smth.keys()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())



/*

array.lastIndexOf()

*/
const array23 = ['Mango', 'Pineapple', 'Mango','Kiwi']

console.log(array23.lastIndexOf('Mango'))



/*

array.map()

*/
const array24 = [19, 13]

const toMap = array24.map(elem => elem * 13)

console.log(toMap)

console.log(array24)



/*

array.of()

*/
console.log(Array.of(3))

console.log(Array.of(null))

console.log(Array(3))



/*

array.pop()

*/
const array25 = ['mango', 'pineapple', 'kiwi']

const deleteTheLast = array25.pop()

console.log(array25)

console.log(chalk.greenBright(deleteTheLast))



/*

array.push()

*/
const fruits = ['apple', 'kiwi']

const addSomething = fruits.push('pineapple', 'mango')

console.log(fruits)

console.log(addSomething)



/*

array.reduce()

*/
const OrangeJuice = [
    {
        fruits: 'Citrus',
        names: ['Orange', 'Mandarin', 'Cumquat']
    },

    {
        berries: 'Citrus',
        names: ['Cherry', 'Lime', 'Pamela']
    }
]

const AnotherBerries = [['Watermelon']]

const juice = OrangeJuice.reduce(function(newEl, all){
    return [...newEl, ...all.names]
}, AnotherBerries.flat(1))
console.log(juice)



/*

array.reduceRight()

*/
const array26 = [['mango', 'kiwi'], ['potato', 'carrot'], ['watermelon', 'cherry']]

const toRight = array26.reduceRight(function(a, b){
    return a.concat(b)
})

console.log(toRight)



/*

array.reverse()

*/
const array27 = [1, 2, 3]

console.log(array27.reverse())



/*

array.shift()

*/
const array28 = ['mandarin', 'lime', 'lemon', 'cumquat']

const deleteFirst = array28.shift()

console.log(deleteFirst)

console.log(array28)



/*

array.splice()

*/
const array29 = ['potato', 'watermelon', 'cherry', 'blueberyy', 'carrot']

console.log(array29.slice(1, 4))



/*

array.some()

*/
const array30 = [15, 18, 19]

const array31 = array30.some(elem => elem >= 13)

console.log(array31)



/*

array.sort()

*/
const array32 = ['B', 'b', 'a', 'A', 3, 1, 2]

console.log(array32.sort())



/*

array.splice()

*/
const array33 = [1, 2, 3, 4] 

console.log(array33.splice(3, 1, 9))

console.log(array33)



/*

array.toLocaleString()

*/
const array34 = [[new Date], ' new Day']

console.log(array34.toLocaleString())



/*

array.toString()

*/
const array35 = [new Date]

console.log(array35.toString())



/*

array.unshift()

*/
const array36 = ['Mango', 'Kiwi']

console.log(array36.unshift('Watermelon'))

console.log(array36)


/*

array.values()

*/
const array37 = ['lemon', 'cumquat', 'honey']

const values = array37.values()

console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)
console.log(values.next().value)

