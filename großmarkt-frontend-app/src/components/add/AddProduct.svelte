<script>
    let inputProdukt;
    let newProduktname = '';
    let inputAnzahl;
    let newAnzahl = '';
    let inputHerkunft;
    let newHerkunft = '';
    let inputKategorie;
    let newKategorie = '';
    let inputVerkaufspreis;
    let newVerkaufspreis = '';
    let inputEinkaufspreis;
    let newEinkaufspreis ='';
    let inputBezugsquelle;
    let newBezugsquelle = '';
    let inputMhd;
    let newMhd = '';

    let url="http://localhost:3000/api/v1/products";

    function add_To_DB() {
        let product = {
            "name": newProduktname,
            "anzahl": newAnzahl,
            "herkunft": newHerkunft,
            "kategorie": newKategorie,
            "verkaufspreis": newVerkaufspreis,
            "einkaufspreis": newEinkaufspreis,
            "mhd": newMhd,
            "bezugsquelle": newBezugsquelle
        }
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": newProduktname,
                "anzahl": newAnzahl,
                "herkunft": newHerkunft,
                "kategorie": newKategorie,
                "verkaufspreis": newVerkaufspreis,
                "einkaufspreis": newEinkaufspreis,
                "mhd": newMhd,
                "bezugsquelle": newBezugsquelle
            }),
        }).then(res => res.json())
            .then(products =>{
                console.log('Success:', products);
            })
           ;

        console.log(product);
        inputProdukt.value = '';
        inputAnzahl.value = '';
        inputHerkunft.value = '';
        inputKategorie.value = '';
        inputVerkaufspreis.value = '';
        inputEinkaufspreis.value = '';
        inputMhd.value = '';
        inputBezugsquelle.value = '';
    }
</script>

<main>

    <!-- Button for modal -->
    <button type="button" class="btn btn-secondary add-product" id="buttonToggle"data-toggle="modal" data-target="#exampleModalCenter">Produkt hinzufügen
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title w-100" id="exampleModalLongTitle">Produkt hinzufügen</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="boxesBeside" id="boxLeft">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="produktname" placeholder="Produktname"
                                   aria-label="Produktname"
                                   aria-describedby="basic-addon1" bind:this={inputProdukt} bind:value="{newProduktname}">
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" id="anzahl" placeholder="Anzahl"
                                   bind:this={inputAnzahl} bind:value="{newAnzahl}">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Herkunft</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01" bind:this={inputHerkunft} bind:value="{newHerkunft}">
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
                                <label class="input-group-text" for="inputGroupSelect02">Kategorie</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect02" bind:this={inputKategorie} bind:value="{newKategorie}">
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
                        <button type="button" class="btn btn-secondary btn-block" id="buttonLeft" data-dismiss="modal">Abbrechen</button>


                    </div>
                    <div class="boxesBeside" id="boxRight">
                        <div id="test">
                            <input type="date" class="form-control" id="mhd" placeholder="Mindesthaltbarkeitsdatum"
                                   aria-label="Mindesthaltbarkeitsdatum"
                                   aria-describedby="basic-addon1" bind:this={inputMhd} bind:value={newMhd}>
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" step="0.01" class="form-control" placeholder="Verkaufspreis"
                                   aria-label="ProductName" aria-describedby="basic-addon1" bind:this={inputVerkaufspreis}
                                   bind:value="{newVerkaufspreis}">
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">€</span>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="number" step="0.01" class="form-control" placeholder="Einkaufspreis"
                                   aria-label="ProductName" aria-describedby="basic-addon1" bind:this={inputEinkaufspreis}
                                   bind:value="{newEinkaufspreis}">
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon3">€</span>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Bezugsquelle"
                                   aria-label="sourceOfProduct"
                                   aria-describedby="basic-addon1" bind:this="{inputBezugsquelle}" bind:value={newBezugsquelle}>
                        </div>
                        <button type="button" class="btn btn-secondary btn-block" id="buttonRight" data-dismiss="modal" on:click={add_To_DB}>Produkt hinzufügen</button>

                    </div>

                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

</main>

<style>
    .add-product {
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

    .add-product:hover {
        background: #63b269;
    }

    .add-product:active, .add-product:visited, .add-product:focus {
        background-color: #aefda7;
        border-width: 0;
    }
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
    #test{
        padding: 0px 0px 6% 0px;
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
        color:black;
        background-color: #afffa8;
        border-color: #afffa8;
    }
    #buttonRight:hover{
        color:black;
        background-color: white;
    }
    #buttonToggle{
        color: black;
        background-color: #afffa8;
        border-color: #afffa8;
    }

</style>
