async function apiCall(url) {

  //add api call logic here

    try{
        let res = await fetch(url);

        let data = await res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err)
    }
}


function appendArticles(articles, main) {

    //add append logic here

    articles.map((items) =>{
        // console.log(items)
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = items.urlToImage;

        let title = document.createElement("h4");
        title.textContent = `Title: ${items.source.name}`;

        let description = document.createElement("p");
        description.textContent = items.description;

        div.onclick = () => {
            localStorage.setItem("article", JSON.stringify(items));
            window.location.href = 'news.html';
        }

        div.append(img, title, description)
        main.append(div);

    });
}

export { apiCall, appendArticles }