/**
 * Created by libiyun on 2018/8/19.
 */
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
