let promise1=new Promise((resolve,reject)=>{
    let a=11;
    let b=13;
    if(a===b){
      resolve('promise1 equal')
    }else{
      reject('promise1 not equal')
    }
  });
  
  let promise2=new Promise((resolve,reject)=>{
    let a=12;
    let b=12;
    if(a===b){
      resolve("promise2 equal")
    }
    else{
      reject('promise2 error')
    }
  })
  
  promise1.then((data)=>console.log(data)).catch((error)=>console.log(error))
  promise2.then((data)=>console.log(data)).catch((error)=>console.log(error))