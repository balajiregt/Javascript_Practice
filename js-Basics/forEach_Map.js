const num=[1,2,3]

//doubling the elements using foreach
const newnum= num.forEach(element => {
     return element*2
});
console.log(newnum)

//doubling the elements and returning as an array using map

const newnum2= num.map(element=>{
     return element*2
})
console.log(newnum2)