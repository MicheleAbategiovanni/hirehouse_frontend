<template>
    <section class="bg-white py-5 mt-2">
        <div class="container">

            <!-- consigliati -->
            <h2 class="pb-3">I nostri consigliati</h2>
            <div class="row row-cols-1 row-cols-md-4 gy-3  flex-nowrap overflow-auto slider pb-1"
                @mouseover="scrollSidebar()">
                <div class="col" v-for="apartment in this.apartmentsSponsorized">
                    <router-link :to="{ name: 'apartments.show', params: { id: apartment.id } }"
                        class="text-decoration-none text-dark">
                        <div class="card p-0 positision-relative h-100" style="">

                            <!-- Inserire come primo parametro il proprio URL del BackEnd ! -->
                            <img :src="'http://127.0.0.1:8000/' + 'storage/' + apartment.cover_img"
                                class="card-img-top h-50" alt="...">
                            <div class="position-absolute top-0 pt-2 ps-1 translate-middle"
                                v-if="apartment.sponsors.length > 0">
                                <i class="fa-solid fa-star p-1 star"></i>
                            </div>

                            <div class="card-body" :style="{ 'background-color': randomColor() }">
                                <h5 class="card-title">{{ apartment.title }}</h5>
                                <div class="card-subtitle">{{ apartment.full_address }}</div>
                                <p class="card-text text-end pt-5">€{{ apartment.price }} /notte</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- host -->
            <div class="py-5 host-image position-relative">
                <img src="/pet_casa.jpeg" class="img-fluid w-100 h-100" alt="">

                <div class="position-absolute host-text">
                    <h2>Diventa <br> anche tu <br> un host</h2>
                    <a href="http://127.0.0.1:8000/" class="btn my-btn-turchese mt-4">Registrati</a>
                </div>
            </div>

            <!-- principali destinazioni -->
            <div class="container">

                <h3 class="pb-4">Principali destinazioni</h3>

                
                <div class="row">
                    <div class="col-6 col-lg-3">
                        <ul class="list-unstyled  mb-0 destinazione">
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Roma")'>
                                    <h6>Roma</h6>
                                    <div>Lazio</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Milano")'>
                                    <h6>Milano</h6>
                                    <div>Lombardia</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Firenze")'>
                                    <h6>Firenze</h6>
                                    <div>Toscana</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Venezia")'>
                                    <h6>Venezia</h6>
                                    <div>Veneto</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-3 mb-4">
                        <ul class="list-unstyled mb-0 destinazione">
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Napoli")'>
                                    <h6>Napoli</h6>
                                    <div>Campania</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Bari")'>
                                    <h6>Bari</h6>
                                    <div>Puglia</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Aquila")'>
                                    <h6>L'Aquila</h6>
                                    <div>Abruzzo</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Torino")'>
                                    <h6>Torino</h6>
                                    <div>Piemonte</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-3 mb-4">
                        <ul class="list-unstyled mb-0 destinazione">
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Siena")'>
                                    <h6>Siena</h6>
                                    <div>Toscana</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Verona")'>
                                    <h6>Verona</h6>
                                    <div>Veneto</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Cagliari")'>
                                    <h6>Cagliari</h6>
                                    <div>Sardegna</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Ancona")'>
                                    <h6>Ancona</h6>
                                    <div>Marche</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-3">
                        <ul class="list-unstyled mb-0 destinazione">
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Trento")'>
                                    <h6>Trento</h6>
                                    <div>Trentino Alto Adige</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Potenza")'>
                                    <h6>Potenza</h6>
                                    <div>Basilicata</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Trieste")'>
                                    <h6>Trieste</h6>
                                    <div>Friuli Venezia Giulia</div>
                                </router-link>
                            </li>
                            <li class="mb-3">
                                <router-link class="text-black" :to="{name: 'apartments.index' }" @click='saveCity("Siracusa")'>
                                    <h6>Siracusa</h6>
                                    <div>Sicilia</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import {store} from "../store"

export default {
    data() {
        return {
            store,
            paletteColor: [
                "#0FA3B1",
                "#B5E2FA",
                "#EDDEA4",
                "#F7A072"
            ],
            apartmentsSponsorized: []
        }
    },
    beforeMount() {
        this.fetchSponsorized()
    },
    methods: {
        saveCity(city){
            this.store.city=city;


        },
        scrollSidebar() {
            const sliderHTML = document.querySelector(".slider");

            sliderHTML.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                sliderHTML.scrollLeft += evt.deltaY;
            });

        },
        getRandomItem(arr) {
            // get random index value
            const randomIndex = Math.floor(Math.random() * arr.length);

            // get random item
            const item = arr[randomIndex];

            return item;
        },

        randomColor() {
            return this.getRandomItem(this.paletteColor);
        },

        // Funzione che recupera la lista di appartamenti sponsorizzati
        fetchSponsorized() {
            axios.get("http://127.0.0.1:8000/api/apartments/sponsorized")
                .then((respone) => {
                    this.apartmentsSponsorized = respone.data;
                })
        }
    },
}
</script>

<style scoped lang="scss">
/* width */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;


}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;


}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #F7A072;
    border-radius: 5px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ca6b37 !important;
}

.host-image {
    height: 700px;

    img {
        object-fit: cover;
        object-position: center;
    }

    .host-text {
        top: 10%;
        right: 10%;

        h2 {
            font-size: 60px;
        }
    }
}

.destinazione {
    li a {
        text-decoration: none;
        padding-bottom: 1rem;
    }

    li h6 {
        padding: 0;
        margin: 0;
    }

}

.star {
    color: #ee722f;
    font-size: 25px;

}</style>