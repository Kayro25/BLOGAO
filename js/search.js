document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById('search-form');
    const searchBox = document.getElementById('search-box');

    // Envia a busca quando pressionar Enter
    searchBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Previne a ação padrão de submit
            let searchTerm = searchBox.value.trim();

            if (searchTerm.length > 0) {
                window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            }
        }
    });
});
