<script>
    let produkt_inputProdukt;
    let produkt_newProduktname = '';
    let produkt_inputAnzahl;
    let produkt_newAnzahl = '';
    let produkt_inputHerkunft;
    let produkt_newHerkunft = '';
    let produkt_inputKategorie;
    let produkt_newKategorie = '';
    let produkt_inputVerkaufspreis;
    let produkt_newVerkaufspreis = '';
    let produkt_inputEinkaufspreis;
    let produkt_newEinkaufspreis ='';
    let produkt_inputBezugsquelle;
    let produkt_newBezugsquelle = '';
    let produkt_inputMhd;
    let produkt_newMhd = '';

    let url="http://localhost:3000/api/v1/products";

    function product_add_To_DB() {
        if(produkt_newProduktname == ''){
            //present error message:
            let productAddAlert = document.getElementById('productAddAlert');
            productAddAlert.innerHTML = '<div class="alert '+
            'alert-dismissible alert-danger">'+
            '<button type="button" class="close" data-dismiss="alert">'+
            '&times;</button> <strong>Error!</strong> '+
            'Bitte gib einen Produktnamen ein um fortzufahren</div>';
        }else{
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": produkt_newProduktname,
                    "anzahl": produkt_newAnzahl,
                    "herkunft": produkt_newHerkunft,
                    "kategorie": produkt_newKategorie,
                    "verkaufspreis": produkt_newVerkaufspreis,
                    "einkaufspreis": produkt_newEinkaufspreis,
                    "mhd": produkt_newMhd,
                    "bezugsquelle": produkt_newBezugsquelle
                }),
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
    <button type="button" class="btn btn-secondary product_button-add-product" data-toggle="modal" data-target="#product_exampleModalCenter">Produkt hinzufügen
    </button>

    <!-- Modal -->
    <div class="modal fade" id="product_exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="product_exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="product_exampleModalLongTitle">Produkt hinzufügen</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="product_boxesBeside" id="product_boxLeft">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="product_produktname" placeholder="Produktname"
                                   aria-label="Produktname"
                                   aria-describedby="basic-addon1" bind:this={produkt_inputProdukt} bind:value="{produkt_newProduktname}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" id="product_anzahl" placeholder="Anzahl"
                                   bind:this={produkt_inputAnzahl} bind:value="{produkt_newAnzahl}">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="product_inputGroupSelect01">Herkunft</label>
                            </div>
                            <select class="custom-select" id="product_inputGroupSelect01" bind:this={produkt_inputHerkunft} bind:value="{produkt_newHerkunft}">
                                <option value="" selected>-- Herkunft --</option>
                                <option>Mond</option>
                                <option>Deutschland</option>
                                <option>Spanien</option>
                                <option>Frankreich</option>
                                <option>Neuseeland</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="product_inputGroupSelect02">Kategorie</label>
                            </div>
                            <select class="custom-select" id="product_inputGroupSelect02" bind:this={produkt_inputKategorie} bind:value="{produkt_newKategorie}">
                                <option value="" selected>-- Kategorie --</option>
                                <option>Kernobst</option>
                                <option>Steinobst</option>
                                <option>Beerenobst</option>
                                <option>Schalenobst</option>
                                <option>Südfrüchte / exotische Früchte</option>
                                <option>Blattgemüse</option>
                                <option>Fruchtgemüse</option>
                                <option>Sprossengemüse</option>
                                <option>Wintergemüse</option>
                                <option>Wurzelgemüse</option>
                                <option>Hülsenfrüchte</option>
                                <option>Sonstige</option>
                            </select>
                        </div>
                        <button type="button" class="btn btn-secondary btn-block" id="product_buttonLeft" data-dismiss="modal">Abbrechen</button>


                    </div>
                    <div class="product_boxesBeside" id="product_boxRight">
                        <div id="test">
                            <input type="date" class="form-control" id="product_mhd" placeholder="Mindesthaltbarkeitsdatum"
                                   aria-label="Mindesthaltbarkeitsdatum"
                                   aria-describedby="product_basic-addon1" bind:this={produkt_inputMhd} bind:value={produkt_newMhd}>
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" step="0.01" class="form-control" placeholder="Verkaufspreis"
                                   aria-label="ProductName" aria-describedby="product_basic-addon1" bind:this={produkt_inputVerkaufspreis}
                                   bind:value="{produkt_newVerkaufspreis}">
                            <div class="input-group-append">
                                <span class="input-group-text" id="product_basic-addon2">€</span>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" step="0.01" class="form-control" placeholder="Einkaufspreis"
                                   aria-label="ProductName" aria-describedby="product_basic-addon1" bind:this={produkt_inputEinkaufspreis}
                                   bind:value="{produkt_newEinkaufspreis}">
                            <div class="input-group-append">
                                <span class="input-group-text" id="product_basic-addon3">€</span>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Bezugsquelle"
                                   aria-label="sourceOfProduct"
                                   aria-describedby="product_basic-addon1" bind:this="{produkt_inputBezugsquelle}" bind:value={produkt_newBezugsquelle}>
                        </div>
                        <button type="button" class="btn btn-secondary btn-block" id="product_buttonRight" on:click={product_add_To_DB}>Produkt hinzufügen</button>

                    </div>
                    <div id="productAddAlert" />
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
        border: 0;
        outline: none;
        box-shadow: none;
    }
    .product_button-add-product{
        float: right;
        margin-right: 35px;
        margin-text-outline: 0;
        margin-bottom: 10px;
        background: #aefda7;
        color: #4e4e4e;
        font-weight: 800;
        font-size: larger;
        border-width: 0;
        border-radius: 0;    
    }
    .product_button-add-product:hover {
        background: #63b269;
    }
    .product_button-add-product:active, .product_button-add-product:visited, .product_button-add-product:focus {
        background-color: #aefda7;
        border-width: 0;
    }
    .product_boxesBeside {
        float: left;
        width: 50%;
        box-sizing: border-box;
    }
    #product_boxLeft{
        padding: 0 10px 0 100px;
    }
    #product_boxRight{
        padding: 0 100px 0 10px;
    }

    .modal-content {
        background: #4e4e4e;
    }

    #product_exampleModalLongTitle {
        color: white;
    }
    .modal-header {
        border-bottom: 0 none;
    }

    .modal-footer {
        border-top: 0 none;
    }
    #test{
        padding: 0 0 6% 0;
    }
    #product_buttonLeft{
        color: white;
        font-weight: bold;
        background-color: #c82333;
        border-color: #c82333;
        margin-top: 30px;
        border-radius: 0;
    }
    #product_buttonLeft:hover{
        color: black;
        background-color: white;
    }
    #product_buttonRight{
        color:black;
        font-weight: bold;
        background-color: #afffa8;
        border-color: #afffa8;
        margin-top: 30px;
        border-radius: 0;
    }
    #product_buttonRight:hover{
        color:black;
        background-color: white;
    }
</style>
