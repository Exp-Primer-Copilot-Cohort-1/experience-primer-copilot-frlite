function skillsMember() {
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    console.log(skillsMemberValue);
    if (skillsMemberValue == "0") {
        document.getElementById("skillsMember").style.borderColor = "red";
        document.getElementById("skillsMember").style.borderWidth = "2px";
        document.getElementById("skillsMember").style.boxShadow = "0 0 8px red";
        document.getElementById("skillsMember").style.outline = "none";
        return false;
    } else {
        document.getElementById("skillsMember").style.borderColor = "green";
        document.getElementById("skillsMember").style.borderWidth = "2px";
        document.getElementById("skillsMember").style.boxShadow = "0 0 8px green";
        document.getElementById("skillsMember").style.outline = "none";
        return true;
    }
}