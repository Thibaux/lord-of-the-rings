<template>
    <div id="app">
        <div class="LOTR">
            <div class="header">
                <div class="logo">
                    <a href="#">
                        <router-link to="/">
                            <img src="./assets/logo.jpg" alt="LOTR-logo">
                        </router-link>
                    </a>
                </div>
                <div class="menu" v-if="wide === true">
                    <a href="#">
                        <router-link to="/books">
                            <div class="menu_item books_link">Books
                            </div>
                        </router-link>
                    </a>
                    <a href="#">
                        <router-link to="/films">
                            <div class="menu_item">Films</div>
                        </router-link>
                    </a>
                    <a href="#">
                        <router-link to="/characters">
                            <div class="menu_item">Characters</div>
                        </router-link>
                    </a>
                    <a href="#">
                        <router-link to="/races">
                            <div class="menu_item last">Races</div>
                        </router-link>
                    </a>
                </div>
                <div class="mobileMenu" v-else="wide === false">
                    <Slide class="mobile_Menu" right :closeOnNavigation="true" :crossIcon="false" width="150">
                        <router-link to="/books">
                            <a href="#">
                                <span>Books</span>
                            </a>
                        </router-link>
                        <router-link to="/films">
                            <a href="#">
                                Films
                        </a>
                        </router-link>
                        <router-link to="/characters">
                            <a href="#">
                                Characters
                        </a>
                        </router-link>
                        <router-link to="/races">
                            <a href="#">
                                Races
                        </a>
                        </router-link>
                    </Slide>
                </div>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
            <div class="footer">
                <div class="name">&#169; Thibaux Swildens</div>
                <div class="links">
                    <div class="github">
                        <a target="_blank" href="https://github.com/Thibaux">
                            <img src="./assets/GitHub-Mark.png" alt="logo-github">
                        </a>
                    </div>
                    <div class="linkedIn">
                        <a target="_blank" href="https://www.linkedin.com/in/thibaux-swildens-17ba80ba/">
                            <img src="./assets/linkedin-logo.png" alt="logo-linkedIn">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    name: 'App',
    components: {
        Slide
    },
    data() {
        return {
            bgClicked: true,
            bgClickedLogo_Footer: true,
            booksCliked: false,
            wide: true,
        };
    },
    created() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },

    methods: {
        onResize() {
            if (window.innerWidth < 960) {
                this.wide = false
            } else {
                this.wide = true
            }

        }
    }
};
</script>

<style scoped lang="css">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    background-color: #EEEEEE;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    font-family: Comfortaa;
    text-align: center;
    color: #333333;
    font-weight: 300;
    font-size: 18px;
    font-size: 13;
}

.LOTR {
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
    padding-bottom: 2rem;
    height: 100%;
}


/* Header */

.header {
    top: 0;
    width: 80%;
    margin-left: 10%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}


/* Nav */

.logo img {
    width: auto;
    height: 70px;
}

.bgLogo {
    display: none;
}

.menu {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.menu a {
    text-decoration: none;
    color: #333333;
}

.menu_item {
    line-height: 10px;
    width: 150px;
    height: 10px;
    padding: 2rem 0rem;
}

.menu a,
.menu a {
    position: relative;
    height: 70px;
}

.menu a:after,
.menu a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
}

.menu a:hover:after {
    width: 100%;
}

.menu a {
    transition: all 1s;
}

.menu a:after {
    text-align: left;
    content: '.';
    margin: 0;
    opacity: 0;
}

.menu a:hover {
    color: #fff;
    z-index: 1;
    background-color: #BBBBBB;
}

.menu a:hover:after {
    z-index: -10;
    animation: fill 1s forwards;
    -webkit-animation: fill 1s forwards;
    -moz-animation: fill 1s forwards;
    opacity: 1;
}


/* MOBILE */

.mobileMenu a {
    text-decoration: none;
    color: #f2f2f2;
    margin-bottom: 1rem;
}


/* Main */

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


/* Footer */

.footer {
    width: 80%;
    background-color: #EEEEEE;
    position: absolute;
    display: flex;
    bottom: 0;
    height: 2rem;
    font-weight: 500;
    font-size: 13px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
    margin-left: 10%;
}

.links {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.links img {
    width: 25px;
    height: auto;
}

.github {
    margin-right: 0.5rem;
}

.bgFooter {
    display: none;
}


/* MEDIA QUERIES */

@media screen and (max-width: 1090px) {
    #app {
        width: 110vw;
        min-height: 103vh;
        stroke-linecap:
    }
}

@media screen and (max-width: 960px) {
    .header {
        width: 110vw;
        margin-left: 0;
        overflow: hidden;
        background-color: #EEEEEE;
    }
    .main {
        width: 110vw;
        overflow: hidden;
    }
    .footer {
        width: 110vw;
        overflow: hidden;
        background-color: #EEEEEE;
        margin-left: 0;
    }
}
</style>
