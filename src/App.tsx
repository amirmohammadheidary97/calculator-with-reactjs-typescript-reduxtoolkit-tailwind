import { Provider } from "react-redux"
import Container from "./components/container/container"
import store from "./redux/store"


function App() {
  return <section className="m-0 p-3 w-[100%] h-[100%] flex justify-center align-items-center">
    <Provider store={store}>
      <Container />
    </Provider>
  </section>
}

export default App
