<template>
    <div class="Characters">
        <div class="title">
            <h3>Characters</h3>
        </div>
        <div v-show="showErr">
            <p>Sorry there was a problem with the API!</p>
            <br>
            <p>Please try again later.</p>
        </div>
        <div class="CharactersTable">
            <div class="table">
                <v-card>
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-data-table :headers="headers" :items="characters" :items-per-page="20" class="elevation-1" :search="search"></v-data-table>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from './../http-common';

export default {
    name: 'Characters',
    data() {
        return {
            showErr: false,
            characters: [],
            search: '',
            headers: [{
                    text: 'Character',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Height', value: 'height' },
                { text: 'Race', value: 'race' },
                { text: 'Gender', value: 'gender' },
                { text: 'Birth', value: 'birth' },
                { text: 'Spouse', value: 'spouse' },
                { text: 'Death', value: 'death' },
                { text: 'Realm', value: 'realm' },
                { text: 'Hair', value: 'hair' },
            ],
        }
    },
    beforeMount() {
        this.fetchCharacters()
    },
    methods: {
        fetchCharacters() {
            HTTP.get(`character`)
                .then(response => {
                    this.res = response.data
                    this.setChars()
                })
                .catch(error => {
                    console.log(error)
                    this.showErr = true
                })
        },
        setChars() {
            this.characters = this.res.docs;
        },
    }
};
</script>

<style lang="css" scoped>
.Characters {
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
    margin-right: 5rem;
}

.title h2 {
    font-weight: 1000;
    margin-top: -0.5rem;
}

.CharactersTable {
    margin: 1rem;
}
</style>
