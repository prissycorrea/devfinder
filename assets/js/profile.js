const profileImage = document.querySelector('.profile__image')
const userName = document.querySelector('.profile__title')
const joined = document.querySelector('.profile__joined')
const userURL = document.querySelector('.profile__username')
const biography = document.querySelector('.profile__bio')

const repositories = document.querySelector('.profile__repos-number')
const followers = document.querySelector('.profile__followers-number')
const following = document.querySelector('.profile__following-number')

const userLocation = document.querySelector('.social__location')
const userLink = document.querySelector('.social__link')
const userTwitter = document.querySelector('.social__twitter')
const userWork = document.querySelector('.social__work')

const searchButton = document.querySelector('.search__button')
const searchBar = document.querySelector('.search__input')


//chama a função callUser ao dar 'enter' no input
searchBar.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        callUser()
        limpar()
    }
});

const callUser = () => {
    let search = document.querySelector('.search__input').value
    let url = `https://api.github.com/users/${search}`
    fetch(url)
    .then(function(response) {
        response.json()
        .then(function(data) {
            const formatedJoined = (new Date(data.created_at).toString()).substring(4,15)
                //exibe nome, login e data de início
                userName.innerHTML = data.name
                userURL.innerHTML = ("@" + data.login)
                joined.innerHTML = "Joined " + formatedJoined
                //exibe biografia, caso exista
                if((data.bio) == null) {
                    biography.innerHTML = "This profile has no bio"
                } else {
                    biography.innerHTML = data.bio
                }
                //exibe numero de repositórios, seguidores e seguindo
                repositories.innerHTML = data.public_repos
                followers.innerHTML = data.followers
                following.innerHTML = data.following
                //exibe localização, caso exista
                if((data.location) == null) {
                    userLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ` + "Not informed"
                } else {
                    userLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`
                }
                //exibe link pessoal, caso exista
                if((data.blog) == null || (data.blog) == "") {
                    userLink.innerHTML = `<i class="fa-solid fa-link"></i>` + "Not informed"
                } else {
                    userLink.innerHTML = `<i class="fa-solid fa-link"></i> ${data.blog}`
                }
                //exibe usuário do twitter, caso exista
                if((data.twitter_username) == null) {
                    userTwitter.innerHTML = `<i class="fa-brands fa-twitter"></i>` + "Not informed" 
                } else {
                    userTwitter.innerHTML = `<i class="fa-brands fa-twitter"></i> ${data.twitter_username}`
                }
                //exibe nome da empresa, caso exista
                if((data.company) == null) {
                    userWork.innerHTML = `<i class="fa-solid fa-building"></i>` + "Not informed"
                } else {
                    userWork.innerHTML = `<i class="fa-solid fa-building"></i> ${data.company}`
                }
                //exibe avatar
                profileImage.innerHTML = `<img src="${data.avatar_url}">`
        })
        .catch(err => console.log(err))
    });
}

function limpar() {
    document.querySelector('.search__input').value = ''
}
