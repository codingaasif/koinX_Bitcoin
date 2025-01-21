import { createBrowserRouter } from "react-router-dom";
import Navbar from "../pages/Navbar";
import PriceDisplay from "../components/PriceDisplay";
import ChartComponent from "../components/ChartComponent";
import PerformancePage from "../components/PerformancePage";
import SentimentCard from "../components/SentimentCard";
import AboutBitcoin from "../components/AboutBitcoin";
import Tokenomics from "../components/Tokenomics ";
import TeamSection from "../components/TeamSection";
import CryptoCoinsDisplay from "../components/CryptoCoinsDisplay";
// import TrendingCoins from "../components/TrendingCoins";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Footer from "../pages/Footer";

const KoinXRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <PriceDisplay />
                <ChartComponent />
                <PerformancePage />
                <SentimentCard />
                <AboutBitcoin />
                <Tokenomics />
                <TeamSection />
                <CryptoCoinsDisplay />
                {/* <TrendingCoins /> */}
                <YouMayAlsoLike />
                <Footer />
            </>
        ),
    },
]);

export default KoinXRouter;
