import env from '@/environment/server';

export default function SiteFooter() {
	return (
		<footer className="fixed bottom-0">
			<div className="invisible md:visible z-50 text-gray-700 select-none">
				version: <span className="select-text">{env.version}</span>
			</div>
		</footer>
	);
}
