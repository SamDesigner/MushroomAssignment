<template>
  <div class="variation_background overflow-x-hidden" >
    <div class="screen_section acme-regular">
      <div class="screenBg">
        <h4>Total Mushrooms</h4>
        <p class="text-[50px]">{{ totalMushroom }}</p>
      </div>
      <div class="screenBg">
        <h4>Good Mushrooms</h4>
        <p class="text-[50px]">{{ goodMushroom }}</p>
      </div>
      <div class="screenBg">
        <h4>Bad Mushrooms</h4>
        <p class="text-[50px]">{{ badMushroomValue }}</p>
      </div>
    </div>
    <div class="controller_section absolute left-0 top-[30%] z-[100]" >
        <div class="relative flex items-center transition duration-500 ease-in-out transform" :class="!isTablet ? ' translate-x-0' : '-translate-x-full'" >
          <img class="h-[400px]" :src="tabletImage" />
    
          <div>

          </div>
          <div class="absolute bottom-5 flex items-center ">
            <img @click="calculateBadMushroom" class="h-[200px] pl-[5px] cursor-pointer   " :src="badMushroomButton" />
            <img @click="calculateGoodMushroom" class="h-[170px] pr-[5px] cursor-pointer " :src="goodMushroomButton" />
          </div>

        </div> 
        <div @click="isTablet = !isTablet" class="bg-green-500 h-fit p-[20px] rounded-full w-fit ml-[20px] cursor-pointer" >
          <img :src="tablet" />
        </div>
    </div>
  
    <div class="rollers overflow-x-hidden ">
      <img class="absolute bottom-[17%]  h-[150px] badMushroom" :src="BadMushroom" />
      <img class="absolute bottom-[17%] h-[150px] goodMushroom"  :src="GoodMushroom" />
      <img class="absolute bottom-[17%]  h-[150px] badMushroom" :src="BadMushroom" />
      <img class="absolute bottom-[17%]  h-[150px] badMushroom" :src="BadMushroom" />
      <img class="absolute bottom-[17%] h-[150px] goodMushroom"  :src="GoodMushroom" />
    </div>
  </div>
</template>
<script setup>
  // Import For Images Comes Here
  import BadMushroom from '../assets/images/BadMushroom.png'
  import GoodMushroom from '../assets/images/GoodMushroom.png'
  import badMushroomButton from '../assets/images/badMushroomButton.png'
  import goodMushroomButton from '../assets/images/goodMushroomButton.png'
  import tablet from '../assets/svg/tablet.svg'
  import tabletImage from '../assets/images/mushroomTablet.png'

  const dataSet = reactive([
    {
      id:1,
      type:'Good Mushroom',
    },
    {
      id:2,
      type:'Bad Mushroom',
    },
    {
      id:3,
      type:'Good Mushroom',
    },
    {
      id:4,
      type:'Bad Mushroom',
    },
    {
      id:5,
      type:'Good Mushroom',
    },
    {
      id:6,
      type:'Good Mushroom',
    },
    {
      id:7,
      type:'Good Mushroom',
    },
    {
      id:8,
      type:'Bad Mushroom',
    },
    {
      id:9,
      type:'Good Mushroom',
    },
    {
      id:10,
      type:'Good Mushroom',
    },
    {
      id:11,
      type:'Good Mushroom',
    },
    {
      id:12,
      type:'Bad Mushroom',
    },
    {
      id:13,
      type:'Good Mushroom',
    },
    {
      id:14,
      type:'Bad Mushroom',
    },
    {
      id:15,
      type:'Bad Mushroom',
    },
    {
      id:16,
      type:'Good Mushroom',
    },
    {
      id:17,
      type:'Good Mushroom',
    },
    {
      id:18,
      type:'Good Mushroom',
    },
    {
      id:19,
      type:'Good Mushroom',
    },
    {
      id:20,
      type:'Bad Mushroom',
    },
    {
      id:21,
      type:'Bad Mushroom',
    },
    {
      id:22,
      type:'Bad Mushroom',
    },
    {
      id:23,
      type:'Good Mushroom',
    },
    {
      id:24,
      type:'Good Mushroom',
    },
    {
      id:25,
      type:'Good Mushroom',
    },
    {
      id:26,
      type:'Good Mushroom',
    },
    {
      id:27,
      type:'Good Mushroom',
    },
    {
      id:28,
      type:'Bad Mushroom',
    },
    {
      id:29,
      type:'Good Mushroom',
    },
    {
      id:30,
      type:'Bad Mushroom',
    }
   
  ])
  const totalMushroom = dataSet.length
 const goodMushroom = ref(0);
 const badMushroomValue = ref(0);
 const isTablet = ref(false)
 const goodMushroomCount = ref(null);
 const badMushroomCount = ref(null)
const  calculateGoodMushroom = () => {
  console.log('I am from the calc good mushroom')
   goodMushroomCount.value =  dataSet.filter((data) => data.type === 'Good Mushroom').length
   increamentMushroom(goodMushroom, goodMushroomCount)
}
const calculateBadMushroom = () => {
  badMushroomCount.value = dataSet.filter((data) => data.type === 'Bad Mushroom').length
  increamentMushroom(badMushroomValue, badMushroomCount)

}
const increamentMushroom = (mushroomType, dataset) => {
    const interval = setInterval(()=> {

      if(mushroomType.value < dataset.value){
        
        mushroomType.value++
      }else{
        clearInterval(interval)
      }
    },1000)
}
  
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
body{
  overflow-x: hidden !important;
}
.variation_background {
  background: url("../assets/images/variationOne.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden !important;
  align-items: end;
}
.badMushroom{
  animation-name: moveCart;
  animation-duration: 10s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}
.goodMushroom{
  animation-name: moveCart;
  animation-duration: 10s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-timing-function: linear; 

}
@keyframes moveCart{
  from{
    transform: translateX(1100px);
  }
  to{
    transform: translateX(-200px);
  }
}
.rollers {
  height: 15vh;
  width: 100%;
  background: url("../assets/images/brickWall.jpg");
  background-size: cover;
}
.screen_section {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  /* background: red; */
}
.screenBg {
  background: url("../assets/images/screenImage.png");
  height: 20vh;
  width: 300px;
  color: white;
  text-align: center;
  padding: 10px;
}
.acme-regular {
  font-family: "Acme", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
