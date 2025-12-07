
export interface Person {
  name: string;
  desc: string | undefined;
  phone: string | undefined;
  mail: string | undefined;
  image: string | undefined;
  active: boolean | undefined;
}
export interface People {
  head: Person;
  researchAssistances: Person[];
  FormerResearchAssistantsAndProgrammers: Person[];

}