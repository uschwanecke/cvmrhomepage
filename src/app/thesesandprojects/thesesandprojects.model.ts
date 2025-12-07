export interface Link {
    url: string;
    text: string;
    active: boolean | undefined;
}

export interface ThesesAndProjects {
    text: string;
    links: Link[];
    headline2: string;
    text2: string;
    topiclist: string[];
}