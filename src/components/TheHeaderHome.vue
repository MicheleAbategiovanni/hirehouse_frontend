<template>
    <section class="bg-black py-3">
        <div class="container">
            <!-- searchbar -->
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="input-group mb-3 searchbar px-3 py-2 rounded-5 align-items-center ">
                        <div class="d-flex flex-column flex-fill px-2">
                            <h6 class="mb-0"><small>Localitá</small></h6>
                            <input type="text" class="form-control input-text" placeholder="Inserisci la tua prossima meta"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="city">
                        </div>

                        <div class="input-group-append ps-2">
                            <router-link :to="{ name: 'apartments.index' }">
                                <button class="btn my-btn-orange rounded-circle" type="button" @click="saveCity()"><i
                                        class="fa fa-search"></i></button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- jumbotron -->
            <div class="row py-3 mb-4">
                <div class="col-12">
                    <div class="carousel-container rounded-3">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner position-relative">
                                <div class="carousel-item active">
                                    <img src="/Firenze.jpg" class="d-block w-100 h-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="/Roma.jpg" class="d-block w-100 h-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="/Milano.jpg" class="d-block w-100 h-100" alt="...">
                                </div>

                                <div class="position-absolute text-jumbo text-center">
                                    <h1 class="mb-2">Non sai dove andare?</h1>
                                    <router-link :to="{ name: 'apartments.index' }"
                                        class="btn my-btn-orange rounded-5 px-3 py-2">Scroprilo ora</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


import {store} from "../store"
export default {
    data() {
        return {
            store,
            city:""
            
    
    }},
   
    methods: {
        saveCity(){
           store.city=this.city;
        }
       
    }

}




</script>

<style scoped lang="scss">
@use '../styles/partials/variables';



.searchbar {
    width: 70%;
    @media screen and (max-width:767px) {
        width:100%;
        
    }
    background-color: white;

    .form-control {
        border: 0;
        padding: 0;

        &:focus {
            border-color: transparent;
            outline: 0;
            box-shadow: 0 0 0 0 white !important;
        }
    }
}

.carousel-container {
    overflow: hidden;
}

.text-jumbo {
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    color: white;
    font-weight: 800;
    @media screen and (max-width:767px) {
        top: 50%;
    }
    

    h1 {
        font-size: 50px;
        @media screen and (max-width:767px) {
            font-size: 3vh;
        
    }
    }
}</style>