<template>
    <router-link :to="{name: 'apartments.show', params: {id:apartment.id}}" class="card-title h5 mb-4 text-decoration-none">
            
            <div class="card rounded-4" >
                <div class="row no-gutters py-3 border-top">
                    <div class="col-12 col-sm-5 position-relative">
                        <div class="img-container">
                            <img :src="'http://127.0.0.1:8000/' + 'storage/' + apartment.cover_img"
                                class="img-fluid h-100 w-100 rounded-4" alt="">
                        </div>
                        <div class="position-absolute top-0 pt-2 ps-1 translate-middle" v-if="apartment.sponsors.length > 0">
                            <i class="fa-solid fa-star p-1 star"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-block pt-2">
                            <h6 class="card-subtitle mb-2 text-muted">{{ apartment.full_address }}</h6>
                            <h5 class="card-title text-dark">{{ apartment.title }}</h5>
                            <div class="line"></div>
                            <div class="text-dark"><small>{{ apartment.num_rooms }} Stanze · {{ apartment.num_beds }} Letti · {{
                                apartment.num_bathrooms }} Bagni · {{ apartment.square_meters }} m²</small></div>
                            <div class="line"></div>
                            <div class="text-dark"><small>Servizi:</small>
                                <span v-for="(service, i) in apartment.services " :key="i" class="text-dark p-2"><i
                                        :class="'fa-solid ' + service.icon"></i></span>
                            </div>
                            <div class="text-dark text-end pt-5"><strong>€ {{ apartment.price }}</strong> /notte</div>
        
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
</template>

<script>
export default {
    props: {
        apartment: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
}
</script>

<style scoped lang="scss">

.card {
    border: none;
    text-decoration: none;


    .line {
        border: 1px solid #dee2e6;
        width: 3rem;
        margin: 1rem 0;
    }
}
.star{
    color:#ee722f;
    font-size: 25px;
    
}

.img-container{
    height: 250px;

    img {
        object-fit: cover;
    }
}

</style>