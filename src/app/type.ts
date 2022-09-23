/** Action taken by dialog */
export enum Action {
    ADD = 'add',
    EDIT = 'edit',
    REMOVE = 'remove'
}

/** response from dialog */
export type ActionResponse = {
    id?: string,
    action: Action
}

export type Friend = {
    uuid: string,
    name: string,
    balance: number,
    icon: HeadIconData,
};

export interface ExpenseModule {
    paidBy: Friend,
    shareWith: Friend[]
    amount: number,
    description?: string
};

export interface Expense extends ExpenseModule {
    uuid: string,
};

/** dialog construction */
export interface DialogData {
    action: string,
    title: string,
    cancelBtnText?: string,
    removeBtnText?: string,
    submitBtnText?: string,
};

/** Friend dialog */
export interface FriendDialog extends DialogData{
    name: string,
    icon: HeadIconData
};

/** Expense dialog */
export interface ExpenseDialog extends DialogData{
    uuid: string,
    paidBy: Friend,
    shareWith: Friend[],
    amount: number,
    description: string,
};

/** head icon params */
export type HeadIconData = {
    sex: HeadIconSex,
    skin: HeadIconSkin
}

export enum HeadIconSex {
    MALE = 'male',
    FEMALE = 'female'
}

export enum HeadIconSkin {
    Type_1 = '1',
    Type_2 = '2',
    Type_3 = '3',
}