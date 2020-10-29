<script context="module">
  import Instagram from "svelte-material-icons/Instagram.svelte";
  import EmailOutline from "svelte-material-icons/EmailOutline.svelte";
  import Twitter from "svelte-material-icons/Twitter.svelte"
  import Music from "svelte-material-icons/Music.svelte"
</script>

<script>
   let array = ["https://youtu.be/HAnj2fyjxRw", "https://youtu.be/FBUe_v6Mi70", "https://youtu.be/-5EmnQp3V48", "https://youtu.be/QKYkZnxZ3ZA", "https://youtu.be/0Fy7opKu46c", "https://youtu.be/5fnZmdd35Uk", "https://youtu.be/KwIe_sjKeAY", "https://youtu.be/lQFKMar4x-w", "https://youtu.be/VZAzgpSXgqY", "https://youtu.be/MTrKkqE9p1o", "https://youtu.be/LQ488QrqGE4", "https://youtu.be/fsccjsW8bSY",
       "https://youtu.be/VaBPY78D88g", "https://youtu.be/kJ4s3G7hgR4", "https://youtu.be/BW9Fzwuf43c", "https://youtu.be/K0siYUjV9UM"];
      
      const randomItem = array[Math.floor(Math.random()*array.length)];
  let now = new Date(),
    year;
     year = (now.getFullYear());
</script>

<footer class="font-sans bg-secondary text-white py-4 px-4">
  <div
    class="mx-auto max-w-xl overflow-hidden flex justify-around items-center">
    <a href="mailto:info@forsalenotboring.com">
    <EmailOutline size="2em" />
    </a>
    <a href="https://www.instagram.com/forsalenotboring/">
      <Instagram size="2em" />
    </a>
    <a href="https://twitter.com/__FSNB__">
      <Twitter size="2em" />
    </a>
    <a href={randomItem}>
      <Music size="2em" />
    </a>
  </div>
  <div
    class="mx-auto overflow-hidden mt-3">
    <p class="text-center text-sm"> Copyright &copy; {year} FSNB</p>
  </div>
</footer>
