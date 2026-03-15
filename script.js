var key = "wingedKeys";
var key = "storage";


// SAVE
document.querySelector(".save").onclick = function() {

    var value = document.querySelector("#saveValue").value;

    localStorage.setItem(key, value);

    document.querySelector("#saveValue").value = "";

};


// LOAD
document.querySelector(".load").onclick = function() {
    var data = localStorage.getItem(key);
    if (data == null){
            document.querySelector("#loadValue").value = key + " has been deleted";
    } else {
        document.querySelector("loadValue").value = data;
    }

};

// update
document.querySelector(".update").onclick = function() {
    var newValue = document.querySelector("#updateValue").value;
    localStorage.setItem(key, newValue);
    document.querySelector("#updateValue").value = "";
};

// DELETE
document.querySelector(".delete").onclick = function() {

};
//