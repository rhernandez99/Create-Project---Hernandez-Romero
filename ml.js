function displayStory(a, b, c, story) {
    var a = textboxA.value;
    var b = textboxB.value;
    var c = textboxC.value;
    var story = "Once there was a/an " + a + " programmer who used JavaScript to " + b + " the " + c + ".";
    if (a == "") {
        $('#estory').append('<br/>' + "Error - You left a text box blank");
    }
    else if (b == "") {
        $('#estory').append('<br/>' + "Error - You left a text box blank");
    }
    else if (c == "") {
        $('#estory').append('<br/>' + "Error - You left a text box blank");
    }
    else {
        $('#story').append('<br/>' + story);
    }
}
