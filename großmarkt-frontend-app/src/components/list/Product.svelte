<script>
    fetch('http://localhost:3000/api/v1/products/')
        .then(response => response.json())
        .then(products => {
            console.log(products);
            if(products.length > 0){
                let temp = '';

                products.forEach((product) => {
                    temp += '<tr>';
                    temp += '<td>' + product.id+'</td>';
                    temp += '<td>' + product.name+'</td>';
                    temp += '<td>' + product.anzahl+'</td>';
                    temp += '<td>' + product.herkunft+'</td>';
                    temp += '<td>' + product.kategorie+'</td>';
                    temp += '<td>' + product.verkaufspreis+'</td>';
                    temp += '<td>' + product.einkaufspreis+'</td>';
                    temp += '<td>' + product.mhd+'</td>';
                    temp += '<td>' + product.bezugsquelle+'</td>';
                })
                document.getElementById('products').innerHTML = temp;
            }
        });
</script>

<main>
    <h1>Produkte</h1>
    <div class="search-bar">
        <select id="searchFilter">
            <option>Filter</option>
            <option label="Name">Name</option>
            <option label="Anzahl">Anzahl</option>
            <option label="Herkunft">Herkunft</option>
            <option label="Kategorie">Kategorie</option>
            <option label="Verkaufspreis">Verkaufspreis</option>
            <option label="Einkaufspreis">Einkaufspreis</option>
            <option label="Einkaufspreis">Mindesthaltbarkeitsdatum</option>
            <option label="Bezugsquelle">Bezugsquelle</option>
        </select>

        <input type="search" class="round-search" name="searchText" placeholder="Produkt suchen...">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
             viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>

    </div>
    <div class="add-product">
        <button type="button" class="btn btn-primary">Produkt hinzufügen</button>
    </div>
    <div class="product-list">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">ProduktNr</th>
                <th scope="col">Produktname</th>
                <th scope="col">Anzahl</th>
                <th scope="col">Herkunft</th>
                <th scope="col">Kategorie</th>
                <th scope="col">Verkaufspreis (€)</th>
                <th scope="col">Einkaufspreis (€)</th>
                <th scope="col">Mindesthaltbarkeitsdatum</th>
                <th scope="col">Bezugsquelle</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody id="products">
            </tbody>
        </table>
    </div>

</main>

<style>
    p {
        font: 1rem "Comic Sans MS";
    }
</style>
