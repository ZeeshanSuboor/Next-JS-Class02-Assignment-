import Link from "next/link"
import React from "react"

export default function experience (props:any) {
const job = props.params.history;
let jobdes = "";
if (job=="pgnig")
    {
        jobdes="Field Manager	April 2022 – Present (02 Years) Currently working at PGNiG. Responsible for overall management of engineering, projects, commissioning and production operations of Rehman Production Facility (Oil and Gas Processing plant with 03 oil & gas fields, 14 wellheads and two trains of gas sweetening unit, gas dehydration unit, export & front end compressors, power generation and associated processing units.)"
    }
else if (job=="omv")
    {
        jobdes="Inst. & Control Team Leader / E&I Expert	Oct 2014 – Jan 2019: (>04 Years) Worked at OMV Pakistan E&P. Was responsible for Electrical, Measurement, and Instrumentation and Control systems from Engineering and Maintenance point of view."
    }
else if (job=="invensys")
    {
        jobdes="Principal Engineer/Senior Engineer – Control Systems	Aug 2011 – Oct 2014: (>03 Years) Worked at Invensys Operation Management Saudi Arabia, responsible for ESD, DCS and SCADA engineering, services and deployment."
    }
else if (job=="sngpl")
    {
        jobdes="Engineer – SCADA / Instrument (Transmission Dept.)	Aug 2005 – Aug 2011(06 Years) Worked at Sui Northern Gas Pipelines Limited, responsible for design and maintenance of electrical and instrumentation systems of gas compressor stations, SCADA system and coating plants."
    }
return <div>
    <br/>
    <pre> 
        <h4>
    <Link href="/experience/pgnig">PGNiG</Link>               <Link href="/experience/omv">OMV</Link>             <Link href="/experience/invensys">INVENSYS</Link>             <Link href="/experience/sngpl">SNGPL</Link>
        </h4>
        </pre>
    <br/><br/>
        {jobdes}
    </div>

}