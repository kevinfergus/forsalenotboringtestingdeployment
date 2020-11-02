<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
    $: {
      if (typeof gtag !== "undefined"){
        gtag("config", "G-MLLNG9V13W", {
          page_path: $page.path
        });
      }
    }
  </script>