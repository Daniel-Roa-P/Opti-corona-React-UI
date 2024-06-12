import { HotTable } from "@handsontable/react";

function Impex_table({atributes,header,structure}){

    return(

        <>

            <HotTable
              data={atributes}
              colHeaders={header}
              columns={structure}
              width="100%"
              height="100%"
              rowHeaders={true}
              colWidths={150}
              manualRowMove={true}
              autoWrapRow={true}
              autoWrapCol={true}
              licenseKey="non-commercial-and-evaluation"
            />

        </>

    )


}

export {Impex_table}