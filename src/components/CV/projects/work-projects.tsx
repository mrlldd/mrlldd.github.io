import ContextWrapper from '../components/ContextWrapper';
import { Project } from './types';

export const workProjects: Map<string, Project> = new Map<string, Project>([
  [
    '24SevenOffice ERP - Asset Register',
    {
      link: 'https://24sevenoffice.com/',
      renderedDescription: (
        <>
          The app is a module of 24SevenOffice ERP system, web application for
          accountants that helps to track depreciation of company assets, create
          reports and have many integrations to a parent software.
          <br />
          <ContextWrapper>Role</ContextWrapper>: Full-Stack Developer, Team Lead
          <br />
          <ContextWrapper>Technologies and tools</ContextWrapper>: .NET Core 2.1
          Web API {'=>'} .NET 7 Web API, Angular 7 {'=>'} Angular 15 {'=>'}{' '}
          React 17, Azure {'=>'} AWS, SQL Server, Redis, AWS S3, AWS Lambda,
          SignalR
        </>
      ),
    },
  ],
  [
    'OPSolutions US - EHR',
    {
      link: 'https://www.opsolutions.us/',
      renderedDescription: (
        <>
          An electronic version of a patient's medical history, that is
          maintained by the provider over time, and may include all of the key
          administrative clinical data relevant to that persons care under a
          particular provider, including demographics, progress notes, problems,
          vital signs and past medical history. The EHR automates access to
          information and has the potential to streamline the clinician’s
          workflow.
          <br />
          <ContextWrapper>Role</ContextWrapper>: Full-Stack Developer
          <br />
          <ContextWrapper>Technologies and tools</ContextWrapper>: .NET 7 Web
          API, React 18, Azure, SQL Server, Redis, SignalR
        </>
      ),
    },
  ],
  [
    '24SevenOffice ERP - Mobile App',
    {
      link: 'https://24sevenoffice.com/',
      renderedDescription: (
        <>
          Mobile application of 24SevenOffice ERP system (iOS and Android)
          <br />
          <ContextWrapper>Role</ContextWrapper>: Full-Stack Developer
          <br />
          <ContextWrapper>Technologies and tools</ContextWrapper>: Xamarin, Ext
          JS, .NET Framework, Azure, SQL Server
        </>
      ),
    },
  ],
]);
