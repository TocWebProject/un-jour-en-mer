<template>
    <NavBlogAndFaq></NavBlogAndFaq>
    <div ref="containerFaq" class="container col-8 faq-section">     
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Est-il possible de reporter l'excursion en cas de météo capricieuse ? 
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Evidement nous reportons dans la mesure de possible votre excursion... on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <br>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quelle tenue dois-je prévoir ? 
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <br>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Nous souhaitons partir plusieurs jours, est-ce possible ? 
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        id. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>

    </div>
        
</template>

<script>
import NavBlogAndFaq from './NavBlogAndFaq.vue'
import { TimelineLite, Expo } from 'gsap'

export default {
    name:'Faq',
    components: {
        NavBlogAndFaq,
    },
    methods: {
        animFaq(){
            const { containerFaq } = this.$refs
            const timelineBlog = new TimelineLite()
            timelineBlog.from(containerFaq, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
            })

        },
        leaveAnimFaq(){
            const { containerFaq } = this.$refs
            const timelineBlog = new TimelineLite()
            timelineBlog.to(containerFaq, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
            })
        },
    },
    mounted(){
        this.animFaq()
    },
}
</script>

<style scoped>

.faq-section {
   padding-top: 20vh;
}

.btn-link {
    font-weight: 400;
    color: rgba(0, 21, 50, 0.9);
    text-decoration: none;
    outline: none;
}

.btn-link:hover {
    color: #023e7e;
    text-decoration: none;
}

</style>