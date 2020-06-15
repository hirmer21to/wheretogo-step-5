import { Time } from "@angular/common";

export class Lecture {
    constructor(
        public id: number,
        public name: string,
        public room: string,
        public day: string,
        public time: Time,
        public building: string,
        public floor: string,
        public department?: string
    ){ }
}
