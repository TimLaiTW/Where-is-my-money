export enum Action {
    ADD = 'add',
    EDIT = 'edit',
    REMOVE = 'remove'
}

export type ActionResponse = {
    id?: string,
    action: Action
}

export type Friend = {
    uuid: string,
    name: string,
    amount: number,
    icon: HeadLinkData,
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

export type FriendDialog = {
    action: string,
    title: string,
    cancelBtnText?: string,
    removeBtnText?: string,
    submitBtnText?: string,
    name?: string
};

export type ExpenseDialog = {
    action: string,
    title: string,
    uuid?: string,
    paidBy?: Friend,
    shareWith?: Friend[],
    amount?: number,
    description?: string,
    cancelBtnText?: string,
    removeBtnText?: string,
    submitBtnText?: string,
};

export type HeadLinkData = {
    sex: string,
    skin: string
}
