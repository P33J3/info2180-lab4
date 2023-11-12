window.onload = () => {
    // const searchButton = document.getElementById("search");
    const results = document.getElementById("results")


    // searchButton.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     fetch('http://localhost/info2180-lab4/superheroes.php')
    //         .then(response => response.text())
    //         .then(data => {
    //             results.innerHTML += data
    //         })
    // })

    document.querySelector('#form').addEventListener('submit', (event) => {
        event.preventDefault();
        let hero;
        hero = encodeURIComponent(document.getElementById('searchInput').value.trim());
        console.log('hero value', hero);

        let url = 'http://localhost/info2180-lab4/superheroes.php?query=' + hero;
        console.log('url', url);

        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.text();
                }
            })
            .then(data => {
                // console.log('responseData', data)
                results.innerHTML = data;
            })
        })
}
