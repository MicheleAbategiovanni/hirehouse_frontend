<template>
    <div class="container py-4">
        <div class="row align-items-center gy-3">
            <div class="col-6 col-md-3">
                <div
                    class="input-group searchbar py-2 px-3 rounded-5 align-items-center shadow d-flex justify-content-between">
                    <div class="px-2">
                        <input type="text" class="form-control input-text" placeholder="Cittá"
                            aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="this.store.city">
                    </div>
                    <!-- <button class="btn my-btn-orange rounded-circle" type="button"><i class="fa fa-search"></i></button> -->
                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex align-items-center">
                    <label for=""><small>Prezzo</small></label>
                    <select class="form-select form-select-sm my-select-control" aria-label=".form-select-sm example"
                        v-model="form.price">
                        <option disabled selected>-</option>
                        <option value="50"> &lt 50€</option>
                        <option value="100"> &lt 100€</option>
                        <option value="150"> 150€ </option>
                    </select>
                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex align-items-center">
                    <label for="roomInput"><small>Stanze: </small></label>
                    <input type="number" class="form-control form-control-sm my-select-control ps-1" id="roomInput"
                        placeholder=""
                        v-model="form.num_rooms">
                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex align-items-center">
                    <label for="bathInput"><small>Bagni: </small></label>
                    <input type="number" class="form-control form-control-sm my-select-control ps-1" id="bathInput"
                        placeholder=""
                        v-model="form.num_bathrooms">

                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex align-items-center">
                    <label for="bedInput"><small>Letti: </small></label>
                    <input type="number" class="form-control form-control-sm my-select-control ps-1" id="bedInput"
                        placeholder=""
                        v-model="form.num_beds">

                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex align-items-center">
                    <label for="meterInput"><small>m²: </small></label>
                    <input type="number" class="form-control form-control-sm my-select-control ps-1" id="meterhInput"
                        placeholder=""
                        v-model="form.square_meters">
                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="input-group searchbar py-2 px-3 rounded-5 shadow d-flex flex-column justify-content-center">
                    <label for="distanceInput" class="flex-fill"><small>Distanza: <output id="value">{{ form.dist }}
                                km</output></small></label>
                    <input id="distanceInput" type="range" min="0" max="30" step="5" class="form-range w-100"
                        v-model="form.dist" />
                </div>
            </div>

            <div class="col-6 col-md-3">
                <div class="accordion searchbar py-3 px-3 rounded-5 shadow d-flex align-items-center">
                    <div class="accordion-item w-100">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <span id="textServices"><small>Servizi</small></span>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body p-0">
                                <div class="form-check form-check " v-for="(service, i) in services">
                                    <input class="form-check-input servicesCheck "
                                        type="checkbox" :id="'servicesCheckbox_' + i" v-model="form.services"
                                        :value="service.id">

                                    <i :class='"fa-solid" + " " + service.icon'></i>
                                    <label class="form-check-label" :for="'servicesCheckbox_' + i">
                                        {{ service.name }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-center mt-4">
                <button class="btn my-btn-orange rounded-pill w-25 shadow" @click="fetchApartments();resetPage()" >Cerca</button>
            </div>
        </div>
        <nav aria-label="Page navigation example" v-if="store.showResearchPaginate">
      <ul class="pagination">
        <li class="page-item">
          <div
            
            class="page-link"
            @click="prevPage"
            >Previous</div
          >
        </li>
        <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        <li class="page-item">
          <div       
            class="page-link"
            @click="nextPage"
            >Next</div>          
        </li>
      </ul>
    </nav>
    </div>
    
</template>

<script>
import axios from "axios";
import { store } from "../../store"
export default {
    data() {
        return {
            
            store,
            services: [],
            
            form: {
                price: "",
                num_rooms: "",
                num_bathrooms: "",
                num_beds: "",
                square_meters: "",
                services: [],
                lat: "",
                lng: "",
                dist: 20,
            },
            

        }
    },
    mounted() {
        if (store.city != "") {
            this.fetchApartments();
            
        }
    },
    beforeMount() {
        this.fetchServices();


    },
    methods: {
        resetPage(){
            store.currentPage=1;
        },
        fetchApartments() {

            store.showIndexPaginate=false;
            store.showResearchPaginate=true;
            //entriamo qui quando abbiamo un luogo per recuperare lat e long
            if (store.city !== "") {

                axios.get("https://api.tomtom.com/search/2/geocode/" + store.city+ ".json?key=6hakT8QU7IRSx9PCHGi5JyHTV2S7xWlD")
                    .then((resp) => {
                        this.form.lat = resp.data.results[0].position.lat
                        this.form.lng = resp.data.results[0].position.lon


                        //chiamata axios per recuperare gli appartmaenti con i fltri
                        axios.get("http://127.0.0.1:8000/api/apartments/research", {  params:{ ...this.form , page: store.currentPage}})
                            .then((resp) => {

                                store.searchedApartment = resp.data.data;
                                store.currentPage = resp.data.current_page;
                                store.totalPages = resp.data.last_page;
                                this.$emit("searchApartments");

                            }
                            )

                    }

                    )
            } 
            //entriamo qui quando non abbiamo un luogo per recuperare lat e long
            
            else {
                this.form.lat="";
                this.form.lng="";
                
                axios.get("http://127.0.0.1:8000/api/apartments/research", { params:{...this.form , page: store.currentPage} })
                    .then((resp) => {

                        
                                store.currentPage = resp.data.current_page;
                                store.totalPages = resp.data.last_page;
                        store.searchedApartment = resp.data.data
                        this.$emit("searchApartments");

                    }
                    )

            }
        },
        fetchServices() {
            axios.get("http://127.0.0.1:8000/api/services/index")
                .then((resp) => {
                    this.services = resp.data;
                }

                )

        }, 
         prevPage() {
      // Aspetto x tempo per far si che il router aggiorni l'url nel browser
      setTimeout(() => {
        store.currentPage-=1
        // dopo che l'url è stato aggiornato, faccio il fetch
        this.fetchApartments();
      }, 500);
      // Next tick aspetta che vue finisca l'aggiornamento attuale dell'html
      /* this.$nextTick(() => {
        this.fetchPosts();
      }) */
    },
    nextPage() {
        store.currentPage+=1
      // Aspetto x tempo per far si che il router aggiorni l'url nel browser
      setTimeout(() => {
        // dopo che l'url è stato aggiornato, faccio il fetch
        this.fetchApartments();
      }, 500);
      
    },
    }

}


</script>

<style scoped lang="scss">
@use '../../styles/partials/variables';

.searchbar {
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

.my-select-control {
    border: none;

    &:focus {
        border-color: transparent;
        outline: 0;
        box-shadow: 0 0 0 0 white !important;
    }
}

input[type="range"]::-webkit-slider-thumb {
    background-color: #F7A072;
}

.accordion {
    --bs-accordion-color: #212529;
    --bs-accordion-bg: #fff;
    --bs-accordion-border-color: none;
    --bs-accordion-border-width: none;
    --bs-accordion-btn-padding-x: 0;
    --bs-accordion-btn-padding-y: 0;
    --bs-accordion-btn-focus-border-color: none;
    --bs-accordion-btn-focus-box-shadow: 0 0 0 0;
    --bs-accordion-active-color: none;
    --bs-accordion-active-bg: none;
}</style>