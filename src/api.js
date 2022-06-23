export function fetchProfileData() {
    let fakeData = fetchData();
    return {
        data: wrapPromise(fakeData),
    };
}

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

function fetchData() {
    console.log("fetch data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolve");
            resolve({
                data: 'Hello World'
            });
            // console.log("reject");
            // reject()
        }, 6000);
    });
}
