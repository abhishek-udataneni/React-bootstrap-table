import React from 'react';
import { Table } from 'reactstrap';

const TableComponent = (props) => {
  let tableData=props.data;
  return (
    <div>
      <h2 style={{textAlign: "center"}} >This is table made with reactstrap</h2>
    <Table style={{marginTop: "3rem"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>project_name</th>
          <th>lab_name</th>
          <th>lab_location</th>
          <th>created_user</th>
          <th>requested_user_mail</th>
          <th>routers</th>
          <th style={{textAlign: "center"}}>schedule</th>
        </tr>
      </thead>
      <tbody>
          {tableData.map((data, id) => (
            <tr key={`${id}-server-data`}>
              <th scope="row">{id + 1}</th>
              <td>{data.project_name}</td>
              <td>{data.lab_name}</td>
              <td>{data.lab_location}</td>
              <td>{data.created_user}</td>
              <td>{data.requested_user_mail}</td>
              <td>
                <table>
                  <tbody>
                    {data.routers.map((router, id) => (
                      <tr key={`${id}-router`}>
                        <td>{router}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <thead>
                    <tr>
                      {Object.keys(data.schedule[0]).map((scheduleElement, id) => (
                        <th key={`${id}-scheduleElement`}>{scheduleElement}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(data.schedule).map((eachSchedule, id) => (
                      <tr key={`${id}-eachSchedule`}>
                        <td>{eachSchedule.script_name}</td>
                        <td>{eachSchedule.schedule_date}</td>
                        <td>{eachSchedule.schedule_time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>))}
      </tbody>
    </Table>
    </div>
  );
}

export default TableComponent;