export class Todo {
    id: number;
    state: boolean;
    title: string;
    desc: string;

    constructor(title: string, desc: string) {
        this.id = null;
        this.title = title;
        this.desc = desc;
        this.state = false;
    }
}
