import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './graphql/queries';

function App() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    console.log('data', data, loading, error);
    return <div className="App">test</div>;
}

export default App;
