import { Box } from "@mui/material"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Box className="flex flex-col w-screen h-screen bg-red-50">
      <Header />
      <Box className="grow">{children}</Box>
      <Footer />
    </Box>
  )
}
