import mqtt from './lib/mqtt'

export default {
  async install (Vue, options) {
    const client = await mqtt.connect(options)
    Vue.prototype.$mqtt = client
  }
}
