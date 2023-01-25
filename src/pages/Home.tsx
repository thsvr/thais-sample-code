import React, { useState } from 'react';
import { GET_COUNTRIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';

let PageSize = 10;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 27, 31);
    padding: 20px 50px;
    border-radius: 16px;
`;

const HomeHeader = styled.h3`
    color: lightgrey;
`;

const CountriesContainer = styled.div`
    padding: 1rem;
    margin-bottom: 30px;
    color: white;
`;

const DataContainer = styled.div`
    display: flex;
`;

const DataItem = styled.div`
    margin: 5px;
`;

export const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, data, error } = useQuery(GET_COUNTRIES);

    if (loading) return <div>loading</div>;
    console.log(error);

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        if (data.countries.length !== 0) {
            return data.countries.slice(firstPageIndex, lastPageIndex);
        }
    };

    return (
        <Container>
            <CountriesContainer>
                <HomeHeader>Countries</HomeHeader>
                {currentTableData().map((item: any) => {
                    return (
                        <DataContainer key={item.name}>
                            <DataItem>{item.emoji}</DataItem>
                            <DataItem>{item.name}</DataItem>
                        </DataContainer>
                    );
                })}
            </CountriesContainer>
            <Pagination
                currentPage={currentPage}
                totalCount={data.countries.length}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
            />
        </Container>
    );
};
