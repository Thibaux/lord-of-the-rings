<template>
    <div class="Tribes">
        <div class="TribesTable">
            <div class="title">
                <h3>Films</h3>
            </div>
            <div class="showErr" v-show="showErr">
                <p>Sorry there was a problem with the API!</p>
                <br>
                <p>Please try again later.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from './../http-common';

export default {
    name: 'Tribes',
    data() {
        return {
            showErr: false,
            tribes: {},
        }
    },
    beforeMount() {
        // this.fetchTribes()
    },
    methods: {
        fetchTribes() {
            HTTP.get(`races`)
                .then(response => {
                    this.res = response.data
                    this.setTribes()
                })
                .catch(error => {
                    console.log(error)
                    this.showErr = true
                })
        },
        setTribes() {
            this.tribes = this.res.docs;
        },
    }
};
</script>

<style scoped lang="css">
</style>
