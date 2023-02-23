import React from "react";
import {Container} from "./components/Container/Сontainer";
import { Header } from "./components/Header/Header";

export const App = () => {

  return (
    <>
      <Header/>

      <main>
        <nav>
          <Container maks="leskin" className="navigation__container"/>
        </nav>
        <section></section>
      </main>

      <footer></footer>
    </>
  )
}
