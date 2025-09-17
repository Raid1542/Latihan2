import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Card title="Komponen 1" description="Ini adalah komponen 1" />
            <Card title="Komponen 2" description="Ini adalah komponen 2" />
        </>
    );
}