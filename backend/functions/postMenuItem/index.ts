import { ddb } from '@zocom/services';

exports.handler = async (event, context) => {

    try {

        const menuItem = JSON.parse(event.body);
        ddb.put({
            Tablename: 'YYGS_Menu'
        });
    }
    catch (error) {


    }
}