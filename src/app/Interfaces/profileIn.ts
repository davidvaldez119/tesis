export interface ProfilesIn {
    profiles: Profile[];
    review:   Review[];
}

export interface Profile {
    id:       number;
    userName: string;
    date:     Date;
    email:    string;
    cel:      string;
}

export interface Review {
    idProfile:   string;
    idMovie:     string;
    score:       string;
    description: string;
}
