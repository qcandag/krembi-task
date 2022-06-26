import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://127.0.0.1:3333/kapi1`;

test('Gate 1 test', async t => {

    if((await t.expect(Selector('#alert-div').innerText).eql('Car parked successfully' || 'GATE 1 is FULL')) ){
        return true;
    }
});