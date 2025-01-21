import { Provider } from "react-redux"
import store from "./store"
import App from "../App"

const ProviderSlice = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default ProviderSlice