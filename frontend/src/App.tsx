
import './App.css'
import TopNavbar from "./components/TopNav.tsx";
import SideBar from "./components/SideBar.tsx";
import MenuList from "./components/MenuList.tsx";
import Logo from "./components/Logo.tsx";
import 'antd/dist/reset.css'
import './index.css'
import {Layout} from "antd";
import {useState} from "react";

const {Header, Content, Footer} = Layout;

export default function App() {
    const [page, setPage] = useState('1')

    function onNavigate(key: string) {
        setPage(key);
    }

    return (
        <Layout>
            <SideBar selectedKey = {page} onNavigate={onNavigate} />

            <Layout>

            </Layout>

        </Layout>
    )

}
