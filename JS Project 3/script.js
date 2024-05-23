const mainDiv=document.getElementById('places')
const places=[
    {
        name:"TAJMAHAL",
        url:"https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-OG-Final.png",
        about:"Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal."
    },
    {
        name:"AMER FORT",
        url:"https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_activities_amber_fort_2_l_436_573.jpg"
    },
    {
        name:"HAWA MAHAL",
        url:"https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_activities-jaipur-hawa-mahal_l_400_640.jpg"
    },
    {
        name:"MAYSORE PALACE",
        url:"https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Mysore%20Palace_l_386_579.jpg"
    },
    {
        name:"QUTAB MINAR",
        url:"https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_qutab_minar_l_384_574.jpg"
    },
    {
        name:"INDIA GATE",
        url:"https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_india_gate_1_l_442_663.jpg"
    }
]
function displayData(){
    places.forEach(function(p)
    {
        const myDiv = document.createElement('div')
        myDiv.classList.add('places')
        const image = document.createElement("img")
				image.src = p.url
				image.alt = p.name
				const title = document.createElement("h2")
        title.textContent = p.name
        myDiv.append(image,title)
				mainDiv.appendChild(myDiv)
    })
}
displayData();