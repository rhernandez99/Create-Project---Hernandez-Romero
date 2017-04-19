var counter = 0;

function add () {
 return counter += 1;
}

function displayStory(a, b, c, story, clickcount) {
    var a = textboxA.value;
    var b = textboxB.value;
    var c = textboxC.value;
    var story = "Once there was a/an " + a + " programmer who used JavaScript to " + b + " the " + c + ".";
    if (clickcount > 5){
        return pass;
}
    else
    if (a == "") {
        $('#story').append('<br/>' + "Error - You left a text box blank");
    }
    else if (b == "") {
        $('#story').append('<br/>' + "Error - You left a text box blank");
    }
    else if (c == "") {
        $('#story').append('<br/>' + "Error - You left a text box blank");
    }
    else {
        $('#story').append('<br/>' + story);
    }
}

function myFunction(){
    var clickCount = add();
    document.getElementById("counterClick").innerHTML = clickCount;

}

