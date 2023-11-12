function trim(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }
}

//res.data.length

let row = document.querySelector(".container .row")
axios("https://api.tvmaze.com/shows")
.then(res=>{
    for (let i = 0; i < 48; i++) {
        let summary = trim(res.data[i].summary , 94 );
        row.innerHTML+=
        `
        <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="${res.data[i].image.medium}" class="card-img-top" alt="${res.data[i].name}">
                            <div class="card-body">
                              <h5 class="card-title">${res.data[i].name}</h5>
                              <p class="card-text">${summary}</p>
                              <a href="Description.html" target="_blank" class="btn-primary">Go to description</a>
                            </div>
                          </div>
                    </div>
        `
    }
})
