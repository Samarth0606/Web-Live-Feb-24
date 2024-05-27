



let inpEl = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')


btn.addEventListener('click' , function(){
    let searchText = inpEl.value;
    // call api
    let data = fetchData(searchText);
    inpEl.value = ""
})

//axios
// function fetchData(searchText){
//     axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//     .then(function(data){
//         // console.log(data.data)
//         manipulateDom(data.data)
//     })
// }

//fetch
function fetchData(searchText){
   fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(data){ //meta data -> array ❌
        return data.json();
    })
    .then(function(res){
        console.log(res , "fetch")
        manipulateDom(res);
    })
}

function manipulateDom(datas){
    // console.log(datas) //array

    // previous data hatau
    while(list.firstChild){
        list.firstChild.remove();
    }
    
    // new data dikhau
    for(let data of datas){
        let figure = document.createElement('figure');

        figure.innerHTML = `
            <img src=${data.show.image.medium} alt="img">
            <br>
            <h2>Language:${data.show.language} </h2>
        `
        list.append(figure);
    }
}

