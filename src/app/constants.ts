import { Friend, Expense } from './type';

export function getIndexFromArrayById(arr: Friend[] | Expense[], uuid: string): number {
    return arr.map(obj => obj.uuid).indexOf(uuid);
}

export function getStringFromArray(arr: string[]): string {
    return arr.join(", ");
}