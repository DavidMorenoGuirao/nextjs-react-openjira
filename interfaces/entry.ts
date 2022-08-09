//interface y type son practicamente lo mismo. usemos la interface cuando los trypos se puedan expandir. Y usemos type cuando los tipos no vayan a expandirse

export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus; //pending, in-progress, finished
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';