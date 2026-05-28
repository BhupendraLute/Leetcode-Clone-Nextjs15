export async function generateMetadata({ params }) {
	const { id } = await params;

	return {
		title: `Problem ${id}`,
		description: `Practice problem ${id} on LeetCode Clone.`,
	};
}

const ProblemPage = async ({ params }) => {
	const { id } = await params;

	return (
		<main className="min-h-screen px-4 pt-28">
			<section className="mx-auto max-w-5xl space-y-4">
				<p className="text-sm font-medium text-amber-600 dark:text-amber-400">
					Problem
				</p>
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
					{id}
				</h1>
				<p className="text-gray-600 dark:text-gray-300">
					Problem details and the code editor will appear here once problem data
					is available.
				</p>
			</section>
		</main>
	);
};

export default ProblemPage;
