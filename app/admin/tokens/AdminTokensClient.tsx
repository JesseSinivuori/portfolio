"use client";

import { type SyntheticEvent, useState } from "react";

type CreateTokenResponse = {
	token: string;
	expiresAt: string;
	label: string | null;
	shareUrl: string;
};

export function AdminTokensClient() {
	const [adminSecret, setAdminSecret] = useState("");
	const [label, setLabel] = useState("");
	const [result, setResult] = useState<CreateTokenResponse | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(null);
		setResult(null);
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/admin/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					adminSecret,
					label: label.trim() || null,
				}),
			});

			const json = await response.json();

			if (!response.ok) {
				setError(json?.error ?? "Failed to create token.");
				return;
			}

			setResult(json as CreateTokenResponse);
		} catch {
			setError("Request failed. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const copyText = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
		} catch {
			setError("Copy failed. You can still copy manually.");
		}
	};

	return (
		<main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12">
			<h1 className="text-3xl font-semibold">Token Generator</h1>
			<p className="mt-2 text-sm text-black/70 dark:text-white/70">
				Creates signed chat access tokens with a fixed 30-day expiry.
			</p>

			<form
				onSubmit={handleSubmit}
				className="mt-8 space-y-4 rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/15 dark:bg-white/5"
			>
				<div className="space-y-1">
					<label htmlFor="adminSecret" className="text-sm font-medium">
						Admin secret
					</label>
					<input
						id="adminSecret"
						type="password"
						value={adminSecret}
						onChange={(e) => setAdminSecret(e.target.value)}
						className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-sm outline-none focus:border-blue-700 dark:border-white/20 dark:bg-black/20 dark:focus:border-cyan-400"
						required
					/>
				</div>

				<div className="space-y-1">
					<label htmlFor="label" className="text-sm font-medium">
						Label (optional)
					</label>
					<input
						id="label"
						type="text"
						value={label}
						onChange={(e) => setLabel(e.target.value)}
						placeholder="Acme - Frontend Role"
						maxLength={120}
						className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-sm outline-none focus:border-blue-700 dark:border-white/20 dark:bg-black/20 dark:focus:border-cyan-400"
					/>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-cyan-600 dark:hover:bg-cyan-500"
				>
					{isSubmitting ? "Creating..." : "Create token"}
				</button>
			</form>

			{error && (
				<p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>
			)}

			{result && (
				<section className="mt-8 space-y-4 rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/15 dark:bg-white/5">
					<h2 className="text-lg font-semibold">Token created</h2>
					<p className="text-sm text-black/70 dark:text-white/70">
						Expires at: {new Date(result.expiresAt).toLocaleString()}
					</p>

					<div className="space-y-2">
						<p className="text-sm font-medium">Share URL</p>
						<textarea
							readOnly
							value={result.shareUrl}
							rows={3}
							className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-sm dark:border-white/20 dark:bg-black/20"
						/>
						<button
							type="button"
							onClick={() => void copyText(result.shareUrl)}
							className="rounded-md border border-black/20 px-3 py-1.5 text-xs transition hover:border-black/40 dark:border-white/25 dark:hover:border-white/45"
						>
							Copy URL
						</button>
					</div>

					<div className="space-y-2">
						<p className="text-sm font-medium">JWT</p>
						<textarea
							readOnly
							value={result.token}
							rows={5}
							className="w-full rounded-lg border border-black/15 bg-white p-2.5 text-xs dark:border-white/20 dark:bg-black/20"
						/>
						<button
							type="button"
							onClick={() => void copyText(result.token)}
							className="rounded-md border border-black/20 px-3 py-1.5 text-xs transition hover:border-black/40 dark:border-white/25 dark:hover:border-white/45"
						>
							Copy JWT
						</button>
					</div>
				</section>
			)}
		</main>
	);
}
