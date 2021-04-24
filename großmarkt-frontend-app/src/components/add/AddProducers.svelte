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
    let newPreisliste ='';


    let url="http://localhost:3000/api/v1/producers";


    function add_To_Database() {
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
        })
            .then(res => res.json())
            .then(producer =>{
                console.log('Success:', producer);
            })
        .catch((error) => {
            console.error('Error', error);
        });

        inputName.value = '';
        inputStraße.value = '';
        inputPLZ.value = '';
        inputOrt.value = '';
        inputTelefonnummer.value = '';
        inputPreisliste.value = '';
    }




</script>

<main>

    <!-- Button for modal -->
    <button type="button" class="btn btn-secondary" id="buttonToggle"data-toggle="modal" data-target="#exampleModalCenter">Produzent hinzufügen
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalLongTitle">Produzent hinzufügen</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="boxesBeside" id="boxLeft">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="produzentenName" placeholder="Name"
                                   aria-label="Produzentenname"
                                   aria-describedby="basic-addon1" bind:this={inputName} bind:value="{newName}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="strasse" placeholder="Straße"
                                   bind:this={inputStraße} bind:value="{newStraße}">
                        </div>

                        <div class="input-group mb-3">
                            <input type="number" class="form-control" id="plz" placeholder="PLZ"
                                   bind:this={inputPLZ} bind:value="{newPLZ}">
                        </div>


                        <button type="button" class="btn btn-secondary btn-block" id="buttonLeft" data-dismiss="modal">Abbrechen</button>


                    </div>
                    <div class="boxesBeside" id="boxRight">

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="ort" placeholder="Ort"
                                   bind:this={inputOrt} bind:value="{newOrt}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="telefon" placeholder="Telefonnummer"
                                   bind:this={inputTelefonnummer} bind:value="{newTelefonnummer}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="preisliste" placeholder="Preisliste"
                                   bind:this={inputPreisliste} bind:value="{newPreisliste}">
                        </div>


                        <button type="button" class="btn btn-secondary btn-block" id="buttonRight" data-dismiss="modal" on:click={add_To_Database}>Produzent hinzufügen</button>

                    </div>

                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
    <div id="addAlert"></div>
</main>

<style>
    .boxesBeside {
        float: left;
        width: 50.00%;
        box-sizing: border-box;
    }

    #boxLeft{
        padding: 0px 10px 0px 100px;
    }
    #boxRight{
        padding: 0px 100px 0px 10px;
    }

    .modal-content {
        background: #4e4e4e;
    }

    #exampleModalLongTitle {
        color: white;
    }
    .modal-header {
        border-bottom: 0 none;
    }

    .modal-footer {
        border-top: 0 none;
    }

    #buttonLeft{
        color: white;
        background-color: #c82333;
        border-color: #c82333;
    }
    #buttonLeft:hover{
        color: black;
        background-color: white;
    }
    #buttonRight{
        color: #4e4e4e;
        background-color: #ff7500;
        border-color: #ff7500;
    }
    #buttonRight:hover{
        color:black;
        background-color: white;
    }
    #buttonToggle{
        color: black;
        background-color: #ff7500;
        border-color: #ff7500;
    }

</style>