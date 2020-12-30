<template>
    <div class="main">
        <div class="container">
            <div class="title">
                <h2>Books</h2>
            </div>
            <!-- Error message -->
            <div class="showErr" v-show="showErr">
                <p>Sorry there was a problem with the API!</p>
                <br>
                <p>Please try again later.</p>
            </div>
            <div class="books">
                <!-- Fellowship of the ring -->
                <div class="book b1">
                    <div class="bookCover">
                        <img src="./../assets/pictures/1.jpg" alt="pic of fellowship">
                    </div>
                    <div class="Info">
                        <h4> {{ titles[0] }} </h4>
                        <div class="info">
                            <div>
                                <p>Autor: </p>
                                <h5> J. R. R. Tolkien</h5>
                            </div>
                            <div>
                                <p>Publisher: </p>
                                <h5>George Allen & Unwin</h5>
                            </div>
                            <div>
                                <p>Publication date: </p>
                                <h5>29-July-1954</h5>
                            </div>
                            <div>
                                <p>Pages: </p>
                                <h5>423 (first edition)</h5>
                            </div>
                            <div>
                                <p>Chapters count: </p>
                                <h5>22</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- The two towers -->
                <div class="book b2">
                    <div class="Info">
                        <h4> {{ titles[1] }} </h4>
                        <div class="info">
                            <div>
                                <p>Autor: </p>
                                <h5>J. R. R. Tolkien</h5>
                            </div>
                            <div>
                                <p>Publisher: </p>
                                <h5>George Allen & Unwin</h5>
                            </div>
                            <div>
                                <p>Publication date: </p>
                                <h5>11-November-1954</h5>
                            </div>
                            <div>
                                <p>Pages: </p>
                                <h5>352 (first edition)</h5>
                            </div>
                            <div>
                                <p>Chapters count: </p>
                                <h5>21</h5>
                            </div>
                        </div>
                    </div>
                    <div class="bookCover">
                        <img src="./../assets/pictures/2.jpg" alt="pic of fellowship">
                    </div>
                </div>
                <!-- Return of the king -->
                <div class="book b3">
                    <div class="bookCover">
                        <img src="./../assets/pictures/3.jpg" alt="pic of fellowship">
                    </div>
                    <div class="Info">
                        <h4> {{ titles[2] }} </h4>
                        <div class="info">
                            <div>
                                <p>Autor: </p>
                                <h5>J. R. R. Tolkien</h5>
                            </div>
                            <div>
                                <p>Publisher: </p>
                                <h5>George Allen & Unwin</h5>
                            </div>
                            <div>
                                <p>Publication date: </p>
                                <h5>20-October-1955</h5>
                            </div>
                            <div>
                                <p>Pages: </p>
                                <h5>416 (first edition)</h5>
                            </div>
                            <div>
                                <p>Chapters count: </p>
                                <h5>19</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Books',
    data() {
        return {
            api_key: process.env.API_KEY,
            url_base: "https://the-one-api.dev/v2/",
            showErr: false,
            books: {},
            titles: [],
            executed: false
        }
    },
    beforeMount() {
        // this.reload() // this.fetchBooks()

    },
    methods: {
        reload() {
            return function() {
                if (!this.executed) {
                    this.executed = true;
                    location.reload(true);
                }
            }
        },
        fetchBooks() {
            fetch(`${this.url_base}book`)
                .then((res) => {
                    return res.json();
                })
                .then(this.setResults)
                .catch(this.showErr);
        },
        setResults(result) {
            this.books = result;
            if (this.books.docs == 'undefined') {
                this.showErr = true;
            } else {

                let objectLen = Object.keys(this.books.docs);
                for (let i = 0; i < objectLen.length; i++) {
                    this.titles.push(this.books.docs[i].name)
                }
            }
        }
    }
};
</script>

<style scoped lang="css" scoped>
.main {
    display: flex;
    flex-direction: column;
    background-color: rgba(187, 187, 187, .6);
    width: 70%;
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


/* BOOKS */

.books {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    margin-left: 5%;
}


/* BOOK */

.book {
    display: flex;
    flex-direction: row;
    height: 350px;
    width: 40vw;
    background-color: #888888;
    padding: 0rem 1rem 0rem 0rem;
    margin: 0.5rem 0rem 1em 0rem;
    border-radius: 6px;
}

.b1 {
    align-self: flex-start;
    margin-left: 2rem;
}

.b2 {
    align-self: flex-end;
    justify-content: flex-end;
    padding: 0rem 0rem 0rem 1rem;
    margin-right: 5rem;
}

.b3 {
    align-self: flex-start;
    margin-left: 2rem;
}

.book h4 {
    font-size: 20px;
    font-weight: 800;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.book .b2 h4 {
    margin-right: 0.5rem;
}

.book p {
    text-align: left;
}

.book p {
    font-size: 12px;
}


/* INFO */

.Info {
    width: 100%;
}

.info {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
}

.info div {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
}

.info div p {
    font-size: 14px;
    font-weight: 400;
}

.info div h5 {
    font-size: 16px;
    font-weight: 700;
    margin-left: 0.5rem;
}


/* BOOK COVER */

.bookCover {
    display: flex;
    flex-direction: row;
    width: 15rem;
}

.bookCover img {
    width: auto;
    height: 100%;
    justify-content: flex-start;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.b2 .bookCover {
    width: 10rem;
}

.b2 .bookCover img {
    margin-left: 1.1rem;
    margin-right: 0;
    justify-content: flex-end;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}


/* MEDIA QUERIES */

@media screen and (max-width: 1350px) {
    .book {
        width: 35rem;
    }
    .b2 {
        width: 30rem;
    }
}

@media screen and (max-width: 960px) {
    .main {
        width: 95vw;
        margin-left: 2vw;
        margin-bottom: 5rem;
    }
    .books {
        width: 95%;
        justify-content: center;
        margin-left: 0.5rem;
        margin-right: 1rem;
    }
    .book {
        width: 27rem;
        margin-left: 0;
    }
    .b2 {
        margin-right: 0;
    }
    .bookCover {
        width: 9rem;
        margin: 0;
    }
    .bookCover img {
        width: auto;
        height: 60%;
        border-bottom-left-radius: 0;
    }
    .b2 .bookCover img {
        border-bottom-right-radius: 0;
    }
    .b2 .bookCover {
        width: 9rem;
    }
    .Info {
        width: 30rem;
    }
    .info {
        margin-left: -0.1rem;
    }
    .Info h4 {
        margin-left: -0.69rem;
    }
    .info div h5 {
        margin-left: 0.1rem;
    }
}

@media screen and (max-width: 500px) {
    .main {
        width: 100vw;
        margin-left: 0;
        margin-bottom: 5rem;
    }
    .books {
        width: 100%;
        justify-content: center;
        margin-left: 0.5rem;
        margin-right: 0rem;
    }
    .book {
        width: 19rem;
        margin-left: 0;
    }
    .b2 {
        margin-right: 1rem;
    }
    .b2 .bookCover {
        width: 7rem;
    }
    .bookCover img {
        width: auto;
        height: 40%;
        margin-top: 3.5rem;
        margin-left: 1rem;
        border-radius: 6px;
    }
    .b2 .Info {
        margin-left: 0.1rem;
    }
    .b2 .Info h4 {
        margin-right: -8rem;
    }
    .Info {
        width: 15rem;
        margin-left: -1rem;
    }
    .Info h4 {
        margin-left: -8rem;
    }
    .info div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .info div h5 {
        font-size: 14px;
        font-weight: 600;
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
    .info div p {
        font-size: 14px;
        font-weight: 300;
    }
}
</style>
