function drag() {
    var p = document.createElement("p");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    p.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myDiv").appendChild(p);
    }
    document.getElementById("input").value = "";
}