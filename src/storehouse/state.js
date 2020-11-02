let defaultCity = '台北'
//  當使用localStorage時，外層要加try{...}catch(e){},防止瀏覽器異常
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
