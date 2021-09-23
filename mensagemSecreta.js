let mensagemSecreta = ['Aprender', 'não', 'é', 'o', 'sobre', 'que', 'você', 'consegue', 'facilmente', 'na', 'primeira', 'vez', 'mas', 'sobre', 'o', 'que', 'você', 'pode', 'descobrir.', '↵ - 2015', 'Chris', 'Pine', 'Aprenda', 'Javascript'];

mensagemSecreta.pop();
mensagemSecreta.push('a', 'programar');
mensagemSecreta.splice(8, 1, 'certo');
mensagemSecreta.shift();
mensagemSecreta.unshift('Programação');
mensagemSecreta.splice(7, 5, 'sabe');
let mensagemFinal = mensagemSecreta.join(' ');
console.log(mensagemFinal);