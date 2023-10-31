// Mengambil URL saat ini
    var currentURL = window.location.href;

    // Mengecek apakah URL saat ini mengandung kata khusus
    if (currentURL.includes("bing")) {
      window.location.href = "https://www.bing.com/";
    } else if (currentURL.includes("anime")) {
      window.location.href = "https://www.google.com/";
    } else if (currentURL.includes("yahoo")) {
      window.location.href = "https://www.yahoo.com/";
    } else if (currentURL.includes("duckduckgo")) {
      window.location.href = "https://duckduckgo.com/";
    } else if (currentURL.includes("example")) {
      window.location.href = "https://www.example.com/";
    } else {
      // Jika tidak ada kondisi yang terpenuhi, tidak ada pengalihan
    }