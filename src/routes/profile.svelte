<script>
    import Main from "../components/Main.svelte";

    const couter = ()=>{
      console.log('hola')
    }
</script>

<style>
.Profile{
    padding: 4em 0 0 0;
}
</style>

<svelte:head>
    <title>Configuración del Perfil</title>
</svelte:head>

<Main>
    <div class="Profile">
        <h2 on:load={couter}>Configuarar el perfil</h2>
    </div>
</Main>