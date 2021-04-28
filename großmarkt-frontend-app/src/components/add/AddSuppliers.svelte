<script>
    let supplier_inputName;
    let supplier_newName = '';
    let supplier_inputStraße;
    let supplier_newStraße = '';
    let supplier_inputPLZ;
    let supplier_newPLZ = '';
    let supplier_inputOrt;
    let supplier_newOrt = '';
    let supplier_inputTelefonnummer;
    let supplier_newTelefonnummer = '';
    let supplier_inputPreisliste;
    let supplier_newPreisliste ='';


    let url="http://localhost:3000/api/v1/suppliers";
    let method = "POST"

    function suppliers_add_To_DB() {
        if(supplier_newName == ''){
            let supplierAddAlert = document.getElementById('supplierAddAlert');
            supplierAddAlert.innerHTML = '<div class="alert '+
            'alert-dismissible alert-danger">'+
            '<button type="button" class="close" data-dismiss="alert">'+
            '&times;</button> <strong>Error!</strong> '+
            'Bitte gib einen Lieferantennamen ein um fortzufahren</div>';
        }else{
                fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": supplier_newName,
                    "telnr": supplier_newTelefonnummer,
                    "straße": supplier_newStraße,
                    "plz": supplier_newPLZ,
                    "ort": supplier_newOrt
                })
            }).then(res=>{
                if(res.status == 200){
                    location.reload();
                }
            })
        }
    }

</script>

<main>

    <!-- Button for modal -->
    <button type="button" class="btn btn-secondary add-supplier" id="suppliers_buttonToggle"data-toggle="modal" data-target="#suppliers_exampleModalCenter">Lieferant hinzufügen
    </button>

    <!-- Modal -->
    <div class="modal fade" id="suppliers_exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="suppliers_exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="suppliers_exampleModalLongTitle">Lieferant hinzufügen</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="suppliers_boxesBeside" id="suppliers_boxLeft">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="suppliers_lieferantenName" placeholder="Name"
                                   aria-label="Lieferantentenname"
                                   aria-describedby="suppliers_basic-addon1" bind:this={supplier_inputName} bind:value="{supplier_newName}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="suppliers_strasse" placeholder="Straße"
                                   bind:this={supplier_inputStraße} bind:value="{supplier_newStraße}">
                        </div>

                        <div class="input-group mb-3">
                            <input type="number" class="form-control" id="suppliers_plz" placeholder="PLZ"
                                   bind:this={supplier_inputPLZ} bind:value="{supplier_newPLZ}">
                        </div>

<!-- on:click={resetData()} -->
                        <button type="button" class="btn btn-secondary btn-block" id="suppliers_buttonLeft" data-dismiss="modal" >Abbrechen</button>


                    </div>
                    <div class="suppliers_boxesBeside" id="suppliers_boxRight">

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="suppliers_ort" placeholder="Ort"
                                   bind:this={supplier_inputOrt} bind:value="{supplier_newOrt}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="suppliers_telefon" placeholder="Telefonnummer"
                                   bind:this={supplier_inputTelefonnummer} bind:value="{supplier_newTelefonnummer}">
                        </div>
                        <div class="input-group mb-3" id="not_visible">
                            <input type="file" class="form-control" id="suppliers_preisliste" placeholder="Preisliste"
                                   bind:this={supplier_inputPreisliste} bind:value="{supplier_newPreisliste}">
                        </div>


                        <button type="button" class="btn btn-secondary btn-block" id="suppliers_buttonRight" on:click={suppliers_add_To_DB}>Lieferant hinzufügen</button>

                    </div>
                    <div id="supplierAddAlert" />
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
    
</main>

<style>
    .form-control, select{
        border-radius: 0;
        outline: none;
        border: 0;
        box-shadow: none;
    }
    .add-supplier {
        float: right;
        margin-right: 35px;
        margin-text-outline: 0;
        margin-bottom: 10px;
        background: #fdc824;
        color: #4e4e4e;
        font-weight: 800;
        font-size: larger;
        border-width: 0;
        border-radius: 0;
    }

    .add-supplier:hover {
        background: #fdac00;
    }

    .add-supplier:active, .add-supplier:visited, .add-supplier:focus {
        background-color: #fdc824;
        border-width: 0;
    }


    .suppliers_boxesBeside {
        float: left;
        width: 50.00%;
        box-sizing: border-box;
    }

    #suppliers_boxLeft{
        padding: 0px 10px 0px 100px;
    }
    #suppliers_boxRight{
        padding: 0px 100px 0px 10px;
    }

    .modal-content {
        background: #4e4e4e;
    }

    #suppliers_exampleModalLongTitle {
        color: white;
    }
    .modal-header {
        border-bottom: 0 none;
    }

    .modal-footer {
        border-top: 0 none;
    }

    #suppliers_buttonLeft{
        color: white;
        font-weight: bold;
        background-color: #c82333;
        border-color: #c82333;
        margin-top: 30px;
        border-radius: 0;
    }
    #suppliers_buttonLeft:hover{
        color: black;
        background-color: white;
    }
    #suppliers_buttonRight{
        color: #4e4e4e;
        font-weight: bold;
        background-color: #ffc825;
        border-color: #ffc825;
        margin-top: 30px;
        border-radius: 0;
    }
    #suppliers_buttonRight:hover{
        color:black;
        background-color: white;
    }
    #not_visible{
        visibility: hidden;
    }


</style>
