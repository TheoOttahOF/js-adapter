export class UnexpectedAction extends Error {}
export class NoSuccess extends Error {}
export class DuplicateCorrelation extends Error {}
export class NoAck extends Error {}
export class NoCorrelation extends Error {}
export class ListenerNotRegistered extends Error {}
export class RuntimeError extends Error {
    constructor(payload: any) {
        let {reason, err} = payload
        super(reason)
        this.name = "RuntimeError"

        if (err && err.stack) {
            this.stack = err.stack
        }
    }
}