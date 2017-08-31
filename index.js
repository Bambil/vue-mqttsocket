const mqtt = require('./lib/mqtt')

module.exports = {
  install (Vue, options) {
    Vue.mixin({
      created: async () => {
        const client = await mqtt.connect(options)
        Vue.prototype.$mqtt = client
      }
      methods: {
        publish: (topic, message) {
        }
      }
    })
  }
}
