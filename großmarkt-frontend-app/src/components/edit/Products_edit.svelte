<script>
    //set up props for use in the component
    export let id;
    export let name;
    export let verkaufspreis;
    export let einkaufspreis;
    export let anzahl;
    export let herkunft;
    export let kategorie;
    export let bezugsquelle;
    export let mhd;

    //update product in database
    let url = "http://localhost:3000/api/v1/products";
    let method = "PUT";

    let alert = '<div class="alert alert-dismissible alert-danger">';
    alert += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    alert += '<strong>Oh snap!</strong>';
    alert += 'Es ist ein Fehler beim Ändern der Daten aufgetreten.';
    alert +=' Bitte versuche es erneut.</div>';

    function update_database() {
        //store updated values in object
        let product_data = {
            "id": id,
            "name": name,
            "anzahl": anzahl,
            "herkunft": herkunft,
            "kategorie": kategorie,
            "verkaufspreis": verkaufspreis,
            "einkaufspreis": einkaufspreis,
            "mhd": mhd,
            "bezugsquelle": bezugsquelle
        }
        console.log(product_data);
        //api call to update the product
        fetch(url, {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "name": name,
                "anzahl": anzahl,
                "herkunft": herkunft,
                "kategorie": kategorie,
                "verkaufspreis": verkaufspreis,
                "einkaufspreis": einkaufspreis,
                "mhd": mhd,
                "bezugsquelle": bezugsquelle
            })
        }).then(res => {
            console.log(res);
            if(res.status != 200){
                document.getElementById(`alertbox${id}`).innerHTML = alert;
            }
        });
    }
</script>

<main>
    <!-- button to open edit modal -->
    <button type="button" class="border-0" data-toggle="modal" data-target="#editProductsModal{id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
    </button>
    
    <!-- Modal used to edit existing product data -->
    <div class="modal fade" id="editProductsModal{id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">
                        Eintrag bearbeiten
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- form for editing an existing produkt. filled with relevant prop data -->
                    <label for="produktname">Produktname</label>
                    <input type="text" class="form-control" id="produktname" bind:value="{name}"/>
                    <label for="anzahl">Anzahl</label>
                    <input type="text" class="form-control" id="anzahl" bind:value="{anzahl}"/>
                    <label for="herkunft">Herkunft</label>
                    <select class="form-control" id="herkunft" bind:value="{herkunft}">
                        <option>Deutschland</option>
                        <option>Spanien</option>
                        <option>Neuseeland</option>
                        <option>Mond</option>
                        <option>Frankreich</option>
                    </select>
                    <label for="kategorie">Kategorie</label>
                    <select class="form-control" id="kategorie" bind:value="{kategorie}">
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
                    <label for="verkaufspreis">Verkaufspreis</label>
                    <input type="text" class="form-control" id="verkaufspreis" bind:value="{verkaufspreis}"/>
                    <label for="einkaufspreis">Einkaufspreis</label>
                    <input type="text" class="form-control" id="einkaufspreis" bind:value="{einkaufspreis}"/>
                    <label for="bezugsquelle">Bezugsquelle</label>
                    <input type="text" class="form-control" id="bezugsquelle" bind:value="{bezugsquelle}"/>
                    <label for="mhd">Mindesthaltbarkeitsdatum</label>
                    <input type="date" class="form-control" id="mhd" bind:value="{mhd}"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Abbruch</button>
                    <button type="button" class="btn btn-primary" on:click={update_database} data-dismiss="modal">Daten überschreiben</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Error message -->
    <div id="alertbox{id}"></div>
</main>

<style>

</style>