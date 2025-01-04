import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import appStore from "./redux/store/appStore.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import "./index.css"
import App from "./App.jsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="bottom-right" />
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
