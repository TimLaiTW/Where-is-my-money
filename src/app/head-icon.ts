import { HeadIconData } from "./type";

export enum Sex {
    MALE = 'male',
    FEMALE = 'female'
}

export enum Skin {
    Type_1 = '1',
    Type_2 = '2',
    Type_3 = '3',
}

export function getRandomHeadData(): HeadIconData{
    const lengthOfSex = Object.keys('Sex').length;
    const lengthOfSKin = Object.keys('Skin').length;
    const randomSex = Math.floor(Math.random()*lengthOfSex);
    const randomSkin = Math.floor(Math.random()*lengthOfSKin);
    return {
        sex: Object.values(Sex)[randomSex],
        skin: Object.values(Skin)[randomSkin]
    };
}

export function getLengthOfEnum(enumName: string): number {
    return Object.keys(enumName).length;
}
