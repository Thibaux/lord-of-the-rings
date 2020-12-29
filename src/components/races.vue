<template>
    <div class="Books">
        <div class="BooksTable">
            <div class="container">
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
    </div>
</template>

<script>
export default {
    name: 'Races',
    data() {
        return {
            showErr: false,
        }
    },
    beforeMount() {},
    methods: {

    }
};
</script>

<style scoped lang="css">
</style>
