import { AdminTokensClient } from "./AdminTokensClient";

export default function AdminTokensPage() {
	if (process.env.NODE_ENV === "production") {
		return null;
	}

	return <AdminTokensClient />;
}
