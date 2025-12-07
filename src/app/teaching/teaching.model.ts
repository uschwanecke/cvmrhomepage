export interface Lecture {
    link: string;
    displaytext: string;
    additionalInformation: string;
    active: boolean| undefined;
}

export interface Semester {
    text: string;
    lectures: Lecture[];
}
export interface Teaching {
    semesters: Semester[];
}