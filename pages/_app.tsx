import Layout from "../containers/Layout";

//REDUX STORE
import store from "../redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
