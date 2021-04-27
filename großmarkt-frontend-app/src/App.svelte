<script>
    import Product from "./components/list/Product.svelte";
    import Producer from "./components/list/Producer.svelte";
    import Supplier from "./components/list/Supplier.svelte";
</script>

<main>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"><img src="./img/Logo.png" alt="Logo" id="logo"></a>
        <button
                class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <button type="button" class="btn btn-link navbar-button-link" id="nav-product" on:click={()=>
                    {
                        // showProducts = true;
                        document.getElementById('showProduct').style.display = 'block';
                        // showProducers = false;
                        document.getElementById('showProducer').style.display = 'none';
                        // showSuppliers = false;
                        document.getElementById('showSupplier').style.display = 'none';
                        // showClients = false;
                        document.getElementById('showClient').style.display = 'none';
                    }}>
                        Produkte
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-link navbar-button-link" id="nav-supplier" on:click={() =>
                    {
                        // showProducts = false;
                        document.getElementById('showProduct').style.display = 'none';
                        // showProducers = false;
                        document.getElementById('showProducer').style.display = 'none';
                        // showSuppliers = true;
                        document.getElementById('showSupplier').style.display = 'block';
                        // showClients = false;
                        document.getElementById('showClient').style.display = 'none';
                    }}>
                        Lieferanten
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-link navbar-button-link" id="nav-producer" on:click={() =>
                    {
                        // showProducts = false;
                        document.getElementById('showProduct').style.display = 'none';
                        // showProducers = true;
                        document.getElementById('showProducer').style.display = 'block';
                        // showSuppliers = false;
                        document.getElementById('showSupplier').style.display = 'none';
                        // showClients = false;
                        document.getElementById('showClient').style.display = 'none';
                    }}>
                        Produzenten
                    </button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-link navbar-button-link" id="nav-client" on:click={() =>
                    {
                        // showProducts = false;
                        document.getElementById('showProduct').style.display = 'none';
                        // showProducers = false;
                        document.getElementById('showProduct').style.display = 'none';
                        // showSuppliers = false;
                        document.getElementById('showProduct').style.display = 'none';
                        // showClients = true;
                        document.getElementById('showClient').style.display = 'block';
                    }}>
                        Kunden
                    </button>
                </li>
            </ul>
            <button class="btn btn-primary" id="nav-bill">
                Lieferschein erstellen
            </button>
            <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-person-circle"
                     viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </button>
        </div>
    </nav>
    <!-- End Navbar -->

    <!-- {#if showProducts} -->
    <div id="showProduct">
        <Product/>
    </div>
    <!-- {/if} -->
    <!-- {#if showProducers} -->
    <div id="showProducer" style="display: none;">
        <Producer/>
    </div>
    <!-- {/if} -->
    <!-- {#if showSuppliers} -->
    <div id="showSupplier" style="display: none;">
        <Supplier/>
    </div>
    <!-- {/if} -->
    <div id="showClient" style="display: none;">
        <!-- placeholder for clients -->
    </div>
</main>

<style>
    main {
        text-align: center
    }

    .navbar-button-link {
        color: #ffffff;
        font-weight: 600;
        margin-right: 25px;
        outline: none;
    }

    #nav-product:hover, #nav-product:focus, #nav-product:active {
        color: #ffffff;
        text-decoration: none;
        border-bottom: 4px solid #aefda7;
        border-radius: 0;
        box-shadow: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        outline: none;
    }

    #nav-producer:hover, #nav-producer:focus, #nav-producer:active {
        color: #ffffff;
        text-decoration: none;
        border-bottom: 4px solid #fd7e14;
        border-radius: 0;
        box-shadow: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        outline: none;
    }

    #nav-supplier:hover, #nav-supplier:focus, #nav-supplier:active {
        color: #ffffff;
        text-decoration: none;
        border-bottom: 4px solid #fdc824;
        border-radius: 0;
        box-shadow: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        outline: none;
    }

    #nav-client:hover, #nav-client:focus, #nav-client:active {
        color: #ffffff;
        text-decoration: none;
        border-bottom: 4px solid #cb99c9;
        border-radius: 0;
        box-shadow: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        outline: none;
    }

    #nav-bill {
        background: #00ccff;
        border-radius: 0;
        color: #ffffff;
        font-weight: 600;
        margin-right: 40px;
        padding-left: 20px;
        padding-right: 20px;
        outline: none;
    }

    #nav-bill:hover {
        background: #007ba7;
    }

    #logo {
        height: 70px;
        width: auto;
    }

</style>
