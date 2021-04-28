const key = process.env.RAWGAPIKEY;
const more = document.getElementById('more')
var cleanedArguments

const pageList = (argument = "") => {
    const preparePage = () => {
        cleanedArguments = argument.replace(/\s+/g, "-")
        let articles = ""

        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = url + "?search=" + argument;
            }
            fetch(`${finalURL}`)
            .then((reponse) => reponse.json())
            .then((game) => {
                let nine = game.results.slice(0, number)
                nine.forEach((article) => {
                    articles += `
                        <div class="cardGame">
                            <h1>${article.name}</h1>
                            <h2>${article.released}</h2>
                            <a href="#pageDetail/${article.id}">voir plus</a>
                        </div>  
                    `
                })
                document.querySelector(".page-list .articles").innerHTML = articles;
            })
        }
        fetchList(`https://api.rawg.io/api/games?key=${key}&${cleanedArguments}`)
    }
    const render = () => {
        pageContent.innerHTML = `
            <section class="page-list">
                <div class="articles">...loading</div>
            </section>
        `
        preparePage()
    }
    render()
}


const searchBar = document.getElementById('searchBar');
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    let game = searchBar.value.split(' ').join('-')


    fetch(`https://api.rawg.io/api/games?search=${game}&key=${key}`)
    .then((reponse) => reponse.json())
    .then((articles) => {
        let page = "";

        articles.results.forEach((article) => {
            page += `
            <div class="cardGame">
                <h1>${article.name}</h1>
                <h2>${article.released}</h2>
                <a href="#pageDetail/${article.id}">voir plus</a>
            </div>  
            `
        })
        document.querySelector(".page-list .articles").innerHTML = page;
    })
})







export { pageList }