import { Friend, Expense, HeadIconData, HeadIconSex, HeadIconSkin } from "./type";

export function getIndexFromArrayById(arr: Friend[] | Expense[], uuid: string): number {
    return arr.map(obj => obj.uuid).indexOf(uuid);
}

export function getObjectFromArrayById(arr: Friend[] | Expense[], uuid: string): Friend | Expense {
    const objIndex = getIndexFromArrayById(arr, uuid);
    return arr[objIndex];
}

export function getRandomHeadData(): HeadIconData{
    const lengthOfSex = Object.keys('Sex').length - 1;
    const lengthOfSKin = Object.keys('Skin').length - 1;
    const randomSex = Math.floor(Math.random()*lengthOfSex);
    const randomSkin = Math.floor(Math.random()*lengthOfSKin);
    return {
        sex: Object.values(HeadIconSex)[randomSex],
        skin: Object.values(HeadIconSkin)[randomSkin]
    };
}