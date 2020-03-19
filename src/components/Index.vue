<template>
    <div>
        <header>
            <nav>
                <b-navbar toggleable="lg" variant="info" class="header-nav">
                    <b-navbar-brand href="#">COVID-19</b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="#">Link</b-nav-item>
                            <b-nav-item href="#" disabled>Disabled</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </nav>
            <div class="hero-text-box">
                <h1>Philippines</h1>
                <p>Cases: 217</p>
                <p>Today Cases: 15</p>
                <p>Deaths: 17</p>
                <p>Today Deaths: 0</p>
                <p>Recovered: 8</p>
                <p>Active: 192</p>
                <p>Critical: 1</p>
            </div>
        </header>
        <main>
            <section class="section-prevention">
                
            </section>
            <section class="section-symptoms">
                
            </section>
            <section class="section-faq">
                <h2>FAQ</h2>
                <div v-for="(faq, index) in faqs" :key="index">
                    <h3>{{ faq.q }}</h3>
                    <p>{{ faq.a }}</p>
                </div>
            </section>
            
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                'faqs': [
                    {
                        q: 'What are Coronaviruses?',
                        a: 'Coronaviruses are a large family of viruses causing a range of illnesses, from the common cold to more serious infections such as those caused by Middle East Respiratory Syndrome-related Coronavirus (MERS-CoV) and Severe Acute Respiratory Syndrome-related Coronavirus (SARS-CoV). Coronavirus can also cause a variety of diseases in farm animals and domesticated pets.'
                    },
                    {
                        q: 'What is the novel coronavirus?',
                        a: 'The novel coronavirus (2019-nCoV) is a new strain of coronavirus that has not been previously identified in humans. The 2019-nCoV has caused severe pneumonia in several cases in China and has been exported to a range of countries and cities.'
                    },
                    {
                        q: 'Where did the 2019-nCoV ARD originate?',
                        a: 'Last 31 December 2019, a clustering of pneumonia cases of unknown etiology was reported in Wuhan, China. The outbreak was later determined to be caused by a novel coronavirus (2019-nCoV), a new coronavirus strain that has not been previously identified in humans.'
                    },
                    {
                        q: 'What are the symptoms and possible complications of a coronavirus infection?',
                        a: 'Common signs of coronavirus infection include flu-like and respiratory symptoms, fever, cough, shortness of breath, and breathing difficulties. In severe cases, it can cause pneumonia, acute respiratory syndrome, kidney failure, and even death.'
                    },
                    {
                        q: 'How is the 2019-nCoV ARD transmitted?',
                        a: 'On January 24, 2020, the World Health Organization has confirmed human-to-human transmission largely in Wuhan City, China. However, there is not enough information yet to draw a definitive conclusion about the intensity of human-to-human transmission, full clinical features, and the original source of the outbreak.'
                    },
                    {
                        q: 'Is there a treatment and vaccine for the 2019-nCoV ARD?',
                        a: 'There is no specific treatment for the 2019-nCoV ARD. However, many of the symptoms can be treated based on the patient’s clinical conditions. Supportive care for infected persons can also be highly effective.'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');

    html {
        font-size: 62.5%; 
    }

	#app {
		font-family: "Open Sans", Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

    header {
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(~@/assets/hero.jpg);
        background-size: cover;
        background-position: center;
        height: 100vh;
        background-attachment: fixed;
    }

	h1, h2, h3 {
		font-weight: 300;
		text-transform: uppercase;
	}

    h1 {
        margin-top: 0;
        margin-bottom: 20px;
        color: #ffffff;
        font-size: 240%;
        word-spacing: 4px;
        letter-spacing: 1px;
    }

    section {
        padding: 80px  0px
    }
    
    .hero-text-box {
        color: #fff;
    }

    .navbar {
        /* background-color: transparent !important; */
    }

    .navbar-brand {
        color: #ffffff !important;
        height: 5rem;
    }

    
</style>
