import React from 'react';
import PropTypes from 'prop-types';
import { LoadingMessage, SectionWrapper } from 'data-transparency-ui';

const dayjs = require('dayjs');

const propTypes = {
    section: PropTypes.shape({
        section: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }),
    icon: PropTypes.string,
    children: PropTypes.element,
    isLoading: PropTypes.bool,
    dataThroughDate: PropTypes.string
};

const AgencySection = ({
    section,
    icon = "chart-area",
    children,
    isLoading,
    dataThroughDate
}) => {
    return (
        <SectionWrapper
            id={`agency-v2-${section.section}`}
            >
            {isLoading ? <LoadingMessage /> : children}
        </SectionWrapper>);
};

AgencySection.propTypes = propTypes;
export default AgencySection;
