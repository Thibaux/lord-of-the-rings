<template>
    <div class="main">
        <div class="title">
            <h2>Films</h2>
        </div>
        <!-- Error message -->
        <div class="showErr" v-show="showErr">
            <p>Sorry there was a problem with the API!</p>
            <br>
            <p>Please try again later.</p>
        </div>
        <!-- Films -->
        <div class="films">
            <div class="firstTwo">
                <!-- Fellowship -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/fellowship.jpg" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[4].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster">
                            <img src="./../assets/pictures/filmPosters/fellowship.jpg" alt="">
                        </div>
                        <div class="summary">
                            <h5>
                                ONE RING TO RULE THEM ALL
                            </h5>
                            <p>
                                Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[4].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2003
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[4].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[4].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[4].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[4].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[4].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                4.3
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-lord-of-the-rings-the-fellowship-of-the-ring/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt0120737/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Two Towers -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/towers.jpg" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[3].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster"><img src="./../assets/pictures/filmPosters/towers.jpg" alt=""></div>
                        <div class="summary">
                            <h5>
                                A NEW POWER IS RISING
                            </h5>
                            <p>
                                Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[3].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2002
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[3].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[3].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[3].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[3].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[3].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                4.3
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-lord-of-the-rings-the-two-towers/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt0167261/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondTwo">
                <!-- The Return of the king -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/returns.jpg" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[5].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster"><img src="./../assets/pictures/filmPosters/return.jpg" alt=""></div>
                        <div class="summary">
                            <h5>
                                THE EYE OF THE ENEMY IS MOVING
                            </h5>
                            <p>
                                Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron’s forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord’s realm.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[5].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2001
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[5].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[5].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[5].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[5].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[5].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                4.4
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-lord-of-the-rings-the-return-of-the-king/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt0167260/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- The Unexpected Journey -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/journey.jpg" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[0].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster"><img src="./../assets/pictures/filmPosters/journey.jpg" alt=""></div>
                        <div class="summary">
                            <h5>
                                FROM THE SMALLEST BEGINNINGS COME THE GREATEST LEGENDS
                            </h5>
                            <p>
                                Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[0].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2012
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[0].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[0].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[0].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[0].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[0].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                3.3
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-hobbit-an-unexpected-journey/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt0903624/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thirdTwo">
                <!-- The Desolation of Smaug -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/smaug.png" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[1].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster"><img src="./../assets/pictures/filmPosters/smaug.jpg" alt=""></div>
                        <div class="summary">
                            <h5>
                                BEYOND DARKNESS… BEYOND DESOLATION… LIES THE GREATEST DANGER OF ALL
                            </h5>
                            <p>
                                The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[1].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2013
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[1].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[1].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[1].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[1].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[1].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                3.3
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-hobbit-the-desolation-of-smaug/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt1170358/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- The Battle of the Five Armies -->
                <div class="film">
                    <div class="screenCap">
                        <img src="./../assets/pictures/armies.png" alt="screenCap">
                    </div>
                    <div class="title">
                        <h4>{{ films[2].name }}</h4>
                    </div>
                    <div class="filmInfo">
                        <div class="poster"><img src="./../assets/pictures/filmPosters/armies.jpg" alt=""></div>
                        <div class="summary">
                            <h5>
                                WITNESS THE DEFINING CHAPTER OF THE MIDDLE-EARTH SAGA
                            </h5>
                            <p>
                                Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor’s mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo’s hands.
                            </p>
                        </div>
                        <div class="info">
                            <div class="runTime2">
                                {{ runTimeH }} h {{ runTimeM }} m
                            </div>
                            <div class="runTime1">
                                {{ films[2].runtimeInMinutes }} min
                            </div>
                            <div class="jaar">
                                <p>Jaar</p>
                                2014
                            </div>
                            <div class="budget">
                                <p>Budget in m.</p>
                                {{ films[2].budgetInMillions }}
                            </div>
                            <div class="renevue">
                                <p>Renevue in m.</p>
                                {{ films[2].boxOfficeRevenueInMillions }}
                            </div>
                            <div class="noms">
                                <p>Academy award nominations</p>
                                {{ films[2].academyAwardNominations }}
                            </div>
                            <div class="wins">
                                <p>Academy award wins</p>
                                {{ films[2].academyAwardWins }}
                            </div>
                            <div class="rScore">
                                <p>Rotten tomates score</p>
                                {{ films[2].rottenTomatesScore }}
                            </div>
                            <div class="lScore">
                                <p>Letterboxd rating</p>
                                3.1
                            </div>
                            <div class="links">
                                <a href="https://letterboxd.com/film/the-hobbit-the-battle-of-the-five-armies/">
                                    <img src="./../assets/lb.png" alt="lb">
                                </a>
                                <a href="https://www.imdb.com/title/tt2310332/">
                                    <img src="./../assets/imdb.png" alt="imdb">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from './../http-common';

