export interface ProfilesIn {
    profiles: Profile[],
    review:   Review[]
}

export interface Profile {
    id?:       string,
    userName: string,
    date:     Date,
    email:    string,
    cel:      string,
    password: string
}

export interface Review {
    idProfile:   string,
    idMovie:     string,
    score:       string,
    description: string
}
