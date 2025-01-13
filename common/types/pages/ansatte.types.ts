import { SanityRichtTextType } from "../root.types";

export type Ansatte = {
    title: string;
    slug: string;
    mainImage: any;
    content: any;
}

export type Post = {
    _id: string;
    _type: "ansatte";
    title: string;
    mainImage: any;
    content: SanityRichtTextType;
}