import {MqttClient} from 'mqttsocket'

export default {
  connect: (options) => {
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
