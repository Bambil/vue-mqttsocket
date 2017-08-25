import Mqtt from 'lib/mqtt'

export default {
  install(Vue, options) {
    Vue.mixin({
      async created: () => {
        const client = await Mqtt.connect(options)
        Vue.prototype.$mqtt = client
      }
    })

  }
}
