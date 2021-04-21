<script>
	import Example from "./components/Example.svelte"
</script>

<main>
	<!-- Navbar -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">Logo</a>
		<button 
			class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" 
			aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarColor02">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<button type="button" class="btn btn-link navbar-button-link">
						Produkte
					</button>
				</li>
				<li class="nav-item">
					<button type="button" class="btn btn-link navbar-button-link">
						Lieferanten
					</button>
				</li>
				<li class="nav-item">
					<button type="button" class="btn btn-link navbar-button-link">
						Produzenten
					</button>
				</li>
				<li class="nav-item">
					<button type="button" class="btn btn-link navbar-button-link">
						Kunden
					</button>
				</li>
			</ul>
			<button class="btn btn-primary">
				Lieferschein erstellen
			</button>
			<button class="btn">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
					<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
					<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
				</svg>
			</button>
		</div>
	</nav>
	<!-- End Navbar -->
	<Example></Example>
</main>

<style>
	main {
		text-align: center
	}

	.navbar-button-link {
		color: white;
	}
	.navbar-button-link:hover {
		color: rgb(167, 167, 167);
	}

</style>