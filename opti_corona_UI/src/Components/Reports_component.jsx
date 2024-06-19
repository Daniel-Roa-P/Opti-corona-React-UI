import React from 'react';

const Reports_component = ({ reporte }) => {

    let [info, setInfo] = React.useState([])
    let [warning, setWarning] = React.useState([])
    let [danger, setDanger] = React.useState([])

    React.useEffect(() => {

        setInfo(reporte[0])
        setWarning(reporte[1])
        setDanger(reporte[2])

    }, [reporte])

    return (

        <>

            <div className="h-auto w-full bg-green-400">

                {info && info.map((report) => (

                    <p className='p-2 break-all' key={report.split(' ')[0]}> {report} </p>

                ))}

            </div>
            <div className="h-auto w-full bg-yellow-400 my-4">

                {warning && warning.map((report) => (

                    <p className='p-2 break-all' key={report}> {report} </p>

                ))}

            </div>
            <div className="h-auto w-full bg-red-400">

                {danger && danger.map((report) => (

                    <p className='p-2 break-all' key={report.split(' ')[0]}> {report} </p>

                ))}

            </div>
        </>

    )

};

export default Reports_component;