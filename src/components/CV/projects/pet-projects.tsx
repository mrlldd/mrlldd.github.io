import React from 'react';
import ContextWrapper from '../components/ContextWrapper';
import {Project} from "./types";

const cachingLibraryDescription = (
  <>
    The <ContextWrapper>aspnetcore</ContextWrapper> library that provides a set of caching
    utilities (caches and caching loaders) with dependency injection and flexible decoration. Currently hosted
    on{' '}
    <a
      href="https://www.nuget.org/packages/mrlldd.Caching"
      target="_blank"
      rel="noreferrer">
      <ContextWrapper>NuGet</ContextWrapper>
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
      <ContextWrapper>NuGet</ContextWrapper>
    </a>
    .
  </>
);

const mediaSeekerTelegramBotDescription = (
  <>
    The inline <ContextWrapper>telegram bot</ContextWrapper> that seeks for media (in such
    services as <ContextWrapper>YouTube</ContextWrapper> and <ContextWrapper>SoundCloud</ContextWrapper>)
    and provides the results in inline mode. Done with <ContextWrapper>dotnet</ContextWrapper>
    , <ContextWrapper>fsharp</ContextWrapper> and <ContextWrapper>Suave</ContextWrapper>.
  </>
);

const soundCloudTrackDownloaderTelegramBotDescription = (
  <>
    The <ContextWrapper>telegram bot</ContextWrapper> that seeks for media in{' '}
    <ContextWrapper>SoundCloud</ContextWrapper> and able to download and provide needed result
    as file. Currently hosted on{' '}
    <a href="https://heroku.com" target="_blank" rel="noreferrer">
      <ContextWrapper>Heroku</ContextWrapper>
    </a>
    .
  </>
);

const hookrRentServiceDescription = (
  <>
    The hookah rent service system, consists of:
    <br />
    <span
      style={{
        marginLeft: 32,
      }}>
      - Telegram bot(<ContextWrapper>csharp</ContextWrapper>, <ContextWrapper>aspnetcore</ContextWrapper>,{' '}
      <ContextWrapper>efcore</ContextWrapper>, <ContextWrapper>mssql</ContextWrapper>)
    </span>
    <br />
    <span
      style={{
        marginLeft: 32,
      }}>
      - PWA(<ContextWrapper>csharp</ContextWrapper>,{' '}
    </span>
    <ContextWrapper>aspnetcore</ContextWrapper>, <ContextWrapper>typescript</ContextWrapper>,{' '}
    <ContextWrapper>react</ContextWrapper>)
    <br />
  </>
);

export const petProjects: Map<string, Project> = new Map([
  [
    'Caching',
    {
      link: 'https://github.com/mrlldd/dotnet-caching',
      renderedDescription: cachingLibraryDescription
    }
  ],
  [
    'Functional',
    {
      link: 'https://github.com/mrlldd/dotnet-functional',
      renderedDescription: functionalLibraryDescription,
    },
  ],
  [
    'Media Seeker Telegram Bot',
    {
      link: 'https://github.com/mrlldd/dotnet-media-seek-telegram-bot',
      renderedDescription: mediaSeekerTelegramBotDescription,
    },
  ],
  [
    'SoundCloud Track Downloader Telegram Bot',
    {
      link: 'https://github.com/mrlldd/dotnet-soundcloud-telegram-bot',
      renderedDescription: soundCloudTrackDownloaderTelegramBotDescription,
    },
  ],
  [
    'Hookr Rent Service',
    {
      link: 'https://github.com/mrlldd/hookr-rent-service',
      renderedDescription: hookrRentServiceDescription,
    },
  ],
]);
