const key = process.env.RAWGAPIKEY;
var cleanedArguments;

const pageDetail = (argument = "") => {
    const preparePage = () => {
        cleanedArguments = argument.replace(/\s+/g, "-");

        const fetchGame = (url) => {
            let finalURL = url;

            fetch(`${finalURL}`)
            .then((reponse) => reponse.json())
            .then((game) => {
                let {name, released, description} = game;

                let articleDOM = document.querySelector(".page-detail .article");

                articleDOM.querySelector("h1.title").innerHTML = name;
                articleDOM.querySelector("p.release-date span").innerHTML = released;
                articleDOM.querySelector("p.description").innerHTML = description;
            })
        }

        fetchGame(`https://api.rawg.io/api/games/${cleanedArguments}?key=${key}`)
    }

    const render = () => {
        pageContent.innerHTML = `
            <section class="page-detail">
                <div class="article">
                    <h1 class="title"></h1>
                    <p class="release-date">Release date : <span></span></p>
                    <p class="description"></p>
                </div>
            </section>
        `

        preparePage()
    }

    render()
}

export { pageDetail }