export default {
    name: 'Films',
    data() {
        return {
            showErr: false,
            res: {},
            films: {},
            film: {},
            runTimeH: 0,
            runTimeM: 0,
        }
    },
    beforeMount() {
        this.fetchFilms()
    },
    methods: {
        fetchFilms() {
            HTTP.get(`movie?offset=2`)
                .then(response => {
                    this.res = response.data
                    this.setFilms()
                })
                .catch(error => {
                    console.log(error)
                    this.showErr = true
                })
        },
        setFilms() {
            this.films = this.res.docs;
            this.convertRuntime()
        },
        convertRuntime() {
            for (let i = 0; i < 6; i++) {
                let minutes = this.films[i].runtimeInMinutes;
                let hours = (minutes / 60);
                let rhours = Math.floor(hours);
                let min = (hours - rhours) * 60;
                let rminutes = Math.round(min);
                this.runTimeH = rhours;
                this.runTimeM = rminutes;
            }
        },
    }
};
</script>

<style lang="css" scoped>
.main {
    display: flex;
    flex-direction: column;
    background-color: rgba(187, 187, 187, .6);
    width: 90%;
    margin-top: 2.5rem;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 2rem;
    position: relative;
}

.title {
    width: 5rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    margin-right: 5rem;
}

.title h2 {
    font-weight: 1000;
    margin-top: -0.5rem;
}


/* FILMS */

.films {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
}

.firstTwo {
    display: flex;
    flex-direction: row;
    margin-left: -2rem;
}

.secondTwo {
    display: flex;
    flex-direction: row;
    margin-left: -2rem;
}

.thirdTwo {
    display: flex;
    flex-direction: row;
    margin-left: -2rem;
    margin-bottom: -1rem;
}


/* FILM */

.film {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 40vw;
    background-color: #888888;
    padding: 0rem 0rem 2rem 0rem;
    margin: 0.5rem 2rem 2em 0rem;
    border-radius: 6px;
}

.screenCap {}

.screenCap img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.film .title {
    width: 30rem;
    justify-content: center;
    margin-top: -2rem;
}

.film .title h4 {
    font-size: 26px;
    font-weight: 9500;
}


/* FILM INFO */

.filmInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info {
    width: 15vw;
}

.info > div {
    display: flex;
    flex-direction: row;
    width: 95%;
    font-size: 20px;
    font-width: 950;
    margin-bottom: 0.5rem;
}

.info > div > p {
    margin-right: 3%;
    font-size: 16px;
    font-width: 500;
}

.poster {
    margin-left: 2%;
}

.poster img {
    height: 250px;
    width: auto;
    border-radius: 3px;
}

.summary {
    width: 17rem;
}

.summary h5 {
    margin-bottom: 1rem;
    font-size: 16px;
}

.links a {
    width: 50px;
    height: 30px;
    margin: 0.5rem;
}

.links img {
    width: auto;
    height: 30px;
}


/* MEDIA QUERIES */

@media screen and (max-width: 1904px) {
    .info {
        width: 10vw;
    }
    .info > div {
        flex-direction: column;
    }
}

@media screen and (max-width: 1264px) {
    .poster {
        margin-left: -20vw;
    }
    .summary {
        width: 95%;
        margin-left: 4%;
        margin-bottom: 2rem;
    }
    .summary h5 {
        margin-top: -10rem;
        margin-left: 10rem;
        margin-bottom: 10rem;
    }
    .poster img {
        height: 200px;
        width: auto;
    }
    .filmInfo {
        flex-direction: column;
        justify-content: space-between;
    }
    .info {
        width: 95%;
        margin-left: 4%;
    }
    .info > div {
        flex-direction: row;
    }
    .film .title {
        width: 20rem;
        justify-content: flex-start;
        margin-top: -2rem;
        margin-left: 1rem;
    }
    .film .title h4 {
        font-size: 22px;
    }
}

@media screen and (max-width: 960px) {
    .main {
        width: 90vw;
        margin-left: -10vw;
        margin-bottom: 5rem;
    }
    .films {
        width: 95%;
        justify-content: center;
        margin-left: 0.5rem;
        margin-right: 1rem;
    }
}

@media screen and (max-width: 500px) {
    .main {
        width: 100vw;
        margin-left: 0;
        margin-bottom: 5rem;
    }
    .films {
        width: 100%;
        justify-content: center;
        margin-left: 0.5rem;
        margin-right: 0rem;
    }
}
</style>
