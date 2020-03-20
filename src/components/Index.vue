<template>
    <div>
        <header>
            <nav>
                <b-navbar toggleable="lg" variant="info" class="header-nav">
                    <b-container>
                        <b-navbar-brand href="#">
                            2019-nCoV TRACKER
                        </b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item href="#">Preventions</b-nav-item>
                                <b-nav-item href="#">Symptoms</b-nav-item>
                                <b-nav-item href="#">FAQs</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-container>
                </b-navbar>
            </nav>
            <div class="hero-text-box">
                <b-container>
                    <b-row>
                        <b-col>
                            <h1>Philippines</h1>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <div class="hero-box">
                                <ion-icon name="body-outline" class="hero-box-icon"></ion-icon>
                                <h3 class="heading-tertiary">Cases</h3>
                                <p class="hero-box-text">217</p>
                                <h3 class="heading-tertiary">Today</h3>
                                <p class="hero-box-text">15</p>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="hero-box">
                                <ion-icon name="skull-outline" class="hero-box-icon"></ion-icon>
                                <h3 class="heading-tertiary">Deaths</h3>
                                <p class="hero-box-text">8</p>
                                <h3 class="heading-tertiary">Today</h3>
                                <p class="hero-box-text">0</p>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="hero-box">
                                <ion-icon name="heart-outline" class="hero-box-icon"></ion-icon>
                                <h3 class="heading-tertiary">Recovered</h3>
                                <p class="hero-box-text">8</p>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="hero-box">
                                <ion-icon name="medkit-outline" class="hero-box-icon"></ion-icon>
                                <h3 class="heading-tertiary">Active</h3>
                                <p class="hero-box-text">192</p>
                                <h3 class="heading-tertiary">Critical</h3>
                                <p class="hero-box-text">1</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </header>
        <main>
            <section class="section-symptoms">
                <b-container>
                    <b-row>
                        <b-col>
                            asd
                        </b-col>
                    </b-row>
                </b-container>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        computed: {
            covidResult () {
                return this.$store.state.result;
            }
        },
        created () {
            this.$store.dispatch('getResult')
        }
    }
</script>

<style scoped>
    /* 
        Color Pallete

        #E71D36
        #2EC4B6
        #011627
        #011627
     */

    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap');

    html {
        font-size: 62.5%; 
    }

    body {
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

	#app {
		font-family: "Roboto", Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

    header {
        background-image: linear-gradient(rgba(231, 29, 54, .7), rgba(231, 29, 54, .7)), url(~@/assets/hero.jpg);
        /* background-color: #E71D36; */
        background-size: cover;
        background-position: center;
        height: 100vh;
    }

    .navbar {
        background-color: transparent !important;
        height: 5rem;
    }

    .navbar-brand,
    .nav-item a {
        color: #ffffff !important;
    }

    h1, h2, h3, h4 {
        font-weight: 300;
        text-transform: uppercase;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 2rem;
        color: #fff;
        font-size: 3.5rem;
        word-spacing: 4px;
        letter-spacing: 2px;
        text-align: center;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        word-spacing: 4px;
        letter-spacing: 2px;
        text-align: center;
    }

    .hero-box {
        background-color: rgba(255, 255, 255, .8);
        font-size: 1.5rem;
        padding: 2.5rem;
        text-align: center;
        border-radius: 3px;
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0, .15);
        transition: transform .3s;
        height: 100%;
    }

    .hero-box-icon {
        font-size: 5rem;
        font-weight: 100;
        margin-bottom: .5rem;
        display: inline-block;
        color: #E71D36;
        --ionicon-stroke-width: 16px;
    }

    .hero-box-text {
        font-size: 1.4rem;
        font-weight: 500;
    }

    .hero-box:hover {
        transform: translateY(-1.5rem);
    }

</style>
