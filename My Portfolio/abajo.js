
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');

 
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');

    
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙 Dark Mode';
        }
    });
});


const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';


function getAccessToken() {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = {
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = 'grant_type=client_credentials';

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => data.access_token)
    .catch(error => console.error('Error fetching access token:', error));
}


function fetchSpotifyData(type, id) {
    return getAccessToken().then(token => {
        const url = `https://api.spotify.com/v1/${type}s/${id}`;
        const headers = {
            'Authorization': `Bearer ${token}`,
        };

        return fetch(url, { headers: headers })
            .then(response => response.json())
            .catch(error => console.error('Error fetching Spotify data:', error));
    });
}

function embedSpotifyContent(type, id) {
    fetchSpotifyData(type, id).then(data => {
        let iframeUrl;
        
    
        if (type === 'playlist') {
            iframeUrl = `https://open.spotify.com/embed/playlist/${id}?utm_source=generator`;
        } else if (type === 'artist') {
            iframeUrl = `https://open.spotify.com/embed/artist/${id}?utm_source=generator`;
        }


        const iframe = document.createElement('iframe');
        iframe.src = iframeUrl;
        iframe.style.borderRadius = '12px';
        iframe.width = '100%';
        iframe.height = '352px';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';

   
        document.getElementById('playlist-container').appendChild(iframe);
    });
}


embedSpotifyContent('playlist', '37i9dQZF1DXcBWIGoYBM5M'); 

