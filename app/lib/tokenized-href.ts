export function buildTokenizedHref(
	href: string,
	token: string | null | undefined,
): string {
	const normalizedToken = token?.trim();
	if (!normalizedToken) return href;
	if (!href.startsWith("/")) return href;

	const hashIndex = href.indexOf("#");
	const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
	const pathWithQuery = hashIndex >= 0 ? href.slice(0, hashIndex) : href;

	const queryIndex = pathWithQuery.indexOf("?");
	const path =
		queryIndex >= 0 ? pathWithQuery.slice(0, queryIndex) : pathWithQuery;
	const query = queryIndex >= 0 ? pathWithQuery.slice(queryIndex + 1) : "";

	const params = new URLSearchParams(query);
	if (!params.get("accessToken")) {
		params.set("accessToken", normalizedToken);
	}
	params.delete("t");

	const nextQuery = params.toString();
	return `${path}${nextQuery ? `?${nextQuery}` : ""}${hash}`;
}
