function getFunction1s(a: () => void): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            a();
            resolve(); // Resolve after executing `a`
        }, 1000);
    });
}

function a() {
    console.log("hello");
}

getFunction1s(a).then(() => {
    console.log("Callback executed");
});
