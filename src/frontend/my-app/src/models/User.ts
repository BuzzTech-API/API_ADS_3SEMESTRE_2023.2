import Process from "./Process"

export default class User {
    private id: number
    private processes: Array<Process> = []
    constructor(id: number) {
        this.id = id
    }
}