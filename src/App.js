import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import StatsComponent from "./components/StatsComponent/StatsComponent";
import Layout from "./components/Layout/Layout";
import LatestDetails from "./components/LatestDetails/LatestDetails";
import Linechart from "./components/Linechart/Linechart";

function App() {
  return (
    <Layout>
      <Header />
      <Banner />
      <StatsComponent />
      <LatestDetails />
      {/* <Linechart /> */}
    </Layout>
  );
}

export default App;
