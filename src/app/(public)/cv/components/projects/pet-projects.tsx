import React from 'react';
import {Project} from "@/app/(public)/cv/components/projects/index";
import ContextWrapper from "@/app/(public)/components/context-wrapper";
import {FaLink} from "react-icons/fa6";

const cachingLibraryDescription = (
    <>
        The <ContextWrapper>aspnetcore</ContextWrapper> library that provides a set of caching
        utilities (caches and caching loaders) with dependency injection and flexible decoration. Currently hosted
        on{' '}
            <a
                href="https://www.nuget.org/packages/mrlldd.Caching"
                target="_blank"
                rel="noreferrer">
                <ContextWrapper>NuGet{' '}<FaLink className='inline align-middle'/></ContextWrapper>
            </a>
        .
    </>
)

const functionalLibraryDescription = (
    <>
        The <ContextWrapper>dotnet</ContextWrapper> library that provides a set of functional
        types and extensions. Done with <ContextWrapper>csharp</ContextWrapper>. Currently hosted
        on{' '}
            <a
                href="https://www.nuget.org/packages/mrlldd.Functional"
                target="_blank"
                rel="noreferrer">
                <ContextWrapper>NuGet{' '}<FaLink className='inline align-middle'/></ContextWrapper>
            </a>
        .
    </>
);

const richWebApiDescription = (
    <>
        Project is a starter repository designed to accelerate development of modern,
        scalable <ContextWrapper>aspnetcore</ContextWrapper> applications. It
        reflects the architecture and practices that I&#39;ve found most effective in my own projects. It includes the
        core
        features and configurations that I rely on for every new web application or API, all with a focus on clean,
        maintainable, and extensible code.
        By using this template, I wanted to eliminate repetitive setup tasks that I’ve tackled on dozens of projects, so
        I decided to abstract them into a
        ready-to-go solution to save both time and headaches.
    </>
)

const tailsDescription = (
    <>
        Project is a lightweight and highly flexible <ContextWrapper>typescript</ContextWrapper>
        <ContextWrapper>react</ContextWrapper> library that provides a structured wireframe for creating chainable
        dialog
        modals with support for popular component libraries, like <ContextWrapper>material-ui (mui)</ContextWrapper>.
        The library allows you to easily
        implement complex modal flows—such as multi-step wizards, forms, or interactive processes—by chaining different
        modal screens, each of which can use any UI components from libraries
        like <ContextWrapper>mui</ContextWrapper> and <ContextWrapper>ant design</ContextWrapper>.
    </>
)

export const petProjects: Map<string, Project> = new Map([
    [
        'Tails.js', {
        link: 'https://github.com/qetra-studio/dialog-trees',
        description: tailsDescription
    }
    ],
    [
        'RichWebApi', {
        link: 'https://github.com/qetra-studio/dotnet-webapi-template',
        description: richWebApiDescription
    }
    ],
    [
        'Caching',
        {
            link: 'https://github.com/mrlldd/dotnet-caching',
            description: cachingLibraryDescription
        }
    ],
    [
        'Functional',
        {
            link: 'https://github.com/mrlldd/dotnet-functional',
            description: functionalLibraryDescription,
        },
    ],
]);
