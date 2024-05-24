const mainDiv=document.getElementById('products')
const products=[
  {
    "title": "Death Bed",
    "artist": "Powfu",
    "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
    "id": "1"
  },
  {
    "title": "Bad Liar",
    "artist": "Imagine Dragons",
    "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
    "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
    "id": "2"
  },
  {
    "title": "Faded",
    "artist": "Alan Walker",
    "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
    "url": "https://samplesongs.netlify.app/Faded.mp3",
    "id": "3"
  },
  {
    "title": "Hate Me",
    "artist": "Ellie Goulding",
    "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
    "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
    "id": "4"
  },
  {
    "title": "Solo",
    "artist": "Clean Bandit",
    "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
    "url": "https://samplesongs.netlify.app/Solo.mp3",
    "id": "5"
  },
  {
    "title": "Without Me",
    "artist": "Halsey",
    "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
    "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
    "id": "6"
  }
]
function displayData(){
    products.forEach(function(p)
    {
        const myDiv = document.createElement('div')
        myDiv.classList.add('products')
        const image = document.createElement("img")
				image.src = p.artwork
				image.alt = p.title
				const title = document.createElement("h2")
        title.textContent = p.title      
        myDiv.append(image,title)
				mainDiv.appendChild(myDiv)
    })
}
displayData();