<script lang="ts">
	let count = $state(0);

	function inc() {
		count++;
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 text-white">
	<h1 class="text-4xl font-bold text-blue-400">Tailwind v4 Test</h1>

	<p class="text-lg text-gray-300">Svelte 5 + Runes + Tailwind 4 working 🚀</p>

	<button
		onclick={inc}
		class="rounded-lg bg-blue-600 px-6 py-3 font-semibold shadow-lg transition hover:bg-blue-700"
	>
		Count: {count}
	</button>

	<div class="mt-8 grid grid-cols-3 gap-4">
		<div class="rounded-lg bg-red-500 p-4">1</div>
		<div class="rounded-lg bg-green-500 p-4">2</div>
		<div class="rounded-lg bg-yellow-500 p-4">3</div>
	</div>
</div>
