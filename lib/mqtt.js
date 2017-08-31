const {MqttClient} = require('mqttsocket')

module.exports = {
  connect: async (options) => {
    const client = new MqttClient(options.uri)
    client.connect()

    return new Promise((resolve, reject) => {
      client.on('connect', () => {
        resolve(client)
      })
    })
  },

  install: (Vue, options) => {
    Vue.prototype.$mqtt = new MqttClient(options.uri)
  }
}
