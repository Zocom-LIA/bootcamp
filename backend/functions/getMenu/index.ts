import { successResponse } from '@zocom/responses'; 
import { ddb } from '@zocom/services';
import { MenuItem } from '@zocom/interfaces';

export const handler = async (event: { username: any; error: string; }, context: any) => {
    
  //before: verify token before scaning the table
  // {....}

    // Gets the current user logged in
    const currentUser = event?.username;

    try {
      if (event?.error && event?.error === '401') {
        return successResponse(401, {message: 'Invalid token'});
      }

      // Scanning through 'YYGS_Menu' table
      const params = {
        TableName: 'YYGS_Menu'
      };
      const scannedTable = await ddb.scan(params).promise();
    
    // Filters through the table and looking for the username
    const userMenu = scannedTable.Items?.filter((menu) => menu.username === currentUser);

    // Getting only the users menu
    if (userMenu && userMenu.length > 0) {
      return successResponse(200, {message: "successfully fetching data"});
    } else { 
      return successResponse(404, {message: 'Could not get users menu, try again.'});
    }
  } catch (error) {
    return successResponse(500, {message: 'Error fetching users menu'});
  }
}
