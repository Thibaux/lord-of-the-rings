<template>
    <div class="Books">
        <div class="BooksTable">
            <div class="container">
                   <div class="title">
                    <h3>Films</h3>
                </div>
                <div class="showErr" v-show="showErr">
                    <p>Sorry there was a problem with the API!</p><br>
                    <p>Please try again later.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Characters',
    data() {
        return {
            api_key: process.env.API_KEY,
            url_base: "https://the-one-api.dev/v2/",
            showErr: false,
        }
    },
    beforeMount() {
    },
    methods: {
      
    }
}
</script>
<style lang="css" scoped>
.BooksTable {
    display: flex;
    flex-direction: column;
    background-color: #BBBBBB;
    height: auto;
    width: 90%;
    border: 1px solid black;
    margin-top: 2.5rem;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 2rem;
}

.container {
    width: 100%;
    margin: 2rem;
}

.books {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1rem;
}

.title h3 {
    font-weight: 900;
    margin-top: -0.5rem;

}

.book {
    background-color: #888888;
    padding: 0rem 2rem;
    border-radius: 4px;
}

.book h4 {
    font-size: 18px;
    font-weight: 800;
}

.book p {
    text-align: left;
}

.book p {
    font-size: 12px;

}
</style>