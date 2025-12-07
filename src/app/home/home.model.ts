export interface ExternalLinks {
    text: string;
    url: string;
    active: boolean|undefined;
}

export interface Home {
    content: string[];
    carousel: string[];
    links: ExternalLinks[];
}