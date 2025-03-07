import React from 'react';
import { Redirect } from "react-router-dom";

const AgencyProfile = React.lazy(() => import('containers/agency/AgencyContainer').then((comp) => comp));
const ErrorPage = React.lazy(() => import('components/errorPage/ErrorPage').then((comp) => comp));

// /* eslint-disable import/prefer-default-export */
// Please add any new routes to the scripts/pages.js routes file.
// eslint-disable-next-line import/prefer-default-export
export const routes = [
    {
        path: `/`,
        component: () => <Redirect to="/agency/department-of-defense" />,
        exact: true
    },
    {
        path: '/agency/:agencySlug',
        component: AgencyProfile,
        exact: true
    },
    {
        path: '*',
        component: ErrorPage
    }
];

