import {MqttClient} from 'mqttsocket'

export default {
  async connect: (options) => {
    const client = new MqttClient(options.uri)
    client.connect()

    return new Promise((resolve, reject) => {
      client.on('connect', () => {
        resolve(client)
      })
    })
  }
}

