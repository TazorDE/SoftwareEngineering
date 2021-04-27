<script>
    export let id;
    let url = "http://localhost:3000/api/v1/products/";
    let method = "DELETE";

    let alert = '<div class="alert alert-dismissible alert-danger">';
    alert += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alert += '<strong>Oh snap! </strong>';
    alert += 'Es ist ein Fehler beim Löschen der Daten aufgetreten.';
    alert +=' Bitte versuche es erneut.</div>';

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
                if(res.status !== 204){
                    document.getElementById(`supplieralertbox${id}`).innerHTML = alert;
                }
            })
    }
</script>
<main>
    <!-- button to delete entry-->
    <button type="button" class="border-0" data-toggle="modal" data-target="#deleteProductsModal{id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
    </button>


    <!-- Modal used to make sure of users intent to delete -->
    <div class="modal fade" id="deleteProductsModal{id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">
                        Möchtest du das Produkt wirklich löschen?
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary mr-auto" on:click={delete_from_database(id)} data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                        </svg>
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Error message -->
    <div id="supplieralertbox{id}"> </div>
</main>

<style>
</style>
