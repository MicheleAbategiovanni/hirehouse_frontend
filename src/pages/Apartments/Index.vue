<template>
    <TheNavbar></TheNavbar>

    <TheSearchbar @searchApartments="saveApartments()"></TheSearchbar>

    
   

    <!-- lista appartamenti -->
    <section class="container apartments-list">
        <nav aria-label="Page navigation example" v-if="store.showIndexPaginate">
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
        <div class="row">
            <!-- v-for="(apartment, i) in apartments" :key="i" -->
            <!-- Messaggio di mancanza appartamenti  -->
            <div class="mt-3" v-if="apartments.length === 0">
                <div class="alert bg-sabbia text-center" role="alert">
                    Non ci sono risultati per questi filtri
                </div>
            </div>
            <div class="col-12 " v-for="(apartment, i) in apartments" :key="i">
                <!-- Aggiungere :apartment="apartment"-->
                <CardApartment :apartment="apartment"></CardApartment>
            </div>
            <div class="col-12 col-sm-5"></div>
        </div>
    </section>
</template>

<script>
import TheNavbar from '../../components/Apartments/TheNavbar.vue';
import TheSearchbar from "../../components/Apartments/TheSearchbar.vue";
import CardApartment from '../../components/Apartments/CardApartment.vue';
import axios from "axios";
import { store } from "../../store"

export default {
    name: 'ApartmentIndex',
    components: { TheNavbar, TheSearchbar, CardApartment },
    data() {
        return {
            store,
            apartments: []
        }
    },
    methods: {
        fetchIndexApartments() {
            
            store.showIndexPaginate=true;
            store.showResearchPaginate=false;
            axios.get("http://127.0.0.1:8000/api/apartments/index", {  params:{ page: store.currentPage}})
                .then((resp) => {
                    this.apartments = resp.data.data;
                    store.currentPage = resp.data.current_page;
                    store.totalPages = resp.data.last_page;
                })

        },
        saveApartments() {
            
            this.apartments = this.store.searchedApartment;

        },
        prevPage() {
      // Aspetto x tempo per far si che il router aggiorni l'url nel browser
      setTimeout(() => {
        store.currentPage-=1
        // dopo che l'url è stato aggiornato, faccio il fetch
        this.fetchIndexApartments();
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
        this.fetchIndexApartments();
      }, 500);
      
    },
    
    },
    beforeMount() {
        this.fetchIndexApartments();
    }
}
</script>

<style scoped lang="scss"></style>