import { Friend, Expense } from "./type"
export const FakeFriendA: Friend = {
    uuid: 'aaa',
    name: 'Fake user A',
    amount: 0
}

export const FakeFriendB: Friend = {
    uuid: 'bbb',
    name: 'Fake user B',
    amount: 0
}

export const FakeExpense: Expense = {
uuid: 'xxx',
paidBy: FakeFriendA,
shareWith: [FakeFriendA, FakeFriendB],
amount: 120,
description: 'lunch'
}
