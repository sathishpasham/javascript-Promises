async function createPromise(){
    console.log("before promise");
    const result= await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("resolved")},5000);
    })
    console.log(result);
    console.log("after promise");
}
createPromise()