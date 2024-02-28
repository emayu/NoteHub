export interface Note {
    id: number|null;
    title: string;
    note: string;
    createdAt: Date | null;
    lastUpdate: Date | null;
}