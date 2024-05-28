

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            displayUser(data.results[0]);
        })
        .catch(error => console.error('Error fetching data:', error));
}
document.getElementById('getUser').addEventListener('click', fetchRandomUser);

function displayUser(user) {
    const userDisplay = document.getElementById('userDisplay');
    userDisplay.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
}
