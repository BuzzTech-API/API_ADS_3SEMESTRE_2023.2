import Step from "./Steps";
import User from "./User";

export default class Process {
    private id: number
    private steps: Array<Step> = []
    private users: Array<User> = []
    constructor(id:number) {
        this.id = id
    }
}