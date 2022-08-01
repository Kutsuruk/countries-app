import React, {useState, useEffect} from "react";
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import {useNavigate} from 'react-router-dom'

export const HomePage = ({setCountries, countries}) => {
    const history = useNavigate()
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) data = data.filter(country => country.region.includes(region))
        if (search) data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

        setFilteredCountries(data)
    }

    useEffect(() => {
        if (filteredCountries.length)
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, [])

    return(
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {
                    filteredCountries.map(country => {
                        const countryInfo = {
                            img: country.flags.svg,
                            name: country.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: country.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: country.region.toLocaleString()
                                },
                                {
                                    title: 'Capital',
                                    // description: country.capital.toLocaleString()
                                }
                            ]
                        }

                        return <Card
                            onClick={(e) => {
                                e.preventDefault()
                                history(`/country/${country.name}`)
                            }}
                            key={country.name}
                            {...countryInfo}
                        />
                    })}
            </List>
        </>
    )
}