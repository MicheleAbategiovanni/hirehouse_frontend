import { reactive } from "vue";


export const store = reactive({
    searchedApartment: [],
    city: "",
    currentPage: 1,
    totalPages: 1,
    showResearchPaginate:false,
    showIndexPaginate:false


});