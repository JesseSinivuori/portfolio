import { Footer } from "./components/Footer";
import { AdManager } from "./components/sections/AdManager";
import { ContactBottom } from "./components/sections/ContactBottom";
import { DeliveryFeeCalculator } from "./components/sections/DeliveryFeeCalculator";
import { Ecommerce } from "./components/sections/Ecommerce";
import { GradientGenerator } from "./components/sections/GradientGenerator";
import { Hero } from "./components/sections/Hero";
import { News } from "./components/sections/News";
import { Skills } from "./components/sections/Skills";
import { ThisWebsite } from "./components/sections/ThisWebsite";
import { TicTacToe } from "./components/sections/TicTacToe";
import { WelcomeMessage } from "./components/WelcomeMessage";

export default function Home() {
	return (
		<>
			<WelcomeMessage />
			<Hero />
			<Skills />
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
