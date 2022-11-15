import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";


export function BasePage() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}