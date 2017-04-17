function displayStory(a, b, c, story) {
    var a = textboxA.value;
    var b = textboxB.value;
    var c = textboxC.value;
    var story = "Once there was a/an " + a + " programmer who used JavaScript to " + b + " the " + c + ".";
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
        $('#story').append('<br/>' + "Error - You left a text box blank");
    }
}
