<script>
    let inputName;
    let newName = '';
    let inputStraße;
    let newStraße = '';
    let inputPLZ;
    let newPLZ = '';
    let inputOrt;
    let newOrt = '';
    let inputTelefonnummer;
    let newTelefonnummer = '';
    let inputPreisliste;
    let newPreisliste = '';


    let url = "http://localhost:3000/api/v1/producers";


    function producer_add_To_Database() {
        let producer = {
            "name": newName,
            "telnr": newTelefonnummer,
            "straße": newStraße,
            "plz": newPLZ,
            "ort": newOrt
        }
        console.log(producer);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producer),
        }).then(res => {
            if (res.status == 200) {
                location.reload();
            }
        })
    }


</script>

<main>

    <!-- Button for modal -->
    <button type="button" class="btn btn-secondary add-producer" data-toggle="modal"
            data-target="#producer_exampleModalCenter">
        Produzent hinzufügen
    </button>


    <!-- Modal -->
    <div class="modal fade" id="producer_exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="producer_exampleModalLongTitle">Produzent hinzufügen</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="producer_boxesBeside" id="producer_boxLeft">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="producer_produzentenName" placeholder="Name"
                                   aria-label="Produzentenname"
                                   aria-describedby="basic-addon1" bind:this={inputName} bind:value="{newName}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="producer_strasse" placeholder="Straße"
                                   bind:this={inputStraße} bind:value="{newStraße}">
                        </div>

                        <div class="input-group mb-3">
                            <input type="number" class="form-control" id="producer_plz" placeholder="PLZ"
                                   bind:this={inputPLZ} bind:value="{newPLZ}">
                        </div>


                        <button type="button" class="btn btn-secondary btn-block" id="producer_buttonLeft"
                                data-dismiss="modal">Abbrechen
                        </button>


                    </div>
                    <div class="producer_boxesBeside" id="producer_boxRight">

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="producer_ort" placeholder="Ort"
                                   bind:this={inputOrt} bind:value="{newOrt}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="producer_telefon" placeholder="Telefonnummer"
                                   bind:this={inputTelefonnummer} bind:value="{newTelefonnummer}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="producer_preisliste" placeholder="Preisliste"
                                   bind:this={inputPreisliste} bind:value="{newPreisliste}">
                        </div>


                        <button type="button" class="btn btn-secondary btn-block" id="producer_buttonRight"
                                data-dismiss="modal" on:click={producer_add_To_Database}>Produzent hinzufügen
                        </button>

                    </div>

                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

</main>

<style>
    .add-producer {
        float: right;
        margin-right: 35px;
        margin-text-outline: 0;
        margin-bottom: 10px;
        background: #ffc29e;
        color: #4e4e4e;
        font-weight: 800;
        font-size: larger;
        border-width: 0;
        border-radius: 0;
    }

    .add-producer:hover {
        background: #ff9e39;
    }

    .add-producer:active, .add-producer:visited, .add-producer:focus {
        background-color: #ffc29e;
        border-width: 0;
    }

    .btn-primary:focus, .btn:focus {
        border-width: 0;
        box-shadow: none;
    }

    .producer_boxesBeside {
        float: left;
        width: 50.00%;
        box-sizing: border-box;
    }

    #producer_boxLeft {
        padding: 0px 10px 0px 100px;
    }

    #producer_boxRight {
        padding: 0px 100px 0px 10px;
    }

    .modal-content {
        background: #4e4e4e;
    }

    #producer_exampleModalLongTitle {
        color: white;
    }

    .modal-header {
        border-bottom: 0 none;
    }

    .modal-footer {
        border-top: 0 none;
    }

    #producer_buttonLeft {
        color: white;
        background-color: #c82333;
        border-color: #c82333;
    }

    #producer_buttonLeft:hover {
        color: black;
        background-color: white;
    }

    #producer_buttonRight {
        color: #4e4e4e;
        background-color: #ff7500;
        border-color: #ff7500;
    }

    #producer_buttonRight:hover {
        color: black;
        background-color: white;
    }
</style>
