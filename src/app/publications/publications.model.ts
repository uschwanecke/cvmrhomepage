export interface PublicationLink {
    link: string;
    displaytext: string;
}

export interface Publication {
    authors: string;
    title: string;
    further: string;
    linklist: PublicationLink[];
    image: string;
    active: boolean | undefined;

}
export interface PublicationYear {
    year: number;
    publications : Publication[];
}

export interface Publications {
    pubyears: PublicationYear[];
}