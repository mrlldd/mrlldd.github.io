import Link from 'next/link';
import BackgroundCanvas from "@/app/(public)/components/background-canvas";

export default function Page404() {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<BackgroundCanvas />
			<div className="flex flex-col text-center gap-4">
				<h1 className={'text-2xl'}>Oops, that`s wrong :(</h1>
				<span>The page you are looking for was not found.</span>
				<Link href="/" className="text-qetra-success">
					Go to homepage
				</Link>
			</div>
		</main>
	);
}
