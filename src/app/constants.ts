import { Friend, Expense } from './type';

export function getIndexFromArrayById(arr: Friend[] | Expense[], uuid: string): number {
    return arr.map(obj => obj.uuid).indexOf(uuid);
}

export function getStringFromArray(arr: string[]): string {
    return arr.join(", ");
}

// TODO: combine those two functs.
export function getFriendObjectFromArrayById(arr: Friend[], uuid: string): Friend {
    const objIndex = getIndexFromArrayById(arr, uuid);
    return arr[objIndex];
}

export function getExpenseObjectFromArrayById(arr: Expense[], uuid: string): Expense {
    const objIndex = getIndexFromArrayById(arr, uuid);
    return arr[objIndex];
}