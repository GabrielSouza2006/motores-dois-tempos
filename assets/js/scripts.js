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