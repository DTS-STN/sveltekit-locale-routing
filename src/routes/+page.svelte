<svelte:head>
  <title>Sveltekit Locale Routing</title>
</svelte:head>

<div class="splash">
  <div class="container">
    <div class="top">
      <img src="goc.svg" alt="" />
      <div class="languages">
        <a href="/en/home">English</a>
        <a href="/fr/home">Français</a>
      </div>
    </div>
    <div class="toc">
      <div class="links">
        <a href="https://www.canada.ca/en/transparency/terms.html"
          >Terms & conditions</a
        >
        <span>•</span>
        <a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a>
      </div>
      <img src="canada.svg" alt="" />
    </div>
  </div>
</div>

<style>
  .splash {
    display: grid;
    place-content: center;
    background-image: url("splash.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: white;
    height: 400px;
  }
  .top {
    padding: 2rem;
  }
  .languages {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
    padding: 1rem;
  }
  .languages a {
    text-decoration: none;
    color: white;
    background-color: #26374a;
    padding: 1rem 1.5rem;
    border-bottom: 5px solid #e1e4e7;
  }
  .languages a:hover {
    background-color: #37516e;
  }
  .toc {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    padding: 2rem;
    background-color: #e1e4e7;
  }
  .toc a {
    text-decoration: none;
  }
  .toc img {
    height: 2rem;
  }
</style>
