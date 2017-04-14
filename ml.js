function displayStory (a, b, c, story) {
    var a = textboxA.value;
    var b = textboxB.value;
    var c = textboxC.value;
    var story = "Once there was " + a + " programmer who used JavaScript to " + b + " the " + c + ".";
    if (a == "") {
        document.write("Error");
    }
    else if (b == "") {
        document.write("Error");
    }
    else if (c == "") {
        document.write("Error");
    } else {
      document.write(story);
}
}
