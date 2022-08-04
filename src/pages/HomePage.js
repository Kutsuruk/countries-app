import React, {useState, useEffect} from "react";
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import {useHistory} from 'react-router-dom'

import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

export const HomePage = ({setCountries, countries}) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const {push} = useHistory()

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
        // eslint-disable-next-line
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
                                    description: country.capital
                                }
                            ]
                        }

                        return <Card
                            key={country.name}
                            onClick={() => push(`/country/${country.name}`)}
                            {...countryInfo}
                        />
                    })}
            </List>
        </>
    )
}