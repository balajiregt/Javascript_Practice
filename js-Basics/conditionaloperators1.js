//conditional operators, if ?

let age2=prompt('The age is', age);
 let message=(age2 <= 3)?'Hi kinder':
            (age2 >3 && age2 <=14)?'Hello kid':
            (age2 > 15 && age2 <= 18)?'Hello teen':
            (age2 > 18 && age2 < 65)?'Hello mature':
            'what an unusual age';
    console.log(message)


    let a=prompt('enter the number1');
    let b=prompt('enter the number2');
    let result=(a+b<4)?'Below':'Over'   //using conditional ? operator
    console.log(result)

    if(result=(a+b<4)) //using if statements
    {
        alert('below');
    }
    else{
        alert('above');
    }
