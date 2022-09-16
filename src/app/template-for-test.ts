import { Friend, Expense } from "./type"
import { Sex, Skin } from "./head-icon"

export const FakeFriendA: Friend = {
    uuid: 'aaa',
    name: 'Fake user A',
    amount: 0,
    icon: {sex: Sex.MALE, skin: Skin.Type_1}
}

export const FakeFriendB: Friend = {
    uuid: 'bbb',
    name: 'Fake user B',
    amount: 0,
    icon: {sex: Sex.FEMALE, skin: Skin.Type_1}
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
