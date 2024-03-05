import Main from "./main";
import SubForm from "./components/subform";
import Elf from "./components/Elf";
import NavBar from "./NavBar";

const routes = [
    {
        path: '/',
        element: <Main/>,
        errorElement: (
            <div>
                <h1>Broken Page</h1>
                <NavBar/>
            </div>
        ),
        children: [
            {
                path:'/form',
                element: <SubForm />,
                exact:true

            },
            {
                path: '/elf',
                element: <Elf/>,
                exact:true
            }
        ]
    }
]

export default routes;
