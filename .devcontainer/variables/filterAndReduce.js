  // +++++++++++++++++++++++++++++++++++++++++  FILTER in loops +++++++++++++++++++++++++++++

     const arr=["Javascript","CPP","Java","Python","Ruby"]

     let hr=arr.forEach( (num)=>{
        
        if(num!="Javascript") console.log(num);                        // In normal For-Each loops we can store the loop in normal variable but while 
                                                 // printing that variable it will result undefined
     })
     console.log(hr);
     


     // In filter loops we can filter the elements of data-structure and store it in some variable ,After printing that variable we can get respective result
     
     let hb=arr.filter( function(num) 
     {
        return num!="CPP"
    })
    console.log(hb);
    

    let bk=arr.filter((num)=>num!="Ruby")
    console.log(bk);

    //      Or if we dont want to use filter we can normally iterate through array and apply conditional checks
    let newarr=[]
    for(let i=0;i<(arr.length);i++)
    {
        if(arr[i]=="CPP")
        {
            continue;
        }
        newarr.push(arr[i]);
    }
    console.log(newarr);
    
    


    
     
    
