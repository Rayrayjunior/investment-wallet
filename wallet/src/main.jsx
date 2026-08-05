import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import Transaction from "./pages/Transaction";
import Wallet from "./pages/Wallet";
import Watchlist from "./pages/Watchlist";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "transactions",
        element: <Transaction />
      },
      {
        path: "wallet",
        element: <Wallet />
      },
      {
        path: "watchlist",
        element: <Watchlist />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)