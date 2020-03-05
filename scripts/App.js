function download(text, name, type) {
  let text = document.getElementById("setText");
  let a = document.getElementById("a");
  let file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}
