import {
	AdManager,
	ContactBottom,
	DeliveryFeeCalculator,
	Ecommerce,
	Footer,
	GradientGenerator,
	Hero,
	News,
	Skills,
	ThisWebsite,
	TicTacToe,
	WelcomeMessage,
} from "./components/index";

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
