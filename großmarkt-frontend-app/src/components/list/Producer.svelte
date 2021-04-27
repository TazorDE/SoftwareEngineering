<script>
import AddProducers from "../add/AddProducers.svelte";
import ProducersEdit from "../edit/Producers_edit.svelte";

    /**
     * This function fetches the producers.json file and populates the table according
     * to the table headers
     *
     * At the end of a row a svg for editing and deleting the row is placed
     *
     * @param url   this is the url of the producer-listing api
     */
    fetch('http://localhost:3000/api/v1/producers/')
        .then(response => response.json())
        .then(producers => {
            console.log(producers);
            if (producers.length > 0) {
                let temp = '';

                producers.forEach((producer) => {
                    temp += '<tr>';
                    temp += '<td>' + producer.id + '</td>';
                    temp += '<td>' + producer.name + '</td>';
                    temp += '<td>' + producer.plz + ' ' + producer.ort + ',  ' + producer.straße + '</td>';
                    temp += '<td>' + producer.telnr + '</td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">' +
                        '<path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>' +
                        '<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>' +
                        '</svg></td>';
                    temp +=
                        '<td><div id="producer'+producer.id+'" /></td>';
                    temp +=
                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ce7a83" class="bi bi-trash-fill" viewBox="0 0 16 16">' +
                        '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>' +
                        '</svg></td>';
                })
                document.getElementById('producers').innerHTML = temp;
                producers.forEach((producer)=>{
                    const edit = new ProducersEdit({
                        target: document.getElementById(`producer${producer.id}`),
                        props: {
                            id: producer.id,
                            name: producer.name,
                            plz: producer.plz,
                            ort: producer.ort,
                            straße: producer.straße,
                            telefonnummer: producer.telnr
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
        // 'use strict';
        const TableFilter2 = (function (myArray2) {
            let search_input2;

            function _onInputSearch2(e) {
                search_input2 = e.target;
                const tables2 = document.getElementsByClassName(search_input2.getAttribute('data-table2'));
                myArray2.forEach.call(tables2, function (table2) {
                    myArray2.forEach.call(table2.tBodies, function (tbody2) {
                        myArray2.forEach.call(tbody2.rows, function (row2) {
                            const text_content2 = row2.textContent.toLowerCase();
                            const search_val2 = search_input2.value.toLowerCase();
                            row2.style.display = text_content2.indexOf(search_val2) > -1 ? '' : 'none';
                        });
                    });
                });
            }

            return {
                init: function () {
                    const inputs2 = document.getElementsByClassName('search-input2');
                    myArray2.forEach.call(inputs2, function (input2) {
                        input2.oninput = _onInputSearch2;
                    });
                }
            };
        })(Array.prototype);

        document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
                TableFilter2.init();
            }
        });
    })(document);
</script>

<main>
    <div class="title-line">
        <h2 class="bold-title">Produzenten</h2>
        <div class="search-bar">
            <select id="searchFilter">
                <option>Filter</option>
                <option label="Name">Name</option>
                <option label="Adresse">Adresse</option>
                <option label="TelefonNr">Telefon</option>
            </select>

            <input type="search" id="searchText2" class="round-search search-input2" data-table2="filter-list2"
                   name="searchText" placeholder="Produzent suchen...">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke-width="3" fill="currentColor"
                 class="bi bi-search"
                 viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
    </div>

    <!-- <button type="button" class="btn btn-primary add-producer">Produzent hinzufügen</button> -->
    <AddProducers />

    <div class="producer-list">
        <table class="table table-hover filter-list2">
            <thead>
            <tr>
                <th scope="col">ProduzentNr</th>
                <th scope="col">Name</th>
                <th scope="col">Adresse</th>
                <th scope="col">Telefon</th>
                <th scope="col">Preisliste</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody id="producers">
            </tbody>
        </table>
    </div>
</main>

<style>
    * {
        font-family: "Roboto";
    }

    main {
        text-align: left;
    }

    svg:hover {
        cursor: pointer;
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

    .add-producer {
        float: right;
        margin-right: 35px;
        margin-text-outline: 0;
        margin-bottom: 10px;
        background: #ffc29e;
        color: #4e4e4e;
        font-weight: 800;
        font-size: larger;
        border-width: 0;
        border-radius: 0;
    }

    .add-producer:hover {
        background: #ff9e39;
    }

    .add-producer:active, .add-producer:visited, .add-producer:focus {
        background-color: #ffc29e;
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
