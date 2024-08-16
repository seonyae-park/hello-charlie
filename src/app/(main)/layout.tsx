import { Box } from "@mui/material"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Box className="f-col-between-stretch w-screen h-screen">
      <Header />
      <Box className="grow max-h-full overflow-y-scroll">{children}</Box>
      <Box className="">
        <Footer />
      </Box>
    </Box>
  )
}
