import React from 'react';
import Context from '../Context/Context';

export enum ProjectKeys {
  Functional = 'Functional',
  MediaSeekerTelegramBot = 'Media Seeker Telegram Bot',
  SoundCloudTrackDownloaderTelegramBot = 'SoundCloud Track Downloader Telegram Bot',
  HookrRentService = 'Hookr Rent Service',
}

const functionalLibraryDescription = (
  <>
    The <Context>dotnet</Context> library that provides a set of functional
    types and extensions. Done with <Context>csharp</Context>. Currently hosted
    on{' '}
    <a
      href="https://www.nuget.org/packages/mrlldd.Functional"
      target="_blank"
      rel="noreferrer">
      <Context>NuGet</Context>
    </a>
    .
  </>
);

const mediaSeekerTelegramBotDescription = (
  <>
    The inline <Context>telegram bot</Context> that seeks for media (in such
    services as <Context>YouTube</Context> and <Context>SoundCloud</Context>)
    and provides the results in inline mode. Done with <Context>dotnet</Context>
    , <Context>fsharp</Context> and <Context>Suave</Context>.
  </>
);

const soundCloudTrackDownloaderTelegramBotDescription = (
  <>
    The <Context>telegram bot</Context> that seeks for media in{' '}
    <Context>SoundCloud</Context> and able to download and provide needed result
    as file. Currently hosted on{' '}
    <a href="https://heroku.com" target="_blank" rel="noreferrer">
      <Context>Heroku</Context>
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
      - Telegram bot(<Context>csharp</Context>, <Context>dotnet</Context>,{' '}
    </span>
    <Context>efcore</Context>)
    <br />
    <span
      style={{
        marginLeft: 32,
      }}>
      - PWA(<Context>aspnetcore</Context>,{' '}
    </span>
    <Context>csharp</Context>, <Context>typescript</Context>,{' '}
    <Context>react</Context>)
    <br />
  </>
);

export interface Project {
  link: string;
  renderedDescription: JSX.Element;
}

export const projectsMap: Map<ProjectKeys, Project> = new Map([
  [
    ProjectKeys.Functional,
    {
      link: 'https://github.com/mrlldd/functional',
      renderedDescription: functionalLibraryDescription,
    },
  ],
  [
    ProjectKeys.MediaSeekerTelegramBot,
    {
      link: 'https://github.com/mrlldd/dotnet-media-seek-telegram-bot',
      renderedDescription: mediaSeekerTelegramBotDescription,
    },
  ],
  [
    ProjectKeys.SoundCloudTrackDownloaderTelegramBot,
    {
      link: 'https://github.com/mrlldd/dotnet-media-seek-telegram-bot',
      renderedDescription: soundCloudTrackDownloaderTelegramBotDescription,
    },
  ],
  [
    ProjectKeys.HookrRentService,
    {
      link: 'https://github.com/mrlldd/hookr-rent-service',
      renderedDescription: hookrRentServiceDescription,
    },
  ],
]);
