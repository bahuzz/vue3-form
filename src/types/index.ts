export interface Label {
    text: string
}

export interface Account {
    labels?: Label[],
    type: string,
    login: string,
    password: string | null
}


