export interface ExternalLinks {
    text: string;
    url: string;
    active: boolean|undefined;
}

export interface Image {
    img: string,
    active: boolean|undefined;
}

export interface Home {
    content: string[];
    carousel: Image[];
    links: ExternalLinks[];
}