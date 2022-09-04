export type Friend = {
    uuid: string,
    name: string,
    amount: number
};

export interface FriendData {
    name: string;
}

export type Expense = {
    uuid: string,
    paidBy: Friend,
    shareWith: Friend[]
    amount: number,
    description?: string
};

export type ExpenseData = {
    paidBy: Friend,
    shareWith: Friend[]
    amount: number,
    description?: string
};

