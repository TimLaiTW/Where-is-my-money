import { HeadLinkData } from "./type";

export enum Sex {
    MALE = 'male',
    FEMALE = 'female'
}

export enum Skin {
    Type_1 = '1-2',
    Type_3 = '3',
    Type_5 = '5',
    Type_6 = '6',
    Type_7 = '7',
}

export function getRandomHeadData(): HeadLinkData{
    const lengthOfSex = Object.keys('Sex').length;
    const lengthOfSKin = Object.keys('Skin').length;
    const randomSex = Math.floor(Math.random()*lengthOfSex);
    const randomSkin = Math.floor(Math.random()*lengthOfSKin);
    console.log(Object.keys('Sex')[randomSex]);
    console.log(Object.keys('Skin')[randomSkin]);
    return {
        sex: Object.values(Sex)[randomSex],
        skin: Object.values(Skin)[randomSkin]
    };
}

export function getHeadIcon(iconData: HeadLinkData): string{
    return `https://img.icons8.com/color/48/000000/circled-user-${iconData.sex}-skin-type-${iconData.skin}--v1.png`
}

export function getLengthOfEnum(enumName: string): number {
    return Object.keys(enumName).length;
}
