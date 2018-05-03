function log(message) {
    console.log(message);

    let l = document.getElementById("log");
    if (l) {
        l.innerHTML += `${message}<br/>`;
    }
}
