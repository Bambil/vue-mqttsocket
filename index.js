import mqtt from './lib/mqtt'

export default {
  install (Vue, options) {
    const client = mqtt.connect(options)
    Vue.prototype.$mqtt = client
  }
}
