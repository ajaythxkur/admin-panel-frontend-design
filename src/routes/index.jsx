import { Routes, Route } from "react-router-dom";


//our admin
import Dashboard from "../pages/Dashboard.jsx";
import Team from "../pages/Team.jsx";
import BotServer from "../pages/BotServer.jsx";
import ListedGuild from "../pages/ListedGuild.jsx";
import Application from "../pages/Application.jsx";
import DiscordSetting from "../pages/DiscordSetting.jsx";
import Whitelist from "../pages/Whitelist.jsx";
import SubAdmin from "../pages/SubAdmin.jsx";
const App_Routes = () => {
    const routing = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            Component: Dashboard
        },
        {
            name: 'DiscordSetting',
            path: '/discord-setting',
            Component: DiscordSetting
        },
        {
            name: 'Team',
            path: '/team',
            Component: Team
        },
        {
            name: 'SubAdmin',
            path: '/sub-admin',
            Component: SubAdmin
        },
        {
            name: 'Application',
            path: '/application-form',
            Component: Application
        },
        {
            name: 'BotServer',
            path: '/bot-server',
            Component: BotServer
        },
        {
            name: 'ListedGuild',
            path: '/listed-guild',
            Component: ListedGuild
        },
        {
            name: 'Whitelist',
            path: '/whitelist',
            Component: Whitelist
        },




    ]
    return (
        <>
            <Routes>
                {
                    routing.map(({ path, Component }, index) => (
                        <Route key={index} path={path} element={<Component />} />
                    ))
                }
            </Routes>
        </>
    )
}
export default App_Routes;