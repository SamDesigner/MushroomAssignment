<template>
  <div class="h-[100vh] w-full mushroom_wrapper">
    <div class="flex h-full items-center " >
      <div class="flex-1 px-[30px]">
        <div>
          <img :src="factory" />
        </div>
        <h1 class="text-white text-[60px] font-[500]">
          Welcome To The Mushroom Factory
        </h1>
        <NuxtLink to="/factory">
            <button
            class="hover:bg-orange-600 hover:border-orange-600 transition duration-300 cursor-pointer  border border-white text-white text-[14px] py-2 px-4 rounded-xl flex items-center gap-[10px] focus:outline-none"
            >
            <img class="h-[20px] w-[20px]" :src="mushRoom" />
            <span>Get Started</span>
            </button>
        </NuxtLink>
      </div>
      <div class="flex-1 h-full flex justify-end relative  items-end ">
            <div class="clip-message-box">
                <h3>Welcome to the <span class="highlight">Mushroom Factory</span>. We have a large robotic arm that seperated Good <span class="highlight">Mushrooms</span> from bad Mushrooms</h3>
                <p class="text-[13px]">Click On the <span class="underline highlight">Get Started</span> button by your left</p>
            </div>
            <img class="h-[600px] " :src="tourGuide" />
      </div>
    </div>
  </div>
</template>
<script setup>
// import mushroomGuy from '@/assets/images.mushroomGuy.jpg'
import mushRoom from "../assets/svg/mushroom.svg";
import factory from "../assets/svg/factory.svg";
import tourGuide from "../assets/images/tourGuide.png";
</script>
<style scoped>
/* *{
        margin:0;
        padding: 0;
    } */
.mushroom_wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../assets/images/mushroomGuy.jpg");
  background-position: center;
  background-size: cover;
}
.clip-message-box{
    background: white;
    height: 25vh;
    position: absolute;
    width: 300px;
    top: 8%;
    right: 35%;
    border-radius: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    padding: 10px;
    text-align: justify;
}
.highlight{
    color: rgb(255, 132, 0);
}
</style>
