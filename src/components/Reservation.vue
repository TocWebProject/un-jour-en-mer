<template>
    <div class="reservation">
        <section class="reservation-section pt-1">
            <div class="container container-reservation">
                <h4 ref="heading4Reservation" class="heading-4-reservation text-center">Réservation</h4>
                <h2 ref="heading2Reservation" class="heading-2-reservation text-center">Programmez votre navigation</h2>
                <div class="row">
                    <div class="col-12 visuals-reservation">
                        <div class="image-container-reservation">
                            <img ref="imgSailReservation" class="img-sail-reservation" :src="imgSailResa" alt="">
                        </div>
                        <div class="image-container-reservation">
                            <img ref="imgSeaReservation" class="img-sea-reservation" :src="imgSeaResa" alt="">
                        </div>
                    </div>
                </div>
                <p class="paragraph-reservation text-center">
                    Nous vous appelons pour penser ensemble votre excursion et <br>
                    vous faire découvrir nos propositions en détail.
                </p>
                <div class="form-reservation-section col-12 mx-auto">
                    <form v-on:submit.prevent="onSubmit">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputName">Nom</label>
                                <input type="text" class="form-control" id="inputName" v-model.trim="reservationData.name" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail">Mail</label>
                                <input type="email" class="form-control" id="inputEmail" v-model.trim="reservationData.email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Ville</label>
                                <input type="text" class="form-control" id="inputCity" v-model.trim="reservationData.city" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPhone">Numéro de téléphone</label>
                                <input type="text" class="form-control" id="inputPhone" v-model.trim="reservationData.phone" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputDate">Choix de la date</label>
                                <input type="date" format="dd-mm-yyyy" class="form-control" id="inputDate" placeholder="aaaa-mm-jj" v-model="reservationData.date" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputState">Nombre de passager</label>
                                <select id="inputState" class="form-control" v-model.trim="reservationData.numberOfPeople" required>
                                    <option disabled value="">Choix</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit">
                            <svg ref="btnRoundAnimated" class="btnRoundAnimated" @mouseenter="animBtn()" @mouseleave="reverseAnimBtn()" xmlns="http://www.w3.org/2000/svg" width="180" height="60" viewBox="0 0 220 60">
                                <rect x="0" y="0" width="60" height="60" rx="30" ry="30" fill="#85b8ff" style="opacity: 0.4;" /> 
                                <text ref="textBtnRoundAnimated" class="text-btnRound" transform="translate(70 38)" text-anchor="middle" font-size="20" fill="#000">Envoyer</text>
                            </svg>
                        </button>
                    </form>
                </div>
                <teleport to="#modals">
                    <div v-if="modalReservation">
                        <TransitionAnimation></TransitionAnimation>
                        <div class="overlay-modal" @click="closeModalReservation"></div>
                        <div class="reservation-modal">
                            <a @click="closeModalReservation" class="close"></a>
                            <h3>Merci de nous faire confiance <br> {{ reservationData.name }}</h3>
                            <p>Nous avons bien reçu votre demande de réservation pour le {{ reservationData.frenchDateFormat }}</p>
                            <p>Nous sommes sûrement en mer, nous vous contacterons une fois le pied à terre</p>
                        </div>
                    </div>
                </teleport>    
            </div>
        </section>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Elastic, Linear } from 'gsap'
import TransitionAnimation from './TransitionAnimation.vue'

