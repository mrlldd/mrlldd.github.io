import {Project} from "@/app/(public)/cv/components/projects/index";
import ContextWrapper from "@/app/(public)/components/context-wrapper";

export const workProjects = new Map<string, Project>([
    [
        'OPSolutions US - EHR',
        {
            link: 'https://www.opsolutions.us/',
            description: (
                <>
                    An electronic version of a patient&#39;s medical history, that is
                    maintained by the provider over time, and may include all of the key
                    administrative clinical data relevant to that persons care under a
                    particular provider, including demographics, progress notes, problems,
                    vital signs and past medical history. The EHR automates access to
                    information and has the potential to streamline the clinician’s
                    workflow.
                    <br/>
                    <br/>
                    <ContextWrapper>Role</ContextWrapper>: Team Lead / Senior Full-Stack Developer
                    <br/>
                    <ContextWrapper>Technologies and tools</ContextWrapper>: .NET 7 Web
                    API {'=>'} .NET 9 Web API, React 18 {'=>'} React 19, Azure, SQL Server, Redis, SignalR, AKS,
                    ElasticSearch
                    <br/>
                    <ContextWrapper>Timeline</ContextWrapper>: August 2022 - Ongoing
                </>
            ),
        },
    ],
    [
        '24SevenOffice ERP - Tax Return',
        {
            link: 'https://24sevenoffice.com/',
            description: (
                <>
                    The app is a module of 24SevenOffice ERP system, web application for
                    accountants that is designed to optimize tax return preparation by automating workflows,
                    reducing manual errors, and improving the overall efficiency of tax filing. It integrates with
                    popular accounting and tax systems, provides real-time collaboration with clients, and offers
                    powerful tools for managing documents and have many integrations to a parent software and tax
                    authority services.
                    <br/>
                    <br/>
                    <ContextWrapper>Role</ContextWrapper>: Team Lead / Senior Full-Stack Developer
                    <br/>
                    <ContextWrapper>Technologies and tools</ContextWrapper>: .NET 8 Web API, React 18, AWS, Postgres,
                    AWS S3, AWS Lambda,
                    SignalR
                    <br/>
                    <ContextWrapper>Timeline</ContextWrapper>: October 2023 - May 2024
                </>
            ),
        },
    ],
    [
        '24SevenOffice ERP - Asset Register',
        {
            link: 'https://24sevenoffice.com/',
            description: (
                <>
                    The app is a module of 24SevenOffice ERP system, web application for
                    accountants that helps to track depreciation of company assets, create
                    reports and have many integrations to a parent software.
                    <br/>
                    <br/>
                    <ContextWrapper>Role</ContextWrapper>: Full-Stack Developer {'=>'} Team Lead / Full-Stack Developer
                    <br/>
                    <ContextWrapper>Technologies and tools</ContextWrapper>: .NET Core 2.1
                    Web API {'=>'} .NET 7 Web API, Angular 7 {'=>'} Angular 15 {'=>'}{' '}
                    React 17, Azure {'=>'} AWS, SQL Server, Redis, AWS S3, AWS Lambda,
                    SignalR
                    <br/>
                    <ContextWrapper>Timeline</ContextWrapper>: March 2020 - May 2024
                </>
            ),
        },
    ],
    [
        '24SevenOffice ERP - Mobile App',
        {
            link: 'https://24sevenoffice.com/',
            description: (
                <>
                    Mobile application of 24SevenOffice ERP system (iOS and Android)
                    <br/>
                    <br/>
                    <ContextWrapper>Role</ContextWrapper>: Full-Stack Developer
                    <br/>
                    <ContextWrapper>Technologies and tools</ContextWrapper>: Xamarin, Ext
                    JS, .NET Framework, Azure, SQL Server
                    <br/>
                    <ContextWrapper>Timeline</ContextWrapper>: October 2019 - May 2020
                </>
            ),
        },
    ],
]);
