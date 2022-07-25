import axios from "axios";
import "@styles/Home.scss";
import Header from "@components/Header";
import LegendsCart from "@components/LegendsCart";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";

export default function HomeZ() {
  const [state, setState] = useState();

  const fetchData = async () => {
    const data = await axios
      .get("http://localhost:8000/users")
      .then((res) => res.data);

    setState(data[0]);
  };

  useEffect(() => {
    fetchData(state);
  }, []);

  return (
    <div className="Home">
      <Header />
      <div className="H-actualiter">
        <h1>ACTUALITES</h1>
      </div>
      <LegendsCart />
      <Footer />
    </div>
  );
}
