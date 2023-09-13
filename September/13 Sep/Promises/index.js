let firstPromise = new Promise(function (resolve, reject) {
    resolve('We got the first promise');
}).then((data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        resolve('We got the second promise')
    })
}).then((info) => console.log(info)).catch((err) => console.log(err));
