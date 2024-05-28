const mainDiv = document.getElementById("main")
function fetchData() {
	fetch("https://api.sampleapis.com/cartoons/cartoons2D")
        .then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data);displayData(data)
        })
    .catch(function(err){console.log(err)})
}
fetchData()

function displayData (arr)
{
    console.log(arr);
    arr.forEach(function (p)
    {
        const div = document.createElement("div")
				div.classList.add("cartoon")
				const image = document.createElement("img")
        image.src = p.image
        image.alt = p.title;
        const ttile = document.createElement('h2')
        ttile.textContent = p.title;
        const year = document.createElement('p')
        year.textContent=p.year
        const epsode = document.createElement('p')
        year.textContent=p.episodes
        const rating = document.createElement('p')
        year.textContent=p.rating
				div.append(image,ttile,year,epsode,rating)
				mainDiv.appendChild(div)
   })

}