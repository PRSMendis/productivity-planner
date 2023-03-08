import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';

export default function DashboardRootLayout({children}) {
  return (
    <html lang="en">
    <head>
      {/* <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title> */}
    </head>
    <body className="h-screen w-scren candy-mesh p-6">
      <GlassPane
        className="w-full h-full flex items-center justify-center">
        <Sidebar></Sidebar>
        {children}
      </GlassPane>
      <div id="modal"></div>
    </body>
    </html>
  )
}