function vogal(form) {
  a = form.texto.value;

  if (a == "") {
    alert('Não é possível contar vogais em um conteúdo vazio.');
  }

  else {

    var vogais = a.toString().match(/[aeiou]/g);

    if (vogais != null) {
      alert(vogais.length + ' vogai(s).');
    } else {
      alert('Nenhuma vogal.');
    }

  }
}