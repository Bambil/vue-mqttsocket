const {MqttClient} = require('mqttsocket')

export default {
  connect: async (options) => {
    const client = new MqttClient(options.uri)
    client.connect()

    return new Promise((resolve, reject) => {
      client.on('connect', () => {
        console.log('MQTT connected!')
        resolve(client)
      })
    })
  }
}
