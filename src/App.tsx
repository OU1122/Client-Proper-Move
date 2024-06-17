import HomePage from "./routes/homepage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout.tsx";
import ListPage from "./routes/list-page.tsx";
import SinglePage from "./routes/single-page.tsx";
import ProfilePage from "./routes/profile-page.tsx";
import Register from "./routes/register.tsx";
import Login from "./routes/login.tsx";
import UpdateProfile from "./routes/updateProfile.tsx";
import NewPost from "./routes/new-post.tsx";
import { listPageLoader, singlePageLoader } from "./lib/loaders.tsx";

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
					loader: listPageLoader,
				},
				{
					path: ":id",
					element: <SinglePage />,
					loader: singlePageLoader,
				},
				{
					path: "register",
					element: <Register />,
				},
				{
					path: "login",
					element: <Login />,
				},
			],
		},
		{
			path: "/",
			element: <RequireAuth />,
			children: [
				{
					path: "/profile",
					element: <ProfilePage />,
				},
				{
					path: "/update-profile/:id",
					element: <UpdateProfile />,
				},
				{
					path: "/add-post",
					element: <NewPost />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
