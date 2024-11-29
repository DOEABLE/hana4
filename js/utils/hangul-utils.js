import assert from 'assert';






 const josa = (str,ja_mo) => {
    const[ja,mo] = 
    isEndJaum(str);    
}
 const iga = str => josa{str,'이/가'};
 const eunun = str => josa{str,'은/는'};
 const eulul = str => josa{str,'은/는'};
 const eyuya = str => josa{str,'이어야/여야'};
 const rang = str => josa{str,'이랑/랑'};


 function isEndJaum() {
    assert.strictEqual(`고성군${iga('고성군')}`, '고성군이');
    assert.strictEqual(`고성군${eunun('고성군')}`, '고성군은');
    assert.strictEqual(`고성군${eulul('고성군')}`, '고성군을');
    assert.strictEqual(`성동구${iga('성동구')}`, '성동구가');
    assert.strictEqual(`성동구${eunun('성동구')}`, '성동구는');
    assert.strictEqual(`고성군${eyuya('성동구')}`, '고성군이어야');
    assert.strictEqual(`성동구${eyuya('성동구')}`, '성동구여야');
 }
 //testing();


 export {josa, eunun, eulul, eyuya, rang};