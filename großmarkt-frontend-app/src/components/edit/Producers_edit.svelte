<!-- 
    This component is implemented as follows:

            <ProducersEdit
                id={1} name={"Produzent Erhardt"} telefonnummer={"0160 93117188"}
                straße={"Bahnhofsstraße"} plz={"70567"} ort={"Stuttgart"}
            />

    all parameters can be either fixed values or variables from the script section.
 -->
<script>
    export let id;
    export let name;
    export let telefonnummer;
    export let straße;
    export let plz;
    export let ort;
    let url = "http://localhost:3000/api/v1/producers";
    let method = "PUT";
    let alert = '<div class="alert alert-dismissible alert-danger">';
    alert += '<button type="button" class="close" data-dismiss="alert">'+
    '&times;</button>';
    alert += '<strong>Oh snap!</strong>';
    alert += 'Es ist ein Fehler beim Ändern der Daten aufgetreten.';
    alert += ' Bitte versuche es später erneut.</div>';

    function update_database() {
        if(!name){
            console.error('Producer name is empty');
            let producerEditAlert = document.getElementById('producerEditAlert');
            producerEditAlert.innerHTML = '<div class="alert '+
            'alert-dismissible alert-danger">'+
            '<button type="button" class="close" data-dismiss="alert">'+
            '&times;</button> <strong>Error!</strong> '+
            'Bitte gib einen Produzentennamen ein um fortzufahren</div>';
        }else{
            console.log(name);
            fetch(url, {
                method: method,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": id,
                    "name": name,
                    "telnr": telefonnummer,
                    "straße": straße,
                    "plz": plz,
                    "ort": ort
                })
            }).then(res => {

                if (res.status == 200) {
                    location.reload();
                }else{
                    document.getElementById(`produceralertbox${id}`).innerHTML = alert;
                }
            });
        }
    }
</script>
<main>
    <!-- button to open edit modal -->
    <button type="button" class="border-0" data-toggle="modal" data-target="#editProducersModal{id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill"
             viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
    </button>
    <!-- modal used to edit existing producer data -->
    <div class="modal fade" id="editProducersModal{id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="exampleModalLabel">
                        Produzent bearbeiten
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form for editing an existing producer. filled with relevant prop data -->
                    <div class="producer_boxesBeside" id="producer_boxLeft">
                        <label for="produzentenname">Produzentenname</label>
                        <input type="text" class="form-control input-field" id="produzentenname" bind:value="{name}"/>
                        <label for="straße">Straße und Hausnummer</label>
                        <input type="text" class="form-control input-field" id="straße" bind:value="{straße}"/>
                        <label for="plz">PLZ</label>
                        <input type="text" class="form-control input-field" id="plz" bind:value="{plz}"/>
                        <button type="button" class="btn btn-secondary" id="producer_buttonLeft" data-dismiss="modal">
                            Abbrechen
                        </button>
                    </div>
                    <div class="producer_boxesBeside" id="producer_boxRight">
                        <label for="telefonnummer">Telefonnummer</label>
                        <input type="text" class="form-control input-field" id="telefonnummer"
                               bind:value="{telefonnummer}"/>
                        <label for="ort">Ort</label>
                        <input type="text" class="form-control input-field" id="ort" bind:value="{ort}"/>
                        <div id="not_visible">
                            <label for="producer_preisliste">Preisliste</label><br>
                            <input type="file" class="form-control input-field" id="producer_preisliste"
                                   placeholder="Preisliste">
                        </div>
                        <button type="button" class="btn btn-primary" id="producer_buttonRight"
                                on:click={update_database}>Übernehmen
                        </button>
                        <div id="producerEditAlert" />
                    </div>
                    
                </div>
                <div class="modal-footer" id="footer">
                </div>
            </div>
        </div>
    </div>
    <!-- Error message -->
    <div id="produceralertbox{id}"></div>
</main>
<style>
    label {
        color: #ffffff;
    }

    .input-field {
        margin-bottom: 15px;
        width: 100%;
    }

    #producer_boxLeft {
        padding: 0 10px 0 100px;
    }

    #producer_boxRight {
        padding: 15px 50px 15px 50px;
    }

    .modal-body {
        display: flex;
    }

    .modal-dialog {
        margin-top: 100px;
        max-width: 1000px;
    }

    .modal-content {
        background: #4e4e4e;
        padding: 20px 100px 35px 100px;
    }

    #producer_exampleModalLongTitle {
        color: white;
    }

    .modal-header {
        border-bottom: 0 none;
    }

    .modal-title {
        text-align: center;
        color: #ffffff;
        font-weight: bold;
    }

    #producer_buttonLeft {
        color: white;
        background-color: #c82333;
        border-color: #c82333;
        border-radius: 0;
        width: 100%;
        margin-top: 30px;
        font-weight: 700;
    }

    #producer_buttonLeft:hover {
        color: black;
        background-color: white;
    }

    #producer_buttonRight {
        color: black;
        background-color: #afffa8;
        border-color: #afffa8;
        border-radius: 0;
        width: 100%;
        margin-top: 30px;
        font-weight: 700;
    }

    #producer_buttonRight:hover {
        color: black;
        background-color: white;
    }

    .producer_boxesBeside {
        /*float: left;*/
        /*width: 50%;*/
        /*box-sizing: border-box;*/
    }

    #producer_boxLeft {
        padding: 0;
        margin-right: 40px;
        width: 100%;
    }

    #producer_boxRight {
        padding: 0;
        width: 100%;
    }

    #footer {
        border-top: 0 none;
    }

    #not_visible {
        visibility: hidden;
    }

</style>
