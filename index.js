const section = document.getElementById('sectionDown');
const answer = document.getElementById('answer');

let guardaValores = [];
let metodo;
let resultado;
section.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const botaoClicado = event.target.id;
		const valueButton = document.getElementById(`${botaoClicado}`).innerHTML;
		if (valueButton === 'On/Off') {
			answer.innerHTML = '';
			guardaValores = [];
		}

		if (
			valueButton === '+' ||
			valueButton === '-' ||
			valueButton === '/' ||
			valueButton === 'x'
		) {
			answer.innerHTML += '';
		}
		if (valueButton !== '=') {
			if (
				valueButton === '+' ||
				valueButton === '-' ||
				valueButton === '/' ||
				valueButton === 'x'
			) {
				metodo = valueButton;
			}
			answer.innerHTML += valueButton;
			guardaValores.push(valueButton);
		} else {
			const juntaValores = guardaValores.join('');
			const separaValores = juntaValores.split(/[+\-x\/]/);

			metodo === '+'
				? Soma(separaValores)
				: metodo === '-'
				? Subtracao(separaValores)
				: metodo === '/'
				? Divisao(separaValores)
				: Multiplicacao(separaValores);

			guardaValores = [];
			guardaValores.push(resultado);
			answer.innerHTML = resultado;
		}
	}
});

function Soma(valores) {
	const primeiroNumero = Number(valores[0]);
	const segundoNumero = Number(valores[1]);
	resultado = primeiroNumero + segundoNumero;
}
function Subtracao(valores) {
	const primeiroNumero = Number(valores[0]);
	const segundoNumero = Number(valores[1]);
	resultado = primeiroNumero - segundoNumero;
}
function Divisao(valores) {
	const primeiroNumero = Number(valores[0]);
	const segundoNumero = Number(valores[1]);
	resultado = primeiroNumero / segundoNumero;
}
function Multiplicacao(valores) {
	const primeiroNumero = Number(valores[0]);
	const segundoNumero = Number(valores[1]);
	resultado = primeiroNumero * segundoNumero;
}
