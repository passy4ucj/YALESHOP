import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({  title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to YaleShop',
    description: 'we sell the best jewelry',
    keywords: 'jewelries, buy jewelries, rings'
}

export default Meta
