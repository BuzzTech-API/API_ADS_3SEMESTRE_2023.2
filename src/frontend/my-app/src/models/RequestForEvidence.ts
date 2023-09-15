import Evidence from "./Evidence"

export default class RequestForEvidence {
    private id:number
    private evidences: Array<Evidence> = []
    constructor (id:number) {
        this.id = id
    }
}