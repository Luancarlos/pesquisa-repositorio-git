export interface Repositorio {
    full_name: string;
    description: string;
    language: string;
    default_branch: string;
    owner: {
        avatar_url: string;
    };
}
