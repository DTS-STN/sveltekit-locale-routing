<script>
  export let data;
  import { t } from "$lib/translations";
</script>

<svelte:head>
  <title>{$t(`${data.path}.title`)}</title>
</svelte:head>

<nav>
  <img src="/goc.svg" alt="" />
  <a href={`/${data.locale === "en" ? "fr" : "en"}/${data.path}`}
    >{data.locale === "en" ? "Français" : "English"}</a
  >
</nav>
<div class="container">
  <slot />
</div>

<style>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 7rem;
    border-bottom: 1.5px solid #e1e4e7;
    margin-bottom: 2rem;
  }
  nav img {
    max-height: 2rem;
  }
</style>
