export interface IPlanet {
  id?: string
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: IResidents[]
}

export interface IResidents {
  name: string
  birth_year: string
  gender: string
}
