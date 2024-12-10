import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getmethodData, getmethodDataWithToken } from '../utils/Api';

function Questions() {
    const [faqItems, setFaqItems] = useState([]);

    const { data, isLoading, error, refetch } = useQuery(
        "FAQDataFetch",
        () => getmethodData("https://minicab.124124.site/public/api/get-faqs"),
    );

    useEffect(() => {
        if (data?.data) {
            setFaqItems(data.data.map(item => ({ ...item, isOpen: false })));
        }
    }, [data]);

    const toggleFaq = (index) => {
        setFaqItems(prevItems =>
            prevItems.map((item, i) =>
                i === index ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

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
    if (error) return <p>Error loading FAQs.</p>;

    return (
        <div>
            <section className="content_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-3">
                            <h3 className="main_heading mb-lg-3 mb-md-3 mb-sm-3 mb-1">
                                Frequently Asked Questions
                            </h3>
                        </div>
                        <div className="offset-lg-1 col-lg-10">
                            <ul className="faq_ul">
                                {faqItems.map((item, index) => (
                                    <li key={index}>
                                        <h6 onClick={() => toggleFaq(index)}>
                                            {item.question} <i className={`fas ${item.isOpen ? 'fa-minus' : 'fa-plus'}`} />
                                        </h6>
                                        {item.isOpen && (
                                            <p
                                                dangerouslySetInnerHTML={{ __html: item.answer }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Questions;
