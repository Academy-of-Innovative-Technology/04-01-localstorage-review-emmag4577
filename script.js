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

};

// LOAD
document.querySelector(".update").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};
//