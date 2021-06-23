let a = +prompt('Введите число');

let simple = true

if (a > 0) {
    for(i = 2; i < a; i++)  
    {  
        if(a % i === 0) 
            {    
                simple = false
            }  
    }  
    console.log (simple);
}
else {
    console.log (false);
}    