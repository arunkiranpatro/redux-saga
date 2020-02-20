import React, { Suspense } from 'react';
import Table from './UILibrary/Table';
import TableColumn from './UILibrary/TableColumn';
import TableRows from './UILibrary/TableRows';
import TableRow from './UILibrary/TableRow';
import TableColumns from './UILibrary/TableColumns';
import Loading from './UILibrary/Loading';

const Moment = React.lazy(() => import('react-moment'));

const mockdata = [
    {
        id: 1,
        first_name: 'Coralie',
        last_name: 'Walklot',
        email: 'cwalklot0@accuweather.com',
        gender: 'Female',
        DOB: '4/8/1990',
    },
    {
        id: 2,
        first_name: 'Mattie',
        last_name: 'Torry',
        email: 'mtorry1@360.cn',
        gender: 'Female',
        DOB: '9/11/1996',
    },
    {
        id: 3,
        first_name: 'Sarajane',
        last_name: 'Leebetter',
        email: 'sleebetter2@flickr.com',
        gender: 'Female',
        DOB: '4/4/1999',
    },
    {
        id: 4,
        first_name: 'Merci',
        last_name: 'Laight',
        email: 'mlaight3@csmonitor.com',
        gender: 'Female',
        DOB: '1/11/1995',
    },
    {
        id: 5,
        first_name: 'Cristiano',
        last_name: 'Knightsbridge',
        email: 'cknightsbridge4@lycos.com',
        gender: 'Male',
        DOB: '5/2/1998',
    },
    {
        id: 6,
        first_name: 'Godfry',
        last_name: 'Swalough',
        email: 'gswalough5@timesonline.co.uk',
        gender: 'Male',
        DOB: '6/8/1994',
    },
    {
        id: 7,
        first_name: 'Lauralee',
        last_name: 'Gibbard',
        email: 'lgibbard6@meetup.com',
        gender: 'Female',
        DOB: '10/30/1997',
    },
    {
        id: 8,
        first_name: 'Jules',
        last_name: 'Londesborough',
        email: 'jlondesborough7@house.gov',
        gender: 'Male',
        DOB: '4/8/1994',
    },
    {
        id: 9,
        first_name: 'Billye',
        last_name: 'Kobierra',
        email: 'bkobierra8@indiatimes.com',
        gender: 'Female',
        DOB: '10/9/1991',
    },
    {
        id: 10,
        first_name: 'Hubert',
        last_name: 'Berthel',
        email: 'hberthel9@simplemachines.org',
        gender: 'Male',
        DOB: '4/19/1992',
    },
];

const SampleTable = () => {
    function renderTablebody(data) {
        const childBody = data.map(result => (
          <TableRows key={result.id}>
            <TableRow>{result.id}</TableRow>
            <TableRow>{result.first_name}</TableRow>
            <TableRow>{result.last_name}</TableRow>
            <TableRow>{result.email}</TableRow>
            <TableRow>{result.gender}</TableRow>
            <TableRow>
              <Suspense fallback={<Loading />}>
                <Moment format="DD-MM-YYYY hh:mm a">
                  {result.DOB}
                </Moment>
              </Suspense>
            </TableRow>
          </TableRows>
        ));
        return childBody;
    }
    function renderTableHeader(props) {
        return (
          <TableColumns {...props}>
            <TableColumn id="id" sortable>
              ID
            </TableColumn>
            <TableColumn id="first_name" sortable>
              First Name
            </TableColumn>
            <TableColumn id="last_name" sortable>
              Last Name
            </TableColumn>
            <TableColumn id="email" sortable>
              Email
            </TableColumn>
            <TableColumn id="gender">Gender</TableColumn>
            <TableColumn id="DOB" sortable>
              Date of Birth
            </TableColumn>
          </TableColumns>
        );
    }

    return (
      <Table
        data={mockdata}
        renderTableHeader={renderTableHeader}
        renderTableBody={renderTablebody}
        sortColumn="id"
        sortDirection="desc"
      />
    );
};
export default SampleTable;
