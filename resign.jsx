<div class="flex flex-col md:flex-row justify-center items-center bg-zinc-800 dark:bg-zinc-900 text-white dark:text-zinc-300 min-h-screen p-8">
    <div class="w-full md:w-1/2 p-8 order-2 md:order-1">
        <h1 class="text-4xl font-bold mb-4">Photo Retouch</h1>
        <p class="mb-6 hidden md:block">Our user-friendly app allows you to quickly and accurately resize your images while preserving the original aspect ratio, ensuring your photos look flawless at any size.</p>
        
        <div class="mb-4">
            <label for="width" class="block mb-2">Width:</label>
            <input type="number" id="width" value="700" class="w-full p-2 bg-zinc-700 dark:bg-zinc-800 border border-zinc-600 dark:border-zinc-700 rounded">
        </div>
        
        <div class="mb-4">
            <label for="height" class="block mb-2">Height:</label>
            <input type="number" id="height" class="w-full p-2 bg-zinc-700 dark:bg-zinc-800 border border-zinc-600 dark:border-zinc-700 rounded">
        </div>
        
        <div class="mb-6">
            <label class="block mb-2">Proportion:</label>
            <div class="flex gap-2">
                <button class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white dark:text-zinc-300 font-bold py-2 px-4 rounded active:bg-green-500 active:dark:bg-green-700 active:hover:bg-green-600 active:dark:hover:bg-green-800">1:1</button>
                <button class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white dark:text-zinc-300 font-bold py-2 px-4 rounded active:bg-green-500 active:dark:bg-green-700 active:hover:bg-green-600 active:dark:hover:bg-green-800">16:9</button>
                <button class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white dark:text-zinc-300 font-bold py-2 px-4 rounded active:bg-green-500 active:dark:bg-green-700 active:hover:bg-green-600 active:dark:hover:bg-green-800">9:16</button>
                <button class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white dark:text-zinc-300 font-bold py-2 px-4 rounded active:bg-green-500 active:dark:bg-green-700 active:hover:bg-green-600 active:dark:hover:bg-green-800">4:3</button>
            </div>
        </div>

        <button id="randomColorBtn" class="bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-800 text-white dark:text-zinc-300 font-bold py-2 px-4 rounded w-full">Random Color</button>
    </div>

    <div class="w-full md:w-1/2 p-8 order-1 md:order-2">
        <img src="https://placehold.co/600x400" alt="Placeholder Image" class="rounded-lg shadow-lg">
    </div>
</div>

<script>
    const randomColorBtn = document.getElementById('randomColorBtn');
    randomColorBtn.addEventListener('click', () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
        document.querySelectorAll('.bg-blue-500').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active:bg-green-500');
                btn.classList.toggle('active:dark:bg-green-700');
                btn.classList.toggle('active:hover:bg-green-600');
                btn.classList.toggle('active:dark:hover:bg-green-800');
            });
        });
    });
</script>


