window.onload = () => {
    const searchButton = document.getElementById("search");

    searchButton.addEventListener('click', () => {
        fetch('http://localhost/info2180-lab4/superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data)
            })
    })
}
