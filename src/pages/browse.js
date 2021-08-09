import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browse';
import { seriesData } from '../fixtures/series';
import { filmsData } from '../fixtures/films';

export default function Browser() {
    //const {series} = useContent('series').length === 0 ? seriesData : useContent('series');
    
    const series = seriesData;
    const films = filmsData;
    //const {films} = useContent('films');
    
    // console.log("series" ,series);
    // console.log("movies" ,films);


    // create slides
    const slides = selectionFilter({series, films});
    
    
    return (
        <BrowseContainer slides = {slides}/>
    )
} 