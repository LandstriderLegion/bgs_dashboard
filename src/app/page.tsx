import * as Archive from "../../server/archive.json";

export default async function Home() {
  var nodes = <></>;

  for (var i = 0; i < Archive.length; i++) {
    for (var system of Archive[i].data)
    nodes = (
      <>
        {nodes}
        <h2>{system.system_name}</h2>
        <ul>
          <li>Influence: {Math.round(system.influence * 100)}%</li>
          <li>State: {system.state.substring(0,1).toUpperCase() + system.state.substring(1)}</li>
        </ul>
      </>
    )
  }

  const recordedTimestamp = new Date(Archive[0].timestamp);
  const timestamp = (
    <>
      {recordedTimestamp.getMonth() == 0 ? "January" :
      recordedTimestamp.getMonth() == 1 ? "February" :
      recordedTimestamp.getMonth() == 2 ? "March" :
      recordedTimestamp.getMonth() == 3 ? "April" :
      recordedTimestamp.getMonth() == 4 ? "May" :
      recordedTimestamp.getMonth() == 5 ? "June" :
      recordedTimestamp.getMonth() == 6 ? "July" :
      recordedTimestamp.getMonth() == 7 ? "August" :
      recordedTimestamp.getMonth() == 8 ? "September" :
      recordedTimestamp.getMonth() == 9 ? "October" :
      recordedTimestamp.getMonth() == 10 ? "November" : "December"}&nbsp;
      {recordedTimestamp.getUTCDate()},&nbsp;
      <span title={(recordedTimestamp.getFullYear() + 1286).toString()}>{recordedTimestamp.getFullYear()}</span>
      &nbsp;@&nbsp;
      {recordedTimestamp.getUTCHours() < 10 ? `0${recordedTimestamp.getUTCHours()}` : recordedTimestamp.getUTCHours()}:{recordedTimestamp.getUTCMinutes() < 10 ? `0${recordedTimestamp.getUTCMinutes()}` : recordedTimestamp.getUTCMinutes()} UTC
    </>
  )


  return (
    <>
      <h1>Landstrider Legion BGS Dashboard</h1>
      <main>
        {/* <p>Updated: {timestampString}</p> */}
        <p>Updated: {timestamp}</p>
        {nodes}
      </main>
    </>
  );
}
