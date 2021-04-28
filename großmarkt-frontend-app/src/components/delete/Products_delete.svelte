<script>
    export let id;
    let url = "http://localhost:3000/api/v1/products/";
    let method = "DELETE";

    let alert = '<div class="alert alert-dismissible alert-danger">';
    alert += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alert += '<strong>Oh snap! </strong>';
    alert += 'Es ist ein Fehler beim Löschen der Daten aufgetreten.';
    alert += ' Bitte versuche es später erneut.</div>';

    function delete_from_database(id) {
        fetch(url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id": id})
            })
            .then(res => {
                console.log(res);
                if (res.status == 204) {
                    location.reload();
                } else {
                    document.getElementById(`supplieralertbox${id}`).innerHTML = alert;
                }
            })
    }
</script>
<main>
    <!-- button to delete entry-->
    <button type="button" class="border-0 no-bg" data-toggle="modal" data-target="#deleteProductsModal{id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash"
             viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
    </button>


    <!-- Modal used to make sure of users intent to delete -->
    <div class="modal fade" id="deleteProductsModal{id}" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content background">
                <h2 class="modal-title" id="exampleModalLabel">
                    Wollen Sie den Eintrag wirklich löschen?
                </h2>
                <div class="buttons">
                    <button type="button" class="btn btn-secondary btn-cancel" data-dismiss="modal">
                        Abbrechen
                    </button>
                    <button type="button" class="btn btn-primary btn-delete" on:click={delete_from_database(id)}
                            data-dismiss="modal">
                        Bestätigen
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Error message -->
    <div id="supplieralertbox{id}"></div>
</main>

<style>
    .modal {
        font-family: Roboto;
        margin-top: 5%;
    }
    label {
        color: black;
    }

    .modal-dialog {
        margin-top: 100px;
        max-width: 900px;
        max-height: 400px;
        background-color: #504c4c;
        color: #504c4c;

    }
    .modal-content {
        color: #504c4c;
    }
    .modal-title {
        text-align: center;
        color: #ffffff;
        background-color: #504c4c;
        font-weight: bold;
        padding-top: 10%;

    }
    .background {
        color: #504c4c;
        background-color: #504c4c;
    }
    .buttons {
        display: inline;
        color: #504c4c;
        background-color: #504c4c;
        margin-top: 100px;
        text-align: center;
    }
    .btn {
        border-radius: 0;
        background: #504c4c;
        margin-bottom: 100px;
        outline: none;
        border: none;
        width: 30%;
    }
    .btn-cancel {
        color: white;
        background-color: #c82333;
        border-color: #c82333;
        font-size: 20px;
    }

    .btn-cancel:hover {
        color: black;
    }

    .btn-delete {
        color: black;
        background: #f8cc4c;
        font-weight: 700;
        font-size: 20px;
        margin-left: 50px;

    }

    .btn-delete:hover {
        color: #504c4c;
        background-color: white;
    }
    .close {
        color: #ffffff;
    }

    .bi-trash:hover {
        fill: #b21f2d;
    }

    .no-bg {
        background: none;
    }
</style>
