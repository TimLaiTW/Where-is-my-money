import { Friend, Expense, HeadIconSex, HeadIconSkin } from "./type"

export const FakeFriendA: Friend = {
    uuid: 'aaa',
    name: 'Fake user A',
    balance: 0,
    icon: {sex: HeadIconSex.MALE, skin: HeadIconSkin.Type_1}
}

export const FakeFriendB: Friend = {
    uuid: 'bbb',
    name: 'Fake user B',
    balance: 0,
    icon: {sex: HeadIconSex.FEMALE, skin: HeadIconSkin.Type_1}
}

export const FakeExpense0: Expense = {
uuid: 'xxx',
paidBy: FakeFriendA,
shareWith: [FakeFriendA, FakeFriendB],
amount: 120,
description: 'lunch'
}

export const FakeExpense1: Expense = {
    uuid: 'yyy',
    paidBy: FakeFriendB,
    shareWith: [FakeFriendA],
    amount: 80,
    description: 'dinner'
    }
