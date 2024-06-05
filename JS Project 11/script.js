import { fetchData,data } from "./script2"
const api_key = "44b803d9"
const resultsDiv = document.getElementById("results")
const inputBox = document.getElementById("inp")
const btn = document.getElementById("btn")
btn.addEventListener("click", fetchData)

function displayData (movies)
{
    movies.forEach(function (m)
    {
        const myDiv = document.createElement('div')  
        myDiv.classList.add('movie')
        const img = document.createElement('img')
        img.src = m.Poster;
        img.alt = m.Title;
        const title = document.createElement('h2')
        title.textContent = m.Title
        myDiv.append(img, title)
        resultsDiv.appendChild(myDiv)
    })
}