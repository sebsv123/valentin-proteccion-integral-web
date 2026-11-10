import test from 'node:test';
import assert from 'node:assert/strict';
import { isReasonablePhone } from '../lib/contact-phone.ts';
import { formSchema } from '../lib/lead-form-schema.ts';
import { leadEmailSchema } from '../lib/server/lead-email-schemas.ts';

const client = { fullName:'Prueba sin envío', phone:'603448765', productInterest:'salud', consent:true, website:'' };
const server = { name:client.fullName, phone:client.phone, interest:client.productInterest, consent:true, website:'' };
for (const phone of ['603448765','+34 603 448 765','0034 603-448-765','+44 (20) 7946 0958','0044 20 7946 0958','+1 (202) 555-0123','+91 98765 43210','+51 987 654 321','  +351 912.345.678  ','020 7946 0958']) {
  test(`valid contact format preserved: ${phone}`, () => {
    assert.equal(isReasonablePhone(phone),true);
    for (const english of [false,true]) assert.equal(formSchema(english).safeParse({...client,phone}).success,true);
    const result=leadEmailSchema.parse({...server,phone});assert.equal(result.phone,phone.trim());
  });
}
for (const phone of ['abcabc','+34 abc 603448765','123','123456','000000000','7777777','+','0034','+00 123456789','+34+603448765','(603 448765','603)448(765','+34 () 603448765','+34 ((603)) 448765','1234567890123456','603448765 ext 4','<script>603448765</script>','603\n448765','']) {
  test(`invalid phone rejected by both layers: ${JSON.stringify(phone)}`, () => {
    assert.equal(isReasonablePhone(phone),false);
    for (const english of [false,true]) assert.equal(formSchema(english).safeParse({...client,phone}).success,false);
    assert.equal(leadEmailSchema.safeParse({...server,phone}).success,false);
  });
}
test('email-only server contract remains available; invalid supplied phone is not hidden by email',()=>{
  assert.equal(leadEmailSchema.safeParse({...server,phone:'',email:'contact@example.test'}).success,true);
  assert.equal(leadEmailSchema.safeParse({...server,phone:undefined,email:'contact@example.test'}).success,true);
  assert.equal(leadEmailSchema.safeParse({...server,phone:'abcabc',email:'contact@example.test'}).success,false);
});
test('required consent, honeypot, empty name and payload limits remain enforced',()=>{
  for(const extra of [{consent:false},{website:'bot'},{name:' '},{phone:'6'.repeat(81)}])assert.equal(leadEmailSchema.safeParse({...server,...extra}).success,false);
  for(const extra of [{consent:false},{fullName:' '}])assert.equal(formSchema(false).safeParse({...client,...extra}).success,false);
});
test('validation messages use ES and EN, and never convert invalid input',()=>{
  const results=[false,true].map(english=>formSchema(english).safeParse({...client,phone:'abcabc'}));
  assert.match(results[0].error!.issues[0].message,/teléfono/);assert.match(results[1].error!.issues[0].message,/phone/);
});
