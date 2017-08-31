import mqtt from './lib/mqtt'

export default {
  install (Vue, options) {
    Vue.mixin({
      created: async () => {
        const client = await mqtt.connect(options)
        Vue.prototype.$mqtt = client
      }
    })
  }
}
