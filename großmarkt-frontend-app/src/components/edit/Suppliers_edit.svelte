<!-- 
    This component is implemented as follows:
   		
        <SuppliersEdit 
            id={1} name={"Lieferant Laube"} telefonnummer={"06538 594562"} 
            straße={"Baumweg 9"} plz={"70597"} ort={"Stuttgart"} 
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

    let url = "http://localhost:3000/api/v1/suppliers";
    let method = "PUT";

    let alert = '<div class="alert alert-dismissible alert-danger">';
    alert += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alert += '<strong>Oh snap!</strong>';
    alert += 'Es ist ein Fehler beim Ändern der Daten aufgetreten.';
    alert += ' Bitte versuche es später erneut.</div>';

    function update_database() {
        let supplier_data = {
            "id": id,
            "name": name,
            "telnr": telefonnummer,
            "straße": straße,
            "plz": plz,
            "ort": ort
        }
        fetch(url, {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(supplier_data)
        }).then(res => {
            if (res.status == 200) {
                location.reload();
            }else{
                document.getElementById(`supplieralertbox${id}`).innerHTML = alert;
            }
        });
    }

</script>

<main>
    <!-- button to open edit modal -->
    <button type="button" class="border-0" data-toggle="modal" data-target="#editSuppliersModal{id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill"
             viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
    </button>

    <!-- Modal used to edit existing supplier data -->
    <!-- Modal used to edit existing supplier data -->
    <div class="modal fade" id="editSuppliersModal{id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Eintrag bearbeiten
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form for editing an existing supplier. filled with relevant prop data -->
                    <div id="supplier_boxLeft">
                        <label for="name">Lieferantenname</label>
                        <input type="text" class="form-control input-field" id="name" bind:value="{name}"/>

                        <label for="straße">Straße und Hausnummer</label>
                        <input type="text" class="form-control input-field" id="straße" bind:value="{straße}"/>
                        <label for="plz">PLZ</label>
                        <input type="text" class="form-control input-field" id="plz" bind:value="{plz}"/>
                        <button type="button" class="btn btn-secondary" id="supplier_buttonLeft" data-dismiss="modal">
                            Abbruch
                        </button>
                    </div>
                    <div id="supplier_boxRight">
                        <label for="telefonnummer">Telefonnummer</label>
                        <input type="text" class="form-control input-field" id="telefonnummer"
                               bind:value="{telefonnummer}"/>
                        <label for="ort">Ort</label>
                        <input type="text" class="form-control input-field" id="ort" bind:value="{ort}"/>
                        <button type="button" class="btn btn-secondary" id="supplier_buttonRight"
                                on:click={update_database} data-dismiss="modal">Daten überschreiben
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Error message -->
    <div id="supplieralertbox{id}"></div>
</main>

<style>
    label {
        color: #ffffff;
    }

    .input-field {
        margin-bottom: 15px;
        width: 100%;
    }

    #supplier_boxLeft {
        padding: 0 10px 0 100px;
    }

    #supplier_boxRight {
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

    #supplier_exampleModalLongTitle {
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

    #test {
        padding: 0 0 6% 0;
    }

    #supplier_buttonLeft {
        color: white;
        background-color: #c82333;
        border-color: #c82333;
        border-radius: 0;
        width: 100%;
        margin-top: 40px;
        font-weight: 700;
    }

    #supplier_buttonLeft:hover {
        color: black;
        background-color: white;
    }

    #supplier_buttonRight {
        color: black;
        background-color: #afffa8;
        border-color: #afffa8;
        border-radius: 0;
        width: 100%;
        margin-top: 124px;
        font-weight: 700;
    }

    #supplier_buttonRight:hover {
        color: black;
        background-color: white;
    }

    #supplier_boxLeft {
        padding: 0;
        margin-right: 60px;
        width: 100%;
    }

    #supplier_boxRight {
        padding: 0;
        width: 100%;
    }
</style>
