export class Student {
    id: number;
    points = 0;
    // name: string;

    static maxId = 1;

    constructor(public name: string) {
        this.id = Student.maxId++;
        // this.name = name;
    }
}

// let s = new Student('Emiel');
