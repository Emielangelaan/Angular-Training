export interface Superhero {
    name: string;
    
    images: {
        xs: string,
        sm: string,
        md: string,
        lg: string
    }

    appearance: {
        gender: string;
    }

    powerstats: {
        intelligence: number,
        speed: number,
        strength: number
    }
}
