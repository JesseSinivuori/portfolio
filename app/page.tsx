import { Footer } from "./components/Footer";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { AdManager } from "./components/sections/AdManager";
import { Hero } from "./components/sections/Hero";
import { ContactBottom } from "./components/sections/ContactBottom";
import { DeliveryFeeCalculator } from "./components/sections/DeliveryFeeCalculator";
import { Ecommerce } from "./components/sections/Ecommerce";
import { GradientGenerator } from "./components/sections/GradientGenerator";
import { Chat } from "./components/sections/Chat";
import { News } from "./components/sections/News";
import { ThisWebsite } from "./components/sections/ThisWebsite";
import { TicTacToe } from "./components/sections/TicTacToe";

export default function Home() {
	return (
		<>
			<WelcomeMessage />
			<Hero />
			<Chat />
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
