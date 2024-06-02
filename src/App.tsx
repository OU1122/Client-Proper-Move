import HomePage from "./routes/homepage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout.tsx";
import ListPage from "./routes/list-page.tsx";
import SinglePage from "./routes/single-page.tsx";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "list",
					element: <ListPage />,
				},
				{
					path: ":id",
					element: <SinglePage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
