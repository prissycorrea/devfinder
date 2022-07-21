let themeColorButton = document.querySelector('.color-mode')

themeColorButton.addEventListener("click", () => {
    let pageBackground = document.querySelector('.body')
    let pageContainer = document.querySelector('.container')
    let searchInput = document.querySelector('.search__input')
    let profileContainer = document.querySelector('.profile__container')
    let profileStatistics = document.querySelector('.profile__statistic')

    pageBackground.classList.toggle('light__mode--container')
    pageContainer.classList.toggle('light__mode--container')
    searchInput.classList.toggle('light__mode--box')
    profileContainer.classList.toggle('light__mode--box')
    profileStatistics.classList.toggle('light__mode--container')
    
    if(themeColorButton.value == 'dark') {
        themeColorButton.innerHTML = `<i class="fa-solid fa-sun"></i> light</p>`
        themeColorButton.value = 'light'
    } else {
        themeColorButton.innerHTML = `<i class="fa-solid fa-moon"></i> dark`
        themeColorButton.value = 'dark'
    }
})