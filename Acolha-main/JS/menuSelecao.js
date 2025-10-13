const cadastro = document.querySelector('.cadastro');
cadastro.addEventListener('click', () => {
    Swal.fire({
        title: "Qual tipo de conta você deseja criar?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#357447",
        cancelButtonColor: "#357447",
        confirmButtonText: "Pessoa Física",
        cancelButtonText: "Pessoa Juridica"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "cadastroPF.html";

        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = "cadastroPJ.html";

        }
    });
});