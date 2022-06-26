import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://127.0.0.1:3333/kapi2`;

test('Gate 2 test', async t => {

    if((await t.expect(Selector('#alert-div').innerText).eql('Car parked successfully' || 'GATE 2 is FULL')) ){
        return true;
    }
});