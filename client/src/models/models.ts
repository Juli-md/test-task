export interface IPlayerRow {
    idNode: number;
    fio: string;
    level: string,
    experience?: number;
    money?: number;
    place?: number
}

export interface IPlayer {
    idNode: number;
    fio: string;
    sex: string;
    idParent: number;
    idRole: number;
    idZone: null;
    idInstance: number;
    level: string,
    levelOrder: number;
    resources: string;
}

export interface IResource {
    resource: string;
    value: number;
}

