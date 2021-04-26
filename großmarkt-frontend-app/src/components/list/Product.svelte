<script>
    /**
     * This function fetches the products.json file and populates the table according
     * to the table headers
     *
     * At the end of a row a svg for editing and deleting the row is placed
     *
     * @param url   this is the url of the product-listing api
     */
    fetch('http://localhost:3000/api/v1/products/')
        .then(response => response.json())
        .then(products => {
            console.log(products);
            if (products.length > 0) {
                let temp = '';

                products.forEach((product) => {
                    temp += '<tr>';
                    temp += '<td>' + product.id + '</td>';
                    temp += '<td>' + product.name + '</td>';
                    temp += '<td>' + product.anzahl + '</td>';
                    temp += '<td>' + product.herkunft + '</td>';
                    temp += '<td>' + product.kategorie + '</td>';
                    temp += '<td>' + product.verkaufspreis + '</td>';
                    temp += '<td>' + product.einkaufspreis + '</td>';
                    temp += '<td>' + product.mhd + '</td>';
                    temp += '<td>' + product.bezugsquelle + '</td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">\n' +
                        '  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>\n' +
                        '</svg></td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ce7a83" class="bi bi-trash-fill" viewBox="0 0 16 16">' +
                        '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>' +
                        '</svg></td>';
                })
                document.getElementById('products').innerHTML = temp;
            }
        });

    /**
     * This function filters the table with the typed input in the search bar
     *
     *
     */
    (function (document) {
        'use strict';
        var TableFilter = (function (myArray) {
            var search_input;

            function _onInputSearch(e) {
                search_input = e.target;
                var tables = document.getElementsByClassName(search_input.getAttribute('data-table'));
                myArray.forEach.call(tables, function (table) {
                    myArray.forEach.call(table.tBodies, function (tbody) {
                        myArray.forEach.call(tbody.rows, function (row) {
                            var text_content = row.textContent.toLowerCase();
                            var search_val = search_input.value.toLowerCase();
                            row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                        });
                    });
                });
            }

            return {
                init: function () {
                    var inputs = document.getElementsByClassName('search-input');
                    myArray.forEach.call(inputs, function (input) {
                        input.oninput = _onInputSearch;
                    });
                }
            };
        })(Array.prototype);

        document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
                TableFilter.init();
            }
        });
    })(document);
</script>

<main>
    <div class="title-line">
        <h2 class="bold-title">Produkte</h2>
        <div class="search-bar">
            <select id="searchFilter">
                <option>Filter</option>
                <option label="Name">Name</option>
                <option label="Anzahl">Anzahl</option>
                <option label="Herkunft">Herkunft</option>
                <option label="Kategorie">Kategorie</option>
                <option label="Verkaufspreis">Verkaufspreis</option>
                <option label="Einkaufspreis">Einkaufspreis</option>
                <option label="Mindesthaltbarkeitsdatum">Mindesthaltbarkeitsdatum</option>
                <option label="Bezugsquelle">Bezugsquelle</option>
            </select>

            <input type="search" id="searchText" class="round-search search-input" data-table="filter-list"
                   name="searchText" placeholder="Produkt suchen...">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke-width="3" fill="currentColor"
                 class="bi bi-search"
                 viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
    </div>
    <button type="button" class="btn btn-primary add-product">Produkt hinzufügen</button>
    <div class="product-list">
        <table class="table table-hover filter-list">
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
    * {
        font-family: "Roboto";
    }

    svg:hover {
        cursor: pointer;
    }

    main {
        text-align: left;
    }

    .bold-title {
        font-weight: bolder;
        color: #4e4e4e;
    }

    .title-line {
        width: 100%;
        display: flex;
        padding: 15px 5px 15px 15px;
        left: 100px;
    }

    .search-bar {
        text-align: right;
        margin-right: 25px;
        position: relative;
        flex: auto;
    }

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

    .btn-primary:focus, .btn:focus {
        border-width: 0;
        box-shadow: none;
    }

    .round-search {
        background: #dadada;
        width: 500px;
        border-radius: 25px;
        border-width: 0;
        padding-left: 30px;
    }

    #searchFilter {
        background: #dadada;
        margin-right: 10px;
        border-radius: 0;
        border-width: 0;
    }


</style>
