import inquirer from "inquirer"

let cal = await inquirer.prompt([
    {
    type:"number",
    name:"n1",
    message:"enter yor 1st number"
    
    },
    {
        type:"number",
        name:"n2",
        message:"enter yor 2nd number",
        
        },
        {
            type:"number",
            name:"n3",
            message:"enter yor 3rd number"
            
            },
        {
            type:'input',
            name:'op',
            message:'enter your operator',
           choice:['a/a','a/s','a/m','a/d']
                   
        }
        ])

        //in all choices (A for 'addition',S for substraction ,
        //M for multiplicaton and D for division)
    

//10 + 10 + 10    
     if (cal.op =='a/a'){
        console.log( cal.n1+cal.n2+cal.n3)
    }
    //10+10-10
    else if (cal.op =='a/s'){
        console.log(cal.n1+cal.n2-cal.n3)
    }
    //10+10*10
    else if (cal.op =='a/m'){
        console.log(cal.n1+cal.n2*cal.n3)
    }
    //10+10/10
    else if (cal.op =='a/d'){
        console.log(cal.n1+cal.n2/cal.n3)
    }
([{
    
        type:'input',
        name:'op',
        message:'enter your operator',
       choice:['sa','ss','sm','sd']
     
       
    

}])
   

//10-10+10

    if (cal.op =='sa'){
        console.log( cal.n1-cal.n2+cal.n3)
    }
    //10-10-10
    else if (cal.op =='ss'){
        console.log(cal.n1-cal.n2-cal.n3)
    }
    //10-10*10
    else if (cal.op =='sm'){
        console.log(cal.n1-cal.n2*cal.n3)
    }
    //10-10/10
    else if (cal.op =='sd'){
        console.log(cal.n1-cal.n2/cal.n3)
    }

    ([{
    
        type:'input',
        name:'op',
        message:'enter your operator',
       choice:['ma','ms','mm','md']
     
       
    

}])

//10*10+10      =110
    if (cal.op =='ms'){
        console.log( cal.n1*cal.n2+cal.n3)
    }
    //10*10-10    =90
    else if (cal.op =='ms'){
        console.log(cal.n1*cal.n2-cal.n3)
    }
    //10*10*10     =1000
    else if (cal.op =='mm'){
        console.log(cal.n1*cal.n2*cal.n3)
    }
    //10*10/10      =10
    else if (cal.op =='md'){
        console.log(cal.n1*cal.n2/cal.n3)
    }
  
    ([{
    
        type:'input',
        name:'op',
        message:'enter your operator',
       choice:['da','ds','dm','dd']
         

}])

//10/10+10          =11
    if (cal.op =='da'){
        console.log( cal.n1/cal.n2+cal.n3)
    }
    //10/10-10      =1
    else if (cal.op =='ds'){
        console.log(cal.n1/cal.n2-cal.n3)
    }
    //10/10*10      =10
    else if (cal.op =='dm'){
        console.log(cal.n1/cal.n2*cal.n3)
    }
    //10/10/10      =0.1
    else if (cal.op =='dd')
        {
        console.log(cal.n1/cal.n2/cal.n3)
    }
   
   else 
    {
        console.log('please enter valid numbers or operator')
    }
    
    
    
    

