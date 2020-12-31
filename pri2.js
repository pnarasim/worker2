addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  /*let myResp = await fetch("https://example.com");

  const respType = myResp.headers.get('content-type') || '';
  */
  /*let val = await MyKV.get('randomKey');
  if (!val) {
      val = String(Math.random());
     
  }
  await MyKV.put('randomKey', val);
  */
  /*let val = "Huh!"; 
  let body = await myResp.text();
  body = body.replace("/start/g", val);
  myResp = new Response(body, myResp);
  */
  //return myResp;
  return new Response('pri2 from github actions', {
    headers: { 'content-type': 'text/plain' },
  })
}

