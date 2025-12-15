export interface Link {
    url: string;
    text: string;
    active: boolean | undefined;
}

export interface Topic{
    text: string;
    active: boolean | undefined;
}

export interface ThesesAndProjects {
    content: string;
    links: Link[];
    contentHeadline2: string;
    content2: string;
    topiclist: Topic[];
}