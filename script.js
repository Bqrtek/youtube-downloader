document.getElementById('download-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const url = document.getElementById('url').value;

    // Walidacja URL
    if (!url) {
        document.getElementById('result').innerHTML = "<p style='color:red;'>Proszę wprowadzić prawidłowy URL wideo z YouTube.</p>";
        return;
    }

    // Symulacja procesu pobierania wideo
    document.getElementById('result').innerHTML = "<p>Pobieranie wideo...</p>";

    // Przykład wynikowego linku do pobrania wideo
    setTimeout(() => {
        document.getElementById('result').innerHTML = `<p>Twoje wideo jest gotowe do pobrania:</p><a href="#" style="color:#007bff;">Pobierz MP4</a>`;
    }, 2000);
});
