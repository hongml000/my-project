let defaultCity = '北京'
try {
  if (localStorage.city) {
    console.log('localStorage')
    console.log(localStorage.city)
    defaultCity = localStorage.city
    console.log(defaultCity)
  }
} catch (e) { }

export default {
  city: defaultCity
}
