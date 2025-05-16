"use client"

import BannerAgendamento from "@/component/banner_agendamento/BannerAgendamento";
import Main from "@/component/main/Main";
import React from "react";
import Logado from "./logado/page";
import { useAuth } from "@/context/AuthContext";


export default function Home() {

  const { user } = useAuth();
  return (
    <>

      {
        user ? (
          <Logado />
        ) : (
          <>
            <Main />
            <BannerAgendamento />
          </>
        )
      }
    </>
  );
}
