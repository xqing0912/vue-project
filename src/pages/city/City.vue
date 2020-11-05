<template>
  <div>
      <city-header></city-header>
      <city-search :cities="all_cities"></city-search>
      <city-list
        :cities="all_cities"
        :hotCities="hot_cities"
        :alphabet="alphabet">
      </city-list>
      <city-alphabet
       :all_cities="all_cities"
       @changeList="handleAlphabetChange">
      </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      all_cities: {},
      hot_cities: [],
      alphabet: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city-1.json')
        .then(this.handleGetCityInfo)
    },
    handleGetCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.all_cities = data.cities
        this.hot_cities = data.hotCities
      }
    },
    // 接收到changeList事件和參數后的操作
    handleAlphabetChange (alphabet) {
      // console.log(alphabet)
      this.alphabet = alphabet
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
