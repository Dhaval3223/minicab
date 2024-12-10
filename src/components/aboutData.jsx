import React from 'react';
import { getmethodData, getmethodDataWithToken } from '../utils/Api';
import { useQuery } from 'react-query';

const AboutData = () => {

    const { data, isLoading, error, refetch } = useQuery(
        "AboutData",
        () => getmethodData("https://124124.site/minicab/public/api/get-about-us-data"),
    );

    if (isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Full height of the viewport
                    width: '100%',
                    backgroundColor: '#f8f9fa', // Optional: to make it more visible
                }}
            >
                <div>Loading...</div>
            </div>
        );
    }
    if (error) return <div>Error loading data</div>;

    return (
        <div 
            style={{ padding: '20px 20px 0' }} // Adds 20px padding to left, right, and top
            dangerouslySetInnerHTML={{ __html: data?.data }} 
        />
    );
}

export default AboutData;
