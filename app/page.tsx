import { Footer } from "./components/Footer";
import { AdManager } from "./components/sections/AdManager";
import { Chat } from "./components/sections/Chat";
import { ContactBottom } from "./components/sections/ContactBottom";
import { DeliveryFeeCalculator } from "./components/sections/DeliveryFeeCalculator";
import { Ecommerce } from "./components/sections/Ecommerce";
import { GradientGenerator } from "./components/sections/GradientGenerator";
import { Hero } from "./components/sections/Hero";
import { News } from "./components/sections/News";
import { ThisWebsite } from "./components/sections/ThisWebsite";
import { TicTacToe } from "./components/sections/TicTacToe";
import { WelcomeMessage } from "./components/WelcomeMessage";

export default function Home() {
	const hasServerApiKey = Boolean(process.env.OPENROUTER_API_KEY?.trim());

	return (
		<>
			<WelcomeMessage />
			<Hero />
			<Chat hasServerApiKey={hasServerApiKey} />
			<News />
			<TicTacToe />
			<Ecommerce />
			<AdManager />
			<GradientGenerator />
			<DeliveryFeeCalculator />
			<ThisWebsite />
			<ContactBottom />
			<Footer />
		</>
	);
}
