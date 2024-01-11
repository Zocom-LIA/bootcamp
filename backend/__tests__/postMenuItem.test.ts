import { ddb } from '@zocom/services';

describe(('takes a menu item and adds it to the database'), () => {

    test('if an item can be added', async () => {

        await ddb.put({
            TableName: "YYGS_Menu",
            Item: {
                name: "kladdkaka",
                desc: "smakar gott",
                ingredients: ["kakao", "ägg", "smör"],
                price: 999
            }}).promise();

        const { Item } = await ddb.get({ TableName: "YYGS_Menu", Key: { name: "kladdkaka" } }).promise();

        expect(Item).toEqual({
            name: "kladdkaka",
            desc: "smakar gott",
            ingredients: ["kakao", "ägg", "smör"],
            price: 999
        })
    });
});