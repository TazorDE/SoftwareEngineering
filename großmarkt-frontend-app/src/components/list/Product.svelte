<script>
import AddProduct from "../add/AddProduct.svelte";
import ProductsEdit from "../edit/Products_edit.svelte";
import ProductsDelete from '../delete/Products_delete.svelte';

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
                        '<td><div id="edit'+product.id+'"></div></td>';
                    temp +=
                        '<td><div id="delete'+product.id+'" /></td>';
                })
                document.getElementById('products').innerHTML = temp;

                products.forEach((product)=>{
                    const edit = new ProductsEdit({
                        target: document.getElementById(`edit${product.id}`),
                        props: {
                            id: product.id,
                            name: product.name,
                            anzahl: product.anzahl,
                            herkunft: product.herkunft,
                            kategorie: product.kategorie,
                            verkaufspreis: product.verkaufspreis,
                            einkaufspreis: product.einkaufspreis,
                            bezugsquelle: product.bezugsquelle,
                            mhd: product.mhd
                        }
                    });
                    const del = new ProductsDelete({
                        target: document.getElementById(`delete${product.id}`),
                        props: {
                            id: product.id
                        }
                    });
                });
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

    <AddProduct />

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
