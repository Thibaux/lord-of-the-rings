<template>
    <main>
        <div class="bgPic">
        </div>
        <div class="Main">
            <div class="container">
                <div class="title">
                    <h2>Random quote</h2>
                </div>
                <div v-show="showErr">
                    <h3>Sorry there was a problem with the API!</h3>
                    <br>
                    <h3>Please try again later.</h3>
                </div>
                <div class="quote">
                    <div class="info">
                        <div>
                            <h3>{{ quoteChar.docs[0].name }}</h3>
                            <h4>Character</h4>
                        </div>
                        <div>
                            <h3>{{ quoteMovie.docs[0].name }}</h3>
                            <h4>Film</h4>
                        </div>
                        <div>
                            <a href="location.reload();">
                                <img class="animate__animated animate__rotateOut" src="./../assets/reload.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="actQuote">
                        <p>{{ quote.dialog }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { HTTP } from './../http-common';

export default {
    name: 'RanQuote',
    data() {
        return {
            showErr: false,
            quotes: {},
            quote: {},
            randNum: 0,
            min: 1,
            max: 2390,
            quoteMovie: '',
            quoteChar: '',
        }
    },
    beforeMount() {
        this.fetchQuotes()
        this.randQuote()
    },
    methods: {
        fetchQuotes() {
            HTTP.get(`quote?limit=2390`)
                .then(response => {
                    this.quotes = response.data

                    this.setQuote()
                })
                .catch(error => {
                    console.log(error)
                    this.showErr = true
                })
        },
        randQuote() {
            this.randNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        },
        setQuote() {
            this.quote = this.quotes.docs[this.randNum]
            this.fetchQuoteMovie()
            this.fetchQuoteChar()
        },
        fetchQuoteMovie() {
            HTTP.get(`/movie/${this.quote.movie}`)
                .then(response => {
                    this.quoteMovie = response.data
                })
                // .catch(this.showErr = true);
        },
        fetchQuoteChar() {
            HTTP.get(`/character/${this.quote.character}`)
                .then(response => {
                    this.quoteChar = response.data
                })
                // .catch(this.showErr = true);
        }
    }
};
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Spirax&display=swap');
.Main {
    display: flex;
    flex-direction: column;
    background-color: rgba(187, 187, 187);
    width: 70vw;
    margin-left: 15vw;
    margin-top: -8rem;
    margin-bottom: 2rem;
    align-items: center;
    border-radius: 4px;
    position: relative;
}

.bgPic {
    width: 100vw;
    margin-left: -1rem;
    overflow-y: hidden;
    height: 400px;
    margin-top: 0.4rem;
    background-image: url(./../assets/bgPic.jpg);
    background-size: cover;
    background-position: 80% 40%;
}

.container {
    width: 100%;
    margin: 2rem;
}

.title {
    width: 35rem;
    margin-bottom: 2.5%;
}

.title h2 {
    font-weight: 1000;
    margin-top: -0.5rem;
}

.quote {
    width: 80%;
    margin-left: 10%;
}

.info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin-left: 10%;
}

.info div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.info h3 {
    margin-bottom: -0.1rem;
    font-weight: 800;
    font-size: 16px;
}

.info h4 {
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 0.2rem;
}

.info img {
    width: auto;
    height: 50px;
}

.actQuote {
    width: 70%;
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
    margin-left: 15%;
    background: #EEEEEE;
    border-left: 10px solid #888888;
    quotes: "\201C""\201D""\2018""\2019";
    overflow-wrap: break-word;
}

.actQuote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.15em;
    vertical-align: -0.4em;
}

.actQuote p {
    display: inline;
    font-family: 'Spirax', cursive;
    font-size: 35px;
    font-weight: 1000;
}


/* MEDIA QUERIES */

@media screen and (max-width: 1090px) {
    .bgPic {
        width: 110vw;
        height: 290px;
    }
}

@media screen and (max-width: 960px) {
    .Main {
        width: 90vw;
        margin-left: 10vw;
        margin-bottom: 5rem;
    }
    .quote {
        width: 100%;
        margin-left: 0;
    }
    .info {
        width: 100%;
        margin-left: 0;
    }
    .actQuote {
        width: 80vw;
        margin-left: 2%;
    }
}

@media screen and (max-width: 500px) {
    .bgPic {
        width: 150%;
        margin-left: -20%;
        background-size: cover;
    }
    .info {
        flex-direction: column;
        width: 70%;
        margin-left: 15%;
        justify-content: space-between;
    }
    .Main {
        width: 90vw;
        margin-left: -10vw;
        margin-top: -10rem;
        margin-bottom: 5rem;
    }
    .actQuote {
        width: 80vw;
    }
    .actQuote p {
        display: inline;
        font-size: 20px;
        font-weight: 800;
    }
    .title {
        width: 15rem;
        margin-bottom: 2.5%;
        margin-left: -0.1rem;
    }
    .title h2 {
        font-weight: 800;
    }
    .character {
        margin-bottom: 0.5rem;
    }
}
</style>
