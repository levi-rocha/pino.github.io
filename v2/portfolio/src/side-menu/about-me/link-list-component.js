import React from 'react'
import PropTypes from 'prop-types'

const LinkList = ({ links }) => (
    <div>
        {links.map(link => (
          <Link {...link} />
        ))}
    </div>
)

LinkList.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.
        }).isRequired
    ).isRequired
}

export default LinkList