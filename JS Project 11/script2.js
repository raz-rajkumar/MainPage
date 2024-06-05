function fetchData() 
{
	fetch(`https://www.omdbapi.com/?s=${inputBox.value}&apikey=${api_key}`)
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data.Search);
            displayData(data.Search)
		})
		.catch(function (err) {
			console.log(err)
		})
}
export{fetchData,data}


