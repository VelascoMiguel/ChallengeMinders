export declare class House {
    id: string;
    name: string;
    houseColours: string;
    founder: string;
    animal: string;
    element: string;
    ghost: string;
    commonRoom: string;
    heads: Head[];
    traits: Trait[];
}
export declare class Head {
    id: string;
    firstName: string;
    lastName: string;
    constructor(id: string, firstName: string, lastName: string);
}
export declare class Trait {
    id: string;
    name: string;
    constructor(id: string, name: string);
}
