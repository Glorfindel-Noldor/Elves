import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const routs = createBrowserRouter(routes);
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routs}/>)
