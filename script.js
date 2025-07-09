let api_key="zYMeOucxMS6cpnMUGj9TmpA-x_cR8VuIJk-K0WnXRcQ"
let search_icon=document.getElementById("search_icon")
search_icon.addEventListener("click",()=>{
    let search_term=document.getElementById("search_term").value
    let fetchData=async()=>{
        let info =await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search_term}&client_id=${api_key}`)  
    let res= await info.json()
    let img_container=document.getElementById("img_container")
    img_container.innerHTML=''
    for (let i=0;i<res.results.length;i++)
        {
            img_container.innerHTML+=`
            <img src=${res.results[i].urls.regular} class="images" >
            `}
}
fetchData()
})  