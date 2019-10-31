import React from 'react';

const CareerContent = () => {
    return (
        <div className="careerText">
            <h2>Career History</h2>
            <span>
                Below is a summary of my work history.
                As I have only obtained my Japanese visa recently,
                all of these roles were in Australia and prior to my recent studies. </span>
            <table>
                <tbody>
                    <tr>
                        <th>2018/19   |
                        </th>
                        <td>Looking Up Landscapes</td>
                        <td>Marketing, Technical Support and Labouring</td>
                    </tr>
                    <tr>
                        <th>2016</th>
                        <td>Mountain Designs - Store Assistant Manager</td>
                        <td>Staff Rostering and Management, Stock Coordination and Sales</td>
                    </tr>
                    <tr>
                        <th>2015</th>
                        <td>Collaroy Centre</td>
                        <td>Staff, Client and Risk Management</td>
                    </tr>
                    <tr>
                        <th>2012</th>
                        <td>Camp Kedron</td>
                        <td>Activity Supervision, Group Coordination</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CareerContent;