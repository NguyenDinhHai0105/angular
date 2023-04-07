export class Book {
    id: number;
    name: string;
    authorName: string;

    constructor(id?: number, name?: string, authorName?: string) {
        this.id = id || 0;
        this.name = name || '';
        this.authorName = authorName || '';
    }
}
