import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App.jsx";

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm6uv2z5v03ic07w0fv8vjacw/master",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
