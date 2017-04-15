function displayStory(a, b, c, story) {
    var a = textboxA.value;
    var b = textboxB.value;
    var c = textboxC.value;
    var story = "Once there was a/an " + a + " programmer who used JavaScript to " + b + " the " + c + ".";
    if (a == "") {
        document.write("Error - You left a text box blank");
    }
    else if (b == "") {
        document.write("Error - You left a text box blank");
    }
    else if (c == "") {
        document.write("Error - You left a text box blank");
    }
    else {
        document.write(story);
    }
}
