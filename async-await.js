async function createPromise() {
    try {
        console.log("before promise");
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("resolved")
            }, 5000);
        })
        console.log(result);
        console.log("after promise");
    } catch (error) {
        console.log("error",error)
    }

}
createPromise()