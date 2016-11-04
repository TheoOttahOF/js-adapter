import { Bare } from "../base"

export default class InterApplicationBus extends Bare {
    publish(topic: string, message): Promise<void> {
        return this.wire.sendAction("publish-message", {
            topic,
            message,
            sourceWindowName: this.wire.me.name
        })
    }
}