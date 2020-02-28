function save() {
    var message = document.getElementById("inputText").value;
    fs.writeFile("message.txt", message) {
        if (err) throw err;
    console.log('It\'s saved!');
  });
}
