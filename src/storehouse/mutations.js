export default {
  changeCity (state, city) {
    // 新傳遞進來的city去覆蓋先前公用數據的city
    state.city = city
    // 新傳遞進來的city去覆蓋本地倉庫存的city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
