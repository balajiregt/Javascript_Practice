//Exercise
let userName=prompt('Enter the username');
if (userName=='admin')//confition for username starts here
{
    alert('Welcome');
    let password=prompt('Enter the password');
    if(password=='themaster'){  //condition for password starts here
        alert('Password is correct');
    }
    else if(password==''||password=='null'){
        alert('Password is not entered yet');
        let passwordChecktwo=prompt('Please enter the password')//this is condition for password second check starts
        if(passwordChecktwo=='themaster'){
            alert('Password is correct');
        }
        else if(passwordChecktwo==''||passwordChecktwo=='null'){
            alert('Password is not entered yet');
        }
        else if(passwordChecktwo!='themaster')
        {
        alert('Incorrect password');
        }//the condition for password second check ends
    }
    else if(password!='themaster')
    {
        alert('Incorrect password');
    }//condition for password ends here
}
else if(userName=='null'||userName=='') //confition for username resumes here
{
    alert('Cancelled');
}
else
{
alert('I dont know you');
}
