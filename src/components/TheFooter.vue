<template>
    <footer class="">
        <div class="container pt-5 pb-3">

            <!-- <div class="row justify-content-center">
                <div class="col col-lg-4">
                    <h6>Support</h6>
                    <ul class="list-unstyled mb-0 destinazione">
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lazio</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lombardia</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Toscana</a>
                        </li>
                        <li>
                            <a href="#!" style="color: #4f4f4f;">Veneto</a>
                        </li>
                    </ul>
                </div>
                <div class="col col-lg-4 mb-4">
                    <h6>Host</h6>
                    <ul class="list-unstyled mb-0 destinazione">
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lazio</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lombardia</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Toscana</a>
                        </li>
                        <li>
                            <a href="#!" style="color: #4f4f4f;">Veneto</a>
                        </li>
                    </ul>
                </div>
                <div class="col col-lg-4 mb-4">
                    <h6>About</h6>
                    <ul class="list-unstyled mb-0 destinazione">
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lazio</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Lombardia</a>
                        </li>
                        <li class="mb-2">
                            <a href="#!" style="color: #4f4f4f;">Toscana</a>
                        </li>
                        <li>
                            <a href="#!" style="color: #4f4f4f;">Veneto</a>
                        </li>
                    </ul>
                </div>
            </div> -->

            <hr class="my-3">

            <!-- Section: Copyright -->
            <section class="p-3 pt-0">
                <div class="row d-flex align-items-center">
                    <div class="col-md-7 col-lg-8 text-center text-md-start">
                        <!-- Copyright -->
                        <div class="p-3">
                            © 2023 Copyright:
                            <router-link :to="{name:'home'}" class="text-dark">HireHouse</router-link>
                        </div>
                    </div>

                    <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <!-- Facebook -->
                        <a class="btn btn-outline-dark btn-floating m-1" role="button"><i class="fab fa-facebook-f"></i></a>

                        <!-- Twitter -->
                        <a class="btn btn-outline-dark btn-floating m-1" role="button"><i class="fab fa-twitter"></i></a>

                        <!-- Google -->
                        <a class="btn btn-outline-dark btn-floating m-1" role="button"><i class="fab fa-google"></i></a>

                        <!-- Instagram -->
                        <a class="btn btn-outline-dark btn-floating m-1" role="button"><i class="fab fa-instagram"></i></a>
                    </div>

                </div>
            </section>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped lang="scss">
@use "../styles/partials/variables";

footer {
    background-color: #F9F7F3;
}

.destinazione {
    li a {
        text-decoration: none;
        padding-bottom: .5rem;
    }

}
</style>