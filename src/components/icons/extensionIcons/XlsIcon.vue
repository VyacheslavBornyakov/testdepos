<template>
  <fragment>
    <path v-if="size === 'little'" d="M1 4H11V6H1V4Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 7H11V9H1V7Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 10H11V12H1V10Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 13H11V15H1V13Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 16H11V18H1V16Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 19H11V21H1V19Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M1 22H11V24H1V22Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 22H23V24H13V22Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 1H23V3H13V1Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 4H23V6H13V4Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 7H23V9H13V7Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 10H23V12H13V10Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 13H23V15H13V13Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 16H23V18H13V16Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    <path v-if="size === 'little'" d="M13 19H23V21H13V19Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>

    <g v-if="size === 'big'" clip-path="url(#clip0_1183_8)">
      <path d="M1 7.26087H22.8182V11.4348H1V7.26087Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 13.5217H22.8182V17.6957H1V13.5217Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 19.7826H22.8182V23.9565H1V19.7826Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 26.0435H22.8182V30.2174H1V26.0435Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 32.3043H22.8182V36.4783H1V32.3043Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 38.5652H22.8182V42.7391H1V38.5652Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M1 44.8261H22.8182V49H1V44.8261Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 44.8261H49V49H27.1818V44.8261Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 1H49V5.17391H27.1818V1Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 7.26087H49V11.4348H27.1818V7.26087Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 13.5217H49V17.6957H27.1818V13.5217Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 19.7826H49V23.9565H27.1818V19.7826Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 26.0435H49V30.2174H27.1818V26.0435Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 32.3043H49V36.4783H27.1818V32.3043Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
      <path d="M27.1818 38.5652H49V42.7391H27.1818V38.5652Z" fill="#8D8D8D" :fill-opacity="fillOpacity"/>
    </g>
    <defs v-if="size === 'big'">
      <clipPath id="clip0_1183_8">
        <rect width="48" height="48" fill="white"/>
      </clipPath>
    </defs>
  </fragment>
</template>

<script>
export default {
  name: "XlsIcon",
  props: {
    size:{
      type:String,
      default:'little'
    },
    fillOpacity: {
      type:Number
    }
  }
}
</script>
