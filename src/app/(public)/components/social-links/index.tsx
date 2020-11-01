import Image from "next/image";
import githubLogo from "./assets/github.svg";
import linkedInLogo from "./assets/linked-in.svg";
import spotifyLogo from "./assets/spotify.svg";

interface LogoElement {
    link: string;
    alt: string;
    content: string;
}

const logos: LogoElement[] = [
    {
        alt: 'github-logo',
        content: githubLogo,
        link: 'https://github.com/mrlldd',
    },
    {
        alt: 'linkedin-logo',
        content: linkedInLogo,
        link: 'https://www.linkedin.com/in/ivan-yeremenko-403a6b188/',
    },
    {
        alt: 'spotify-logo',
        content: spotifyLogo,
        link: 'https://open.spotify.com/user/1ytvagjswjl00avixcs29sh4v?si=C9eGNEyQTNGxSkr4j1o6WA',
    },
];

export default function Links() {
    return <div className="flex flex-row space-x-4">
        {logos.map((x) => (
            <a href={x.link} target='_blank' key={x.link} rel="noopener noreferrer">
                <Image
                    priority
                    alt={x.alt}
                    src={x.content}
                    className="fill-white"
                    height={64}
                    width={64}
                />
            </a>
        ))}
    </div>
}