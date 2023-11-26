<script>
    import { enhance } from "$app/forms";
    export let form;
    let sending = false;
</script>

<h1>Greeter</h1>

{#if sending}
    <p>
        <span class="spinner" role="img" aria-label="spinner">🌀</span>
        Sending...
    </p>
{:else if form}
    <p>{form?.greeting}</p>
{:else}
    <p>What's your name?</p>
{/if}

<form
    method="POST"
    use:enhance={() => {
        sending = true;
        return ({ update }) => {
            update().finally(() => {
                sending = false;
            });
        };
    }}
>
    <input disabled={sending} type="text" name="name" autofocus />
    <button disabled={sending} type="submit">Submit</button>
</form>

<style>
    p {
        line-height: 18px;
    }
    .spinner {
        display: inline-block;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
