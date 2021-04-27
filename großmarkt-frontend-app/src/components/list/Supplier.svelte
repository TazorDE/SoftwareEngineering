<script>
    import AddSuppliers from '../add/AddSuppliers.svelte';
import SuppliersEdit from '../edit/Suppliers_edit.svelte';
    /**
     * This function fetches the suppliers.json file and populates the table according
     * to the table headers
     *
     * At the end of a row a svg for editing and deleting the row is placed
     *
     * @param url   this is the url of the supplier-listing api
     */
    fetch('http://localhost:3000/api/v1/suppliers/')
        .then(response => response.json())
        .then(suppliers => {
            console.log(suppliers);
            if (suppliers.length > 0) {
                let temp = '';

                suppliers.forEach((supplier) => {
                    temp += '<tr>';
                    temp += '<td>' + supplier.id + '</td>';
                    temp += '<td>' + supplier.name + '</td>';
                    temp += '<td>' + supplier.plz + ' ' + supplier.ort + ',  ' + supplier.straße + '</td>';
                    temp += '<td>' + supplier.telnr + '</td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">' +
                        '<path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>' +
                        '<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>' +
                        '</svg></td>';
                    temp +=
                        '<td><div id="supplier'+supplier.id+'" /></td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ce7a83" class="bi bi-trash-fill" viewBox="0 0 16 16">' +
                        '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>' +
                        '</svg></td>';
                })
                document.getElementById('suppliers_list_element').innerHTML = temp;
                suppliers.forEach((supplier)=>{
                    const edit = new SuppliersEdit({
                        target: document.getElementById(`supplier${supplier.id}`),
                        props: {
                            id: supplier.id,
                            name: supplier.name,
                            plz: supplier.plz,
                            ort: supplier.ort,
                            straße: supplier.straße,
                            telefonnummer: supplier.telnr
                        }
                    })
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
        <h2 class="bold-title">Lieferanten</h2>
        <div class="search-bar">
            <select id="searchFilter">
                <option>Filter</option>
                <option label="Name">Name</option>
                <option label="Adresse">Adresse</option>
                <option label="Telefon">Telefon</option>
            </select>

            <input type="search" id="searchText" class="round-search search-input" data-table="filter-list3"
                   name="searchText" placeholder="Lieferant suchen...">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke-width="3" fill="currentColor"
                 class="bi bi-search"
                 viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
    </div>

    <!-- <button type="button" class="btn btn-primary add-supplier">Lieferant hinzufügen</button> -->
    <AddSuppliers />

    <div class="supplier-list">
        <table class="table table-hover filter-list3">
            <thead>
            <tr>
                <th scope="col">LieferantNr</th>
                <th scope="col">Name</th>
                <th scope="col">Adresse</th>
                <th scope="col">Telefon</th>
                <th scope="col">Preisliste</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody id="suppliers_list_element">
            </tbody>
        </table>
    </div>
</main>

<style>
    .btn-primary:focus, .btn:focus {
        border-width: 0;
        box-shadow: none;
    }
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
