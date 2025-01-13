import { SanityRichtTextType } from "../root.types";
import { Project } from "./post.types";
import { Ansatte } from "./ansatte.types";



export type Home = {
    _id: string;
    _type: "home";
    title: string;
    image: any;
    entry: SanityRichtTextType;
    project: Project[];
    ansatte: Ansatte[];
    
}
