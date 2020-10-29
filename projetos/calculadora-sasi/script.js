function sasi() {
    var n1 = window.document.querySelector('input#n1').value;
    var n2 = window.document.querySelector('input#n2').value;
    var n3 = window.document.querySelector('input#n3').value;
    var res = window.document.querySelector('p#resultado');
    var nota = (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.3);

    res.innerHTML = `<option>===== Você tirou: ${nota} pontos =====</option>`;
}