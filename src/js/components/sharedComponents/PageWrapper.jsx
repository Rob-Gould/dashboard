import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'data-transparency-ui';
import { getStickyBreakPointForSidebar } from 'helpers/stickyHeaderHelper';
import MetaTags from 'components/sharedComponents/metaTags/MetaTags';

const PageWrapper = ({
    pageName,
    classNames,
    metaTagProps = {},
    children,
    ref,
    noHeader = false,
    title,
    overLine,
    toolBarComponents = [],
    filters = {},
    sections,
    activeSection,
    jumpToSection,
    inPageNav = false
}) => (
    <div className={classNames} ref={ref}>
        <MetaTags {...metaTagProps} />
        {noHeader ? null : <><PageHeader
            title={title}
            stickyBreakPoint={getStickyBreakPointForSidebar()}
            overLine={overLine}
            toolBar={toolBarComponents}
            inPageNav={inPageNav}
            detectActiveSection
            pageName={pageName}
            sections={sections}
            activeSection={activeSection}
            jumpToSection={jumpToSection} /></>}
        {React.cloneElement(children, {
            className: `usda-page__container${children.props.className ? ` ${children.props.className}` : ''}`
        })}
    </div>
);

PageWrapper.propTypes = {
    pageName: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    metaTagProps: PropTypes.object,
    toolBarComponents: PropTypes.arrayOf(PropTypes.element),
    title: PropTypes.string,
    overLine: PropTypes.string,
    children: PropTypes.element,
    ref: PropTypes.object,
    noHeader: PropTypes.bool,
    filters: PropTypes.object,
    sections: PropTypes.array,
    activeSection: PropTypes.string,
    jumpToSection: PropTypes.func
};

export default PageWrapper;
