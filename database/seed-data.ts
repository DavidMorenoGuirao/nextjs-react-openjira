
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;    
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Una linea de texto de prueba1 test1',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En Progreso: Una linea de texto de prueba2 test2',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminada: Una linea de texto de prueba3 test3',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}