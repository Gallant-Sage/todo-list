// my own module(local module).

module.exports = "Hello Wrld";
console.log(module);
function getDate() {
    
    let today = new Date();

    let  options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

// to-dolist-v1 || C:/Users/SOURABH/OneDrive/Documents/NodeJs/to-dolist-v1