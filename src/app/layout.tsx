import Link from "next/link"

function RootLayout(props: any){
return(
   <html>
      <body> 
  	    <h1>Profile - Zeeshan Suboor</h1>
        <Link href="/highlights">Highlights</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Link href="/intro">Introduction</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Link href="/qualification">Qualification</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Link href="/experience/history">Experience</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        {props.children}
       </body>
      </html>
  )
  }
  export default RootLayout
  