export default {
    name: 'Reservation',
    components: {
        TransitionAnimation,
    },
    props:['mode'],
    data () {
        return {
            modalReservation: false,
            reservationData: {
                name:'',
                email:'',
                city:'',
                phone:'',
                numberOfPeople:'',
                date:'',
                frenchDateFormat: '',
            },
            imgSailResa: require('@/assets/img/artyom-kabajev-Wy2BfDjvJA8-unsplash.jpg'),
            imgSeaResa: require('@/assets/img/das-sasha-VuBzplNNi0k-unsplash.jpg'),
        }
    },
    methods: {

        closeModalReservation() {
            this.modalReservation = false  
        },

        onSubmit () {
            // Convert Date from yyyy-mm-dd to dd-mm-yyyy
            let splitDate = this.reservationData.date.split('-');
            let year = splitDate[0];
            let month = splitDate[1];
            let day = splitDate[2]; 
            this.reservationData.frenchDateFormat = day + '/' + month + '/' + year;
            
            //Open Modal & Console.log
            this.modalReservation = true
            console.log(this.reservationData);
        },   

        initScrollAnimationReservation(){
            const { heading2Reservation, heading4Reservation, imgSailReservation, imgSeaReservation } = this.$refs

            gsap.from(imgSeaReservation, {
                scrollTrigger: {
                trigger: imgSeaReservation,
                scrub: 1,
                toggleClass: 'active',
                start: 'top 99%'
                },
                duration: 0.8,
                y: -90,
                opacity: 0,
             })

            gsap.from(imgSailReservation, {
                scrollTrigger: {
                trigger: imgSailReservation,
                scrub: 1,
                toggleClass: 'active',
                start: 'top 99%'
                },
                duration: 0.8,
                y: -90,
                opacity: 0,
            })

            gsap.from(heading2Reservation, {
                scrollTrigger: {
                trigger: heading2Reservation,
                scrub: 1,
                toggleClass: 'active',
                start: 'top 95%'
                },
                duration: 1.5,
                y: -40,
                opacity: 0,
             })

            gsap.from(heading4Reservation, {
                scrollTrigger: {
                trigger: heading4Reservation,
                scrub: 1,
                toggleClass: 'active',
                start: 'top 95%'
                },
                duration: 1.5,
                y: -40,
                opacity: 0,
            })
        },

        // BTN ANIMATION
        animBtn() {
        const { btnRoundAnimated, textBtnRoundAnimated } = this.$refs

            if (this.mode === "light") {
                gsap.to(btnRoundAnimated.children[0], 0.4, {
                    attr:{width:140, 
                    fill:"#001532"}, 
                    autoAlpha: 0.8, 
                    ease: Elastic.easeOut.config(1, 1),
                })
        
                gsap.to(textBtnRoundAnimated, 0.2, {
                    fill:"#fff",
                    ease: Linear.easeNone,
                }, 0);

            } else {
                gsap.to(btnRoundAnimated.children[0], 0.4, {
                    attr:{width:140, 
                    fill:"#9dc1f5"}, 
                    autoAlpha: 0.8, 
                    ease: Elastic.easeOut.config(1, 1),
                })
    
                gsap.to(textBtnRoundAnimated, 0.2, {
                    fill:"#000",
                    ease: Linear.easeNone,
                }, 0);
            }
        },

        reverseAnimBtn() {
            const { btnRoundAnimated, textBtnRoundAnimated } = this.$refs

            if (this.mode === "light") {
                gsap.to(btnRoundAnimated.children[0], 0.4, {
                    attr:{width:60, 
                    fill:"#85b8ff"}, 
                    
                    opacity: 0.4,
                    ease: Elastic.easeOut.config(1, 1),
                    })
    
                gsap.to(textBtnRoundAnimated, 0.2, {
                    fill:"#000",
                    ease: Linear.easeNone,
                }, 0);
            } else {
                gsap.to(btnRoundAnimated.children[0], 0.4, {
                    attr:{width:60, 
                    fill:"#c7daf5"}, 
                    opacity: 0.4,
                    ease: Elastic.easeOut.config(1, 1),
                })
  
                gsap.to(textBtnRoundAnimated, 0.2, {
                fill:"#fff",
                ease: Linear.easeNone,
                }, 0);
            }

        }
    },

    mounted(){
        this.initScrollAnimationReservation();
    }
}
</script>

<style scoped>
    button {
        all: unset;
    }

    button:focus {
        border: none;
        outline: none;
    }
</style>
