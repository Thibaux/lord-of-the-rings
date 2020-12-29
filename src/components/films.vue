<template>
    <div class="Main">
        <div class="container">
            <div class="title">
                <h2>Films</h2>
            </div>
            <!-- Error message -->
            <div class="showErr" v-show="showErr">
                <p>Sorry there was a problem with the API!</p>
                <br>
                <p>Please try again later.</p>
            </div>
            <div class="films" v-for="film in films" :key="film.id">
                <div class="film">
                    <div class="header">
                        <img src="" alt="screenFilm">
                    </div>
                    <div class="title">
                        <h4>{{ film.name }} </h4>
                    </div>
                    <div class="info">
                        <div class="runTime">
                            {{ runTimeH }} h {{ runTimeM }} m
                        </div>
                        <div class="budget">
                            <p>Budget</p>
                            {{ film.budgetInMillions }} million
                        </div>
                        <div class="renevue">
                            <p>Renevue</p>
                            {{ film.boxOfficeRevenueInMillions }} million
                        </div>
                        <div class="noms">
                            <p>Academy award Nominations</p>
                            {{ film.academyAwardNominations }}
                        </div>
                        <div class="wins">
                            <p>Academy award wins</p>
                            {{ film.academyAwardWins }}
                        </div>
                        <div class="rScore">
                            <p>Rotten Tomates Score</p>
                            {{ film.rottenTomatesScore }}
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
    name: 'Books',
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
        this.convertRuntime()
    },
    methods: {
        fetchFilms() {
            HTTP.get(`movie?offset=2`)
                .then(response => {
                    this.res = response.data
                    this.setFilms()
                })
                .catch(this.showErr);
        },
        setFilms() {
            this.films = this.res.docs;
            this.convertRuntime()
        },
        convertRuntime() {
            for (let i = 0; i < 6; i++) {
                let minutes = this.films[i].runtimeInMinutes;
                // let minutes = 50;
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

<style lang="css">
.Main {
    display: flex;
    flex-direction: column;
    background-color: rgba(187, 187, 187, .6);
    width: 90%;
    border: 1px solid black;
    margin-top: 2.5rem;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 2rem;
    position: relative;
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


/* FILMS */

.films {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    margin-left: 5%;
}


/* FILM */

.film {
    display: flex;
    flex-direction: row;
    height: 350px;
    width: 40vw;
    background-color: #888888;
    padding: 0rem 1rem 0rem 0rem;
    margin: 0.5rem 0rem 1em 0rem;
    border-radius: 6px;
}


/* FILM POSTER */
</style>
