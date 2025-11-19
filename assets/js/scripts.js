document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const desejaPDF = document.querySelector('input[name="receber-pdf"]:checked');
    const botaoPDF = document.querySelector('.btn-baixar');

    if (desejaPDF && desejaPDF.value === 'sim') {
        botaoPDF.style.display = 'block';
        alert('Formulário enviado! Agora você pode baixar o PDF.');
    } else {
        botaoPDF.style.display = 'none';
        alert('Formulário enviado! Você optou por não receber o PDF.');
    }

    document.getElementById('form-contato').reset();
});

//Máscara para telefone
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length > 6) {
        if (value.length === 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        }
        else {
            value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        }
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/^(\d*)$/, '($1');
    }

    e.target.value = value;
});