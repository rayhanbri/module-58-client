import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationList = ({applicationPromise}) => {
    const applications = use(applicationPromise)
    // console.log(applications)
    return (
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map((application,index) =><ApplicationRow
        application={application}
        key={application._id}
        index={index}
        ></ApplicationRow>)
      }
    </tbody>
  </table>
</div>
    );
};

export default ApplicationList;