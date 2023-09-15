import RequestForEvidence from "./RequestForEvidence"

export default class Step {
    private id: number
    private requestsForEvidence: Array<RequestForEvidence> = []
    constructor(id:number) {
        this.id = id
    }
}