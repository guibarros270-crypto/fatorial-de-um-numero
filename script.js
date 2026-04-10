function calcularFatorial() {
            let n = parseInt(document.getElementById('numFatorial').value);
            let resultadoDisplay = document.getElementById('resFatorial');

            if (n > 30) {
                resultadoDisplay.innerText = "Erro: Digite um número menor ou igual a 20.";
                return;
            }
            if (n < 0 || isNaN(n)) {
                resultadoDisplay.innerText = "Por favor, digite um número inteiro positivo.";
                return;
            }

            let fatorial = 1;
            for (let i = 1; i <= n; i++) {
                fatorial *= i;
            }

            resultadoDisplay.innerText = `O fatorial de ${n} é: ${fatorial}`;
        }
