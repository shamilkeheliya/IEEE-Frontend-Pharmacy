import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Sales } from "../components/dashboard/sales";
import { CheckIn } from "../components/dashboard/check-in";
import { ScheduleRooms } from "../components/dashboard/schedule-rooms";
import { CheckOuts } from "../components/dashboard/check-outs";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { NewBooking } from "../components/dashboard/new-booking";
import { useEffect } from "react";
import Router from "next/router";

const Page = () => {

  useEffect(()=>{
     if(!localStorage.getItem("token")){
      Router.push("/login");
     }
  },[localStorage.getItem("token")])

  return (
    <>
      <Head>
        <title>Admin Dashboard | Taprobana Rome</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            hello
